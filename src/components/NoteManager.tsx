import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteTable from './NoteTable';

export interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteManager: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const addNote = (note: Note) => {
    setNotes([...notes, { ...note, id: notes.length + 1 }]);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setCurrentNote(null);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (note: Note) => {
    setCurrentNote(note);
  };

  return (
    <div>
      <h1>Note Manager</h1>
      <NoteForm
        currentNote={currentNote}
        addNote={addNote}
        updateNote={updateNote}
      />
      <NoteTable
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
};

export default NoteManager;
