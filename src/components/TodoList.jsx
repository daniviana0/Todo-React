import { TodoItem } from './TodoItem';
import './TodoList.css';

export function TodoList({ todos, onToggleTodo, onRemoveTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}