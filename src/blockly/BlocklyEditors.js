// src/components/BlocklyEditor.js
import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import toolboxCategories from "./toolboxCategories";
import "./customBlocks";
import "./customPythonGenerators";
import CodeDisplay from "./CodeDisplay";

export default function BlocklyEditor() {
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
      scrollbars: true,
      trashcan: true,
    });

    // Live code updates
    workspaceRef.current.addChangeListener(() => {
      const liveCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      setCode(liveCode);
      setShowOutput(false);
    });

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  // // --- Safe toolbox update helper (call this when you want to change categories) ---
  // const changeCategory = (newToolboxXml) => {
  //   if (workspaceRef.current) {
  //     workspaceRef.current.updateToolbox(newToolboxXml);
  //   }
  // };

  // Generate Python code
  const generatePython = () => {
    if (workspaceRef.current) {
      const generatedCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      setCode(generatedCode);
      setShowOutput(false);
    }
  };

  // Run Python code using Skulpt
  const runCode = () => {
    if (!code) return;

    function outf(text) {
      setOutput((prev) => prev + text);
    }

    setOutput("");
    setShowOutput(true);

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
      window.Sk.misceval.asyncToPromise(() =>
        window.Sk.importMainWithBody("<stdin>", false, code, true)
      );
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Blockly Workspace */}
      <div ref={blocklyDiv} className="blocklyDiv" style={{height: "500px",width: "50%",border: "1px solid #ccc",borderRadius: "4px",}} />

      {/* Code + Output Panel */}
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <h3>{showOutput ? "Output" : "Generated Python Code"}</h3>

        {/* Action Buttons */}
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button onClick={generatePython} style={{padding: "8px 16px",background: "#dad61aff",color: "#000000ff",border: "none",borderRadius: "4px",cursor: "pointer",}}>Generate Code</button>
          <button onClick={runCode}style={{padding: "8px 16px",background: "#e40b0bff",color: "#000000ff",border: "none",borderRadius: "4px",cursor: "pointer",}}>Run Code </button>
        </div>

        {/* Alternate Display */}
        {!showOutput ? (
          <pre style={{flex: 1,background: "#000000ff",color: "#ffffffff",padding: "10px",borderRadius: "4px",overflow: "auto",}}> <CodeDisplay code={code} /> </pre>
        ) : (
          <pre style={{flex: 1,background: "#000",color: "#0f0",padding: "10px",borderRadius: "4px",overflow: "auto",}}>{output}</pre>
        )}
      </div>
    </div>
  );
}
