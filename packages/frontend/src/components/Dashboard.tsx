import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
      <h1 className="text-2xl font-bold mb-8">DevHub</h1>
      
      <div className="space-y-2">
        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">📁 Projects</button>
        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">🤖 Bot Factory</button>
        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">📦 Registry</button>
        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">⚙️ Settings</button>
      </div>
      
      <div className="mt-8 p-4 bg-gray-700 rounded">
        <p className="text-sm">AI Agents Status:</p>
        <p className="text-xs text-green-400 mt-2">✓ CodeSmith Active</p>
        <p className="text-xs text-green-400">✓ DevOps Active</p>
        <p className="text-xs text-green-400">✓ Guardian Active</p>
      </div>
    </div>
  );
};

export default Dashboard;
