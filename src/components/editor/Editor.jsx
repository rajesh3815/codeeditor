import React, { useEffect, useState } from "react";
import Style from "./Editor.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import Prism from "prismjs";
const codeSnippet = `import Happiness from 'Life';

const Life = ({ habits }) => {
  return (
    <ul>
      {habits?.map(habit => (
        <li key={habit.id}>{habits.name}</li>
      ))}
    </ul>
  );
};

export default Life;
// Output: .Money😂
`;

const Editory = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const [code, setCode] = useState(codeSnippet);

  const handelChange = (code) => {
    setCode(code);
  };

  return (
    <div className={Style.Container}>
     <p className={Style.header}>A simple code Editor with syntax highlighting</p>
      <div className={Style.editorContainer}>
        <Editor
          value={code}
          onValueChange={(code) => handelChange(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: "monospace",
            fontSize: 14,
          }}
        />
      </div>
      <p>made by Rajesh❣️ <a href="https://github.com/rajesh3815/codeeditor.git" target="_blank" rel="noopener noreferrer">github</a></p>
    </div>
  );
};

export default Editory;
