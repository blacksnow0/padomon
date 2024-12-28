// src/components/NoteList.js
import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesRef = ref(database, "notes/");
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      const notesArray = data
        ? Object.entries(data).map(([id, note]) => ({ id, ...note }))
        : [];
      setNotes(notesArray);
    });
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-5 w-11/12 mt-5">
      <h3 className="text-lg font-bold mb-3">Saved Notes</h3>
      <ul className="list-disc pl-5">
        {notes.map((note) => (
          <li key={note.id} className="text-gray-800">
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
