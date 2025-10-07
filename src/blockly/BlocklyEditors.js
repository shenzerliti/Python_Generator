import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // <-- Correct import for custom Python generators
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
        pythonGenerator.init(workspace);
        const liveCode = pythonGenerator.workspaceToCode(workspace);
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

  // Generate Python code
  const generatePython = () => {
    if (workspaceRef.current) {
      try {
        pythonGenerator.init(workspaceRef.current);    // 🔹 Initialize
        // Custom code generation: skip 'varinput' blocks
        let code = '';
        const blocks = workspaceRef.current.getTopBlocks(true);
        for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];
          if (block.type !== 'varinput') {
            code += pythonGenerator.blockToCode(block);
          }
        }
        setCode(pythonGenerator.finish(code));
        setShowOutput(false);
      } catch (err) {
        console.error("Python generation failed:", err);
      }
    }
  };

  // Run Python code using Skulpt
  const runCode = () => {
    if (!code) return;

    setOutput("");
    setShowOutput(true);

    function outf(text) {
      setOutput((prev) => prev + text + "\n");
    }

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
    });

    try {
      window.Sk.misceval
        .asyncToPromise(() =>
          window.Sk.importMainWithBody("<stdin>", false, code, true)
        )
        .then(() => {
          // Remove the first line from output
          setOutput((prev) => {
            const lines = prev.split('\n');
            return lines.slice(1).join('\n');
          });
          console.log("Execution finished");
        })
        .catch((err) => {
          setOutput(err.toString());
        });
    } catch (err) {
      setOutput(err.toString());
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