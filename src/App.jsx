import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const {
    todos,
    total,
    pending,
    completed,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useTodos();

  return (
    <main className="page">
      <section className="todo-card">
        <header>
          <p className="eyebrow">React</p>
          <h1>Lista de Tarefas</h1>
          <p>Organize suas atividades e mantenha os dados salvos no navegador.</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <div className="stats" aria-label="Resumo das tarefas">
          <span>Total: <strong>{total}</strong></span>
          <span>Pendentes: <strong>{pending}</strong></span>
          <span>Concluídas: <strong>{completed}</strong></span>
        </div>

        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      </section>
    </main>
  );
}

export default App;