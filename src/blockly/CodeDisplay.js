import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = React.memo(({ code }) => (
  <SyntaxHighlighter language="python" style={vscDarkPlus}>
    {code}
  </SyntaxHighlighter>
));

export default CodeDisplay;