import { useState } from 'react';
import './TodoForm.css';

export function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      return;
    }

    onAddTodo(normalizedTitle);
    setTitle('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-title">
        Nova tarefa
      </label>
      <input
        id="todo-title"
        type="text"
        placeholder="Digite uma tarefa"
        autoComplete="off"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
