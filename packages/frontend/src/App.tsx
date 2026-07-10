import React from 'react';
import Editor from './components/Editor';
import Dashboard from './components/Dashboard';
import { useAuthStore } from './stores/auth';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="h-screen bg-gray-900 text-white">
      {!isAuthenticated ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">DevHub Factory</h1>
            <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700">
              Login with GitHub
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full">
          <Dashboard />
          <Editor />
        </div>
      )}
    </div>
  );
}

export default App;
