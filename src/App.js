import React from "react";
import Toolbar from "./components/Toolbar";
import TextEditor from "./components/TextEditor";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 via-white to-gray-50 min-h-screen">
      {/* Toolbar */}
      <Toolbar className="w-full bg-blue-600 text-white py-4 shadow-md" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row  gap-6 justify-center items-start  mt-6">
        {/* Notes Section */}
        <div className="flex-1 bg-white shadow-xl rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Notes
          </h2>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Write Your Notes
            </h3>
            <TextEditor />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Your Notes
            </h3>
            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
