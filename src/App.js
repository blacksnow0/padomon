// src/App.js
import React from "react";
import TextEditor from "./components/TextEditor";
import DrawingCanvas from "./components/DrawingCanvas";
import Toolbar from "./components/Toolbar";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <Toolbar />
      <div className="flex flex-wrap justify-between w-11/12 mt-5">
        <TextEditor />
        <DrawingCanvas />
      </div>
      <NoteList />
    </div>
  );
};

export default App;
