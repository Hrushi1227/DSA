import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import "./App.css";

function App() {
  const [code, setCode] = useState("// Write your JavaScript code here");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const capturedConsole = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        capturedConsole.push(args.join(" "));
      };

      // Run the code
      eval(code);

      console.log = originalConsoleLog;
      setOutput(capturedConsole.join("\n"));
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="App">
      <h1>Online JavaScript Compiler</h1>
      <div className="container">
        <div className="editor">
          <CodeMirror
            value={code}
            height="700px"
            theme={oneDark}
            extensions={[javascript()]}
            onChange={(value) => setCode(value)}
          />
          <button onClick={runCode}>Run Code</button>
        </div>
        <div className="output">
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
