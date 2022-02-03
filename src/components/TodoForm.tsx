import React, { useRef, useContext } from "react";
import TodoModel from "../model/todo";
import { TodoContext } from "../store/store";
import style from "./TodoForm.module.css"

const TodoForm = () => {
  const input = useRef<HTMLInputElement>(null);

  const todoContext = useContext(TodoContext);
  const { createTodo } = todoContext;

  const inputChangeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo: TodoModel = {
      content: input.current!.value,
      id: new Date().getTime().toString(),
      isComplete: false,
    };
    createTodo(newTodo);
    input.current!.value = "";
  };
  return (
    <div className={style.container}>
      <form
        onSubmit={inputChangeHandler}
        style={{ margin: '40px 0 10px 0' }}>
        <input
          className={style.form_input}
          id="todoText"
          type="text"
          maxLength={64}
          placeholder="What needs to be done?"
          ref={input}
        ></input>
      </form>
    </div>
  );
};

export default TodoForm;