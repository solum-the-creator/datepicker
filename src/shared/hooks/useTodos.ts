import { useState } from "react";
import { Todo } from "@customTypes/todo";
import { getTodosFromStorage, saveTodosToStorage } from "@utils/todoHelpers";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(getTodosFromStorage());

  const addTodo = (text: string, date: Date) => {
    const newTodo: Todo = {
      id: String(new Date().getTime()),
      text,
      date,
    };
    setTodos((prev) => {
      const updatedTodos = [...prev, newTodo];
      saveTodosToStorage(updatedTodos);
      return updatedTodos;
    });
  };

  const removeTodo = (taskId: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.filter((todo) => todo.id !== taskId);
      saveTodosToStorage(updatedTodos);
      return updatedTodos;
    });
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
};
