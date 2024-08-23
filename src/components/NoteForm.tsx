import React, { useState, useEffect } from 'react';
import { Note } from './NoteManager';

interface NoteFormProps {
  currentNote: Note | null;
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ currentNote, addNote, updateNote }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentNote) {
      updateNote({ ...currentNote, title, content });
    } else {
      addNote({ id: 0 + Math.floor(Math.random() * 100) + 1, title, content });
    }

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">{currentNote ? 'Update' : 'Add'} Note</button>
    </form>
  );
};

export default NoteForm;
