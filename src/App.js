import React, { useState } from "react";
import BlocklyEditor from "./blockly/BlocklyEditors";
import "./App.css";
import FileOpenSaveButtons from "./FileOpenSaveButtons";

function App() {
const [workspace, setWorkspace] = useState(null);

  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </div>

        <div className="navbar-right">
         <FileOpenSaveButtons workspace={workspace}/>
          
        </div>
      </div>

      {/* Blockly Editor */}
      <div className="editor-container">
        <BlocklyEditor onWorkspaceReady={setWorkspace} />
      </div>
    </div>
  );
}

export default App;
