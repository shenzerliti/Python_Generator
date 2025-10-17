import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // <-- Correct import for custom Python generators
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import toolboxCategories from "./toolboxCategories";
// import "./customBlocks";
// import "./customPythonGenerators";
import "./allblocks";
import CodeDisplay from "./CodeDisplay";
import "../css/main.css";

export default function BlocklyEditor({ onWorkspaceReady }) {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  // --- Prevent auto "var = None" initialization ---
  pythonGenerator.finish = function(code) {
    // Just return the user-generated code
    return code;
  };

  // --- Patch: prevent flyout clear errors (known Blockly bug) ---
  useEffect(() => {
    const oldClearOldBlocks = Blockly.Flyout.prototype.clearOldBlocks;
    Blockly.Flyout.prototype.clearOldBlocks = function () {
      try {
        oldClearOldBlocks.call(this);
      } catch (e) {
        console.warn("Ignored Blockly flyout dispose error:", e);
      }
    };
  }, []);

  // --- Inject Blockly once ---
  useEffect(() => {
    const workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxCategories,
      collapse: true,
      comments: true,
      disable: false,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: "start",
      scrollbars: true,
      sounds: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      renderer: "zelos",
      toolboxOptions: {
        html: true
      }
    });

    workspaceRef.current = workspace;

    // 👇 Send workspace up to App.js
    if (onWorkspaceReady) {
      onWorkspaceReady(workspace);
    }

    // ✅ Define listener separately so we can remove it later
    const updateCode = () => {
      if (!workspaceRef.current) return;
      try {
        pythonGenerator.init(workspaceRef.current);
        const liveCode = pythonGenerator.workspaceToCode(workspaceRef.current);
        setCode(liveCode);
        setShowOutput(false);
      } catch (err) {
        console.error("Blockly code generation error:", err);
      }
    };

    // ✅ Add listener only once
    workspace.addChangeListener(updateCode);

    return () => {
      // ✅ Remove listener + dispose workspace
      workspace.removeChangeListener(updateCode);
      workspace.dispose();
      workspaceRef.current = null;
    };
  }, [onWorkspaceReady]);

const swalConfig = {
  width: '420px',
  padding: '1rem',
  background: '#000000ff',
  color: '#ffffffff',
  showCancelButton: true,
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel',
  // these are still useful for basic color overrides:
  confirmButtonColor: '#ff8800',
  cancelButtonColor: '#6c6c6c',
  input: 'text',
  inputAttributes: {
    maxlength: 100,
    autocapitalize: 'on',
    autocorrect: 'off'
  },
  customClass: {
    popup: 'my-swal-popup',
    title: 'my-swal-title',
    content: 'my-swal-content',
    input: 'my-swal-input',
    confirmButton: 'my-swal-confirm',
    cancelButton: 'my-swal-cancel'
  },
  backdrop: true,
  showCloseButton: false,
  focusConfirm: false,
  buttonsStyling: false // we style buttons via CSS classes below
};

  // --- SweetAlert2 prompt helper ---
  // returns true if all prompts were answered, false if user cancelled any prompt
  async function promptForInputBlocksWithSwal(workspace) {
    if (!workspace) return true;
    const blocks = workspace.getAllBlocks().filter(b => b.type === 'inputno' || b.type === 'inputstr');

    for (const block of blocks) {
      const placeholder = (block.getFieldValue && block.getFieldValue('PROMPT')) || '';
      const result = await Swal.fire({
        ...swalConfig,
        inputPlaceholder: placeholder
      
      });

      if (result.isConfirmed) {
        block.userInput = result.value;
      } else {
        // user cancelled/dismissed -> abort the entire prompting/run
        return false;
      }
    }
    return true; // all prompts confirmed
  }

  // Generate Python code (returns generated code string)
  const generatePython = () => {
    if (!workspaceRef.current) return "";
    try {
      pythonGenerator.init(workspaceRef.current);    // 🔹 Initialize
      const final = pythonGenerator.workspaceToCode(workspaceRef.current);
      setCode(final);
      setShowOutput(false);
      console.log("Generated code to run:\n", final);
      return final;
    } catch (err) {
      console.error("Python generation failed:", err);
      return "";
    }
  };

  // Run Python code using Skulpt (Swal-only prompting; no window.prompt anywhere)
  const runCode = async () => {
    const workspace = workspaceRef.current;
    if (!workspace) return;

    // Prompt using SweetAlert2; abort if user cancels any prompt
    const ok = await promptForInputBlocksWithSwal(workspace);
    if (!ok) {
      console.log('User cancelled input prompts — aborting run.');
      return;
    }

    // Debug: show blocks + userInput before generation
    console.log("Blocks before generation:", workspace.getAllBlocks().map(b => ({
      id: b.id,
      type: b.type,
      PROMPT: (b.getFieldValue && b.getFieldValue('PROMPT')),
      userInput: b.userInput
    })));

    // Generate code and log it for debugging
    const generatedCode = generatePython();
    console.log("Generated code to run:\n", generatedCode);
    if (!generatedCode || generatedCode.trim() === "") {
      setOutput("No code generated.");
      setShowOutput(true);
      return;
    }

    setOutput("");
    setShowOutput(true);

    // Skulpt output handler: append text exactly as Skulpt provides it
    function outf(text) {
      setOutput((prev) => prev + text);
    }

    // Configure Skulpt without any window.prompt fallback.
    // inputfun returns an empty string immediately so Skulpt won't show any prompt.
    window.Sk.configure({
      output: outf,
      read: (x) => {
        if (
          window.Sk.builtinFiles === undefined ||
          window.Sk.builtinFiles["files"][x] === undefined
        ) {
          throw new Error("File not found: " + x);
        }
        return window.Sk.builtinFiles["files"][x];
      },
      inputfun: (_prompt = "") => {
        // Return empty string for any input() call (no browser prompts)
        return "";
      },
      inputfunTakesPrompt: true
    });

    try {
      await window.Sk.misceval.asyncToPromise(() =>
        window.Sk.importMainWithBody("<stdin>", false, generatedCode, true)
      );
      console.log("Execution finished");
    } catch (err) {
      console.error("Skulpt execution error:", err);
      setOutput((prev) => prev + "\n" + err.toString());
    }
  };

  return (
    <div className="blockly-editor-container">
      {/* Blockly Workspace */}
      <div ref={blocklyDiv} className="blocklyDiv" />

      {/* Code + Output Panel */}
      <div className="code-panel">
        {/* Action Buttons */}
        <div style={{ marginTop: "0px", display: "flex", gap: "20px" }}>
          <button onClick={generatePython}>Generate Code</button>
          <button onClick={runCode}>Run code</button>
        </div>

        {/* Alternate Display */}
        {!showOutput ? (
          <pre>
            <CodeDisplay code={code} />
          </pre>
        ) : (
          <pre>{output}</pre>
        )}
      </div>
    </div>
  );
}