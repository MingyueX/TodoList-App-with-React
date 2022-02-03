import { useContext, useEffect} from "react";
import { TodoContext } from "../store/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoContext = useContext(TodoContext);
    const getTodo = todoContext.getTodo;

    useEffect(() => {
        getTodo();
    }, []);
    
    return (
        <TodoContext.Consumer>
            {todo => todo.todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </TodoContext.Consumer>
    )
};

export default TodoList;