import React, { useContext, useState } from "react";
import TodoModel from "../model/todo";
import { TodoContext } from "../store/store";
import style from "./TodoItem.module.css";
import classNames from "classnames";

const TodoItem = ({ todo }: { todo: TodoModel}) => {
    const [todoContent, setTodoContent] = useState<string>(todo.content);
    const [isEditing, setIsEditing] = useState<boolean>(false);    

    const todoContext = useContext(TodoContext);
    const { removeTodo, checkTodo, updateTodo } = todoContext;

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

    const todoCompleted = todo.isComplete ? style["todo-item_completed"] : "";

  const todoEditing = isEditing ? style["todo-item_editing"] : "";

  const hide = isEditing ? style.hide : "";
  return (
    <div className={classNames(style.todoItem, todoCompleted, todoEditing)}>
      <div className={style.cell}>
        <button
          className={classNames(style.icon, style.checkIcon, hide)}
          onClick={checkTodoHandler.bind(null, todo.id)}
        >
            {!todoCompleted ? null :
          (<i className="fa fa-check"></i>)}
        </button>
      </div>
      <div className={style.cell}>
        {!isEditing && (
          <div className={style.title}>{todoContent}</div>
        )}
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
          onClick={removeTodoHandler}
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