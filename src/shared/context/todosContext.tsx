import React, { createContext, useContext, useMemo, useState } from "react";
import { Todo } from "@customTypes/todo";
import { getTodosFromStorage, saveTodosToStorage } from "@utils/todoHelpers";

type TodosContextType = {
  todos: Todo[];
  addTodo: (text: string, date: Date) => void;
  removeTodo: (taskId: string) => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  const value = useMemo(() => ({ todos, addTodo, removeTodo }), [todos]);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export const useTodos = (): TodosContextType => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
