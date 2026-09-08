import './TodoItem.css';

export function TodoItem({ todo, onToggleTodo, onRemoveTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span>{todo.title}</span>
      </label>

      <button
        type="button"
        aria-label={`Excluir a tarefa ${todo.title}`}
        onClick={() => onRemoveTodo(todo.id)}
      >
        Excluir
      </button>
    </li>
  );
}