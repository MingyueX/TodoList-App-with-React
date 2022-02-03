import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="main">
        <TodoForm></TodoForm>
        <TodoList></TodoList>

    </div>
  );
}

export default App;
