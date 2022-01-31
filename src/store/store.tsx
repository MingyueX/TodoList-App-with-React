import React, { useState, createContext } from "react";
import TodoModel from "../model/todo";

interface TodoContextInterface {
    todoList: TodoModel[];
    createTodo: (todo: TodoModel) => void;
    removeTodo: (id: string) => void;
    checkTodo: (id: string) => void;
    updateTodo: (id: string, input: string) => void;
}

export const TodoContext = createContext<TodoContextInterface>({
    todoList: [],
    createTodo: (todo: TodoModel) => {},
    removeTodo: (id: string) => {},
    checkTodo: (id: string) => {},
    updateTodo: (id: string, input: string) => {},
});

const TodoContextProvider: React.FunctionComponent = (props) => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    const createTodoHandler = (todo: TodoModel) => {
        const newTodo: TodoModel = {
            ...todo,
            timeCreated: new Date().toISOString(),
          };
          setTodos((old) => {
              return old.concat(newTodo);
          });
    };

    const removeTodoHandler = (id: string) => {
        setTodos((old) => {
            return old.filter((todo) => todo.id !== id);
        });
    };

    const checkTodoHandler = (id: string) => {
        const checkedIndex = todos.findIndex((todo) => todo.id === id);
        const checkedTodo = todos[checkedIndex];
        const newTodo = { ...checkedTodo, isComplete: !checkedTodo.isComplete};
        let newTodos = [...todos];
        newTodos[checkedIndex] = newTodo;
        setTodos(newTodos);
    };

    const updateTodoHandler = (id: string, input: string) => {
        const updateIndex = todos.findIndex((todo) => todo.id === id);
        const updateTodo = todos[updateIndex];
        const newTodo = { ...updateTodo, content: input};
        let newTodos = [...todos];
        newTodos[updateIndex] = newTodo;
        setTodos(newTodos);
    };

    const todoCtx: TodoContextInterface = {
        todoList: todos,
        createTodo: createTodoHandler,
        removeTodo: removeTodoHandler,
        checkTodo: checkTodoHandler,
        updateTodo: updateTodoHandler,
    };

    return (
        <TodoContext.Provider value={todoCtx}>
            {props.children}
        </TodoContext.Provider>
    )
};

export default TodoContextProvider;