import { useEffect, useState } from 'react';

const STORAGE_KEY = 'todos-react';

function loadTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (!savedTodos) {
    return [];
  }

  try {
    return JSON.parse(savedTodos);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;

  function addTodo(title) {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: normalizedTitle,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  }

  function removeTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id),
    );
  }

  return {
    todos,
    total,
    pending,
    completed,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}