// src/components/BlocklyEditor.js
import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import toolboxCategories from "./toolboxCategories";
import "./customBlocks";
import "./customPythonGenerators";
import "./styles.css";

export default function BlocklyEditor() {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    // Inject Blockly
    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxCategories,
      scrollbars: true,
      trashcan: true,
    });

    // Update code live when blocks change
    workspaceRef.current.addChangeListener(() => {
      const liveCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      setCode(liveCode);
      setShowOutput(false); // keep showing code when editing
    });

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  // Generate Python code (manual button)
  const generatePython = () => {
    if (workspaceRef.current) {
      const generatedCode = pythonGenerator.workspaceToCode(workspaceRef.current);
      setCode(generatedCode);
      setShowOutput(false); // switch to code view
    }
  };

  // Run Python code using Skulpt
  const runCode = () => {
    if (!code) return;

    function outf(text) {
      setOutput((prev) => prev + text);
    }

    setOutput(""); // clear output before run
    setShowOutput(true); // switch to output view

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
      <div
        ref={blocklyDiv} className="blocklyDiv"
        style={{
          height: "500px",
          width: "50%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Code + Output Panel */}
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <h3>{showOutput ? "Output" : "Generated Python Code"}</h3>

        {/* Action Buttons */}
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button
            onClick={generatePython}
            style={{
              padding: "8px 16px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Generate Code
          </button>
          <button
            onClick={runCode}
            style={{
              padding: "8px 16px",
              background: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Run Code
          </button>
        </div>

        {/* Alternate Display */}
        {!showOutput ? (
          <pre
            style={{
              flex: 1,
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {code}
          </pre>
        ) : (
          <pre
            style={{
              flex: 1,
              background: "#000",
              color: "#0f0",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {output}
          </pre>
        )}
      </div>
    </div>
  );
}
