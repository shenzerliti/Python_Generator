// src/components/BlocklyEditor.js
import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
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
    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxCategories,
  collapse: true,           // allow blocks to collapse
  comments: true,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: 'start',
  scrollbars: true,
  sounds: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  }
    });

      // 👇 Send workspace up to App.js
    if (onWorkspaceReady) {
      onWorkspaceReady(workspaceRef.current);
    }

    // Live code updates
    workspaceRef.current.addChangeListener(() => {
      try{
      pythonGenerator.init(workspaceRef.current);   // 🔹 Initialize
      const liveCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      pythonGenerator.finish();  
      setCode(liveCode);
      setShowOutput(false);
      } catch (err) {
        console.error("Blockly code generation error:", err);
      }
    });

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, [ onWorkspaceReady ]);

  // // --- Safe toolbox update helper (call this when you want to change categories) ---
  // const changeCategory = (newToolboxXml) => {
  //   if (workspaceRef.current) {
  //     workspaceRef.current.updateToolbox(newToolboxXml);
  //   }
  // };

  // Generate Python code
  const generatePython = () => {
    if (workspaceRef.current) {
      try{
      pythonGenerator.init(workspaceRef.current);    // 🔹 Initialize
      const generatedCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      pythonGenerator.finish(); 
      setCode(generatedCode);
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
      <div ref={blocklyDiv} className="blocklyDiv"/>

      {/* Code + Output Panel */}
      <div className="code-panel">

        {/* Action Buttons */}
        <div style={{ marginTop: "0px", display: "flex", gap: "20px" }}>
          <button onClick={generatePython} >Generate Code</button>
          <button onClick={runCode}>Run code </button>
        </div>

        {/* Alternate Display */}
        {!showOutput ? (
          <pre > <CodeDisplay code={code} /> </pre>
        ) : (
          <pre >{output}</pre>
        )}
      </div>
    </div>
  );
}
