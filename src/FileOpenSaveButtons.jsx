// src/FileOpenSaveButtons.jsx
import React, { useRef } from "react";
import * as Blockly from "blockly";
import "./App.css";

function FileOpenSaveButtons({ workspace }) {
  const fileInputRef = useRef();

  // --- OPEN ---
  const handleOpenClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const xmlText = e.target.result;
        const xml = Blockly.Xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (err) {
        console.error("Error loading XML:", err);
        alert("Invalid XML file. Please check the file.");
      }
    };
    reader.readAsText(file);
  };

  // --- SAVE ---
  const handleSaveClick = () => {
    if (!workspace) {
      alert("No workspace available to save.");
      return;
    }

   
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToPrettyText(xml);
    downloadFile(xmlText, "workspace.xml", "text/xml");
  };

  // --- Download helper ---
  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* OPEN */}
      <button className="nav-btn" onClick={handleOpenClick}>
        <img src={process.env.PUBLIC_URL + "/images/open.png"} alt="Open" className="icon" />
        <span className="label">OPEN</span>
      </button>

      {/* SAVE */}
      <button className="nav-btn" onClick={handleSaveClick}>
        <img src={process.env.PUBLIC_URL + "/images/save.png"}  alt="Save" className="icon" />
        <span className="label">SAVE</span>
      </button>

      {/* Hidden file input for OPEN */}
      <input
        type="file"
        accept=".xml"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileOpenSaveButtons;
