import { useContext } from "react";
import { TodoContext } from "../store/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <TodoContext.Consumer>
            {todo => todo.todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </TodoContext.Consumer>
    )
};

export default TodoList;