// src/components/TextEditor.js
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../firebase/firebase";

const TextEditor = () => {
  const [text, setText] = useState("");

  const saveText = () => {
    const textRef = ref(database, `notes/${Date.now()}`);
    set(textRef, { text });
    setText("");
  };

  return (
    <div className="flex flex-col items-start bg-white shadow-md rounded-md p-5 w-1/2">
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={saveText}
      >
        Save Note
      </button>
    </div>
  );
};

export default TextEditor;
