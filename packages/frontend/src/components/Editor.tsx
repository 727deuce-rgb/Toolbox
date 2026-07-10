import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = React.useState('// Start coding here...\n');

  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Code Editor</h2>
      </div>
      <Editor
        height="100%"
        defaultLanguage="typescript"
        defaultValue={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;
