import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedNotes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(fetchedNotes);
    });

    return () => unsubscribe();
  }, []);

  const deleteNote = async (note_id) => {
    try {
      await deleteDoc(doc(db, "notes", note_id));
      console.log("Deleted Note with ID: ", note_id);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="p-5 space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow"
        >
          {/* Note Text */}
          <p className="text-gray-800 text-sm md:text-base mb-3 md:mb-0 max-w-full break-words flex-1">
            {note.text}
          </p>

          {/* Delete Button */}
          <button
            className="flex items-center justify-center gap-2 mt-2 md:mt-0 px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition-colors"
            onClick={() => deleteNote(note.id)}
          >
            <span>Delete</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
