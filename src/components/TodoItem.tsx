import React, { useContext, useState } from "react";
import TodoModel from "../model/todo";
import { TodoContext } from "../store/store";
import style from "./TodoItem.module.css"

interface TodoItemInterface {
    todo: TodoModel;
}

const TodoItem = ({ todo }: TodoItemInterface) => {
    const [todoContent, setTodoContent] = useState<string>(todo.content);
    const [isEditing, setIsEditing] = useState<boolean>(false);    

    const todoContext = useContext(TodoContext);
    const removeTodo = todoContext.removeTodo;
    const checkTodo = todoContext.checkTodo;
    const updateTodo = todoContext.updateTodo;

    const removeTodoHandler = () => {
        removeTodo(todo.id);
    };

    const checkTodoHandler = () => {
        checkTodo(todo.id);
    };

    const updateTodoHandler = () => {
        updateTodo(todo.id, todoContent);
        setIsEditing(false);
    };

    const onEditComplete = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            updateTodoHandler();
            setIsEditing(false);
            return;
        }
    };

    const todo_completed = todo.isComplete ? style["todo-item_completed"] : "";

  const todo_editing = isEditing ? style["todo-item_editing"] : "";

  const hide = isEditing ? style.hide : "";
  return (
    <div className={`${style.todo_item} ${todo_completed} ${todo_editing}`}>
      <div className={style.cell}>
        <button
          className={`${style.icon} ${style.checkIcon} ${hide}`}
          onClick={checkTodoHandler.bind(null, todo.id)}
        >
            {!todo_completed ? null :
          (<i className="fa fa-check"></i>)}
        </button>
      </div>
      <div className={style.cell}>
        {!isEditing && <div className={style.title}>{todoContent}</div>}
        {isEditing && (
          <input
            onKeyPress={onEditComplete}
            className={style.input}
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          ></input>
        )}
      </div>
      <div className={style.cell}>
        <button
          className={`${style.icon} ${hide}`}
          onClick={() => setIsEditing(true)}
        >
          <i className="far fa-edit"></i>
        </button>
        <button
          className={`${style.icon} ${hide}`}
          onClick={removeTodoHandler.bind(null, todo.id)}
        >
          <i className="fas fa-eraser"></i>
        </button>
        <button
          className={`${style.icon} ${!isEditing ? style.hide : ""}`}
          onClick={updateTodoHandler}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;