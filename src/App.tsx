import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <main className="App">
      <div className="mainPage">
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>

    </main>
  );
}

export default App;
