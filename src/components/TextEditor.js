import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const TextEditor = () => {
  const [text, setText] = useState("");

  const saveNote = async () => {
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        text: text,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setText(""); // Clear the textarea after saving
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="p-5 flex flex-col items-center bg-white shadow-lg rounded-lg border border-gray-200 max-w-md mx-auto">
      {/* Textarea */}
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note here..."
      />

      {/* Save Button */}
      <button
        className="mt-4 w-full md:w-auto px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
        onClick={saveNote}
      >
        Save Note
      </button>
    </div>
  );
};

export default TextEditor;
