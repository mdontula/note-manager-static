import React from 'react';
import { Note } from './NoteManager';

interface NoteItemProps {
  note: Note;
  deleteNote: (id: number) => void;
  editNote: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, deleteNote, editNote }) => {
  return (
    <tr>
      <td>{note.title}</td>
      <td>{note.content}</td>
      <td>
        <button onClick={() => editNote(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default NoteItem;
