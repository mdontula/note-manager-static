import React from 'react';
import { Note } from './NoteManager';
import NoteItem from './NoteItem';

interface NoteTableProps {
  notes: Note[];
  deleteNote: (id: number) => void;
  editNote: (note: Note) => void;
}

const NoteTable: React.FC<NoteTableProps> = ({ notes, deleteNote, editNote }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))}
      </tbody>
    </table>
  );
};

export default NoteTable;
