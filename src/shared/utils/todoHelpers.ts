import { Todo, TodoStorage } from "@customTypes/todo";

export const getTodosFromStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    const parsedTodos: TodoStorage[] = JSON.parse(storedTodos) as TodoStorage[];
    return parsedTodos.map((todo) => ({
      ...todo,
      date: new Date(todo.date),
    }));
  }

  return [];
};

export const saveTodosToStorage = (todos: Todo[]) => {
  const todosToStore: TodoStorage[] = todos.map((todo) => ({
    ...todo,
    date: todo.date.toISOString(),
  }));
  localStorage.setItem("todos", JSON.stringify(todosToStore));
};
