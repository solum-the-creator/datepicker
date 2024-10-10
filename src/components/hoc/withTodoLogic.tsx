import { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  date: Date;
};

type TodoStorage = {
  id: string;
  text: string;
  date: string;
};

type WithTodoLogicProps = {
  value?: Date;
  onSelect?: (value?: Date) => void;
};

export function withTodoLogic<P extends WithTodoLogicProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithTodoLogicProps> & WithTodoLogicProps) => {
    const { value, onSelect, ...rest } = props;

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsedTodos: TodoStorage[] = JSON.parse(storedTodos) as TodoStorage[];

        const parsedTodosWithDate = parsedTodos.map((todo) => ({
          ...todo,
          date: new Date(todo.date),
        }));
        setTodos(parsedTodosWithDate);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleTodoAdd = (text: string, date: Date) => {
      const newTodo: Todo = {
        id: String(new Date().getTime()),
        text,
        date,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    };

    const handleTodoRemove = (taskId: string) => {
      setTodos(todos.filter((todo) => todo.id !== taskId));
    };

    return (
      <>
        <WrappedComponent {...(rest as unknown as P)} value={value} onSelect={onSelect} />

        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a task"
          />
          <button type="button" onClick={() => handleTodoAdd(inputValue, value!)}>
            Add Task
          </button>

          <ul>
            {todos
              .filter((todo) => todo.date.toDateString() === value?.toDateString())
              .map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                  <button type="button" onClick={() => handleTodoRemove(todo.id)}>
                    Remove
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  };
}
