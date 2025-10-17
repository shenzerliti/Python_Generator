import React, { useState, useEffect, useRef } from "react";

export default function CustomPrompt({ message, onSubmit, onCancel , userInput}) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Focus the input field whenever the dialog appears
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
       inputRef.current.select && inputRef.current.select();
    }
  }, [message]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(input);
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div>{userInput}</div>
         <div style={styles.title}>Input</div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder={message || "Enter your input here"}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <div style={styles.buttons}>
          <button onClick={() => onSubmit(input)} style={styles.button}>OK</button>
          <button onClick={onCancel} style={styles.button}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, fontFamily: "monospace" },
  modal: { background: "#2a2a2a", color: "#fff", padding: "20px", borderRadius: "8px", minWidth: "350px", boxShadow: "0 4px 12px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", gap: "15px" },
  header: { fontWeight: "bold", color: "#ffcc00", fontSize: "16px" },
  input: { padding: "10px", fontSize: "16px", fontFamily: "monospace", borderRadius: "4px", border: "1px solid #555", backgroundColor: "#1e1e1e", color: "#fff" },
  buttons: { display: "flex", justifyContent: "flex-end", gap: "10px" },
  button: { padding: "8px 15px", backgroundColor: "#444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontFamily: "monospace" }
};