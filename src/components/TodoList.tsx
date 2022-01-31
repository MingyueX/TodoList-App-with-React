import { useContext} from "react";
import { TodoContext } from "../store/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoContext = useContext(TodoContext);

    const todoList = todoContext.todoList;
    return (
        <div className="todoList">
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </div>
    )
};

export default TodoList;