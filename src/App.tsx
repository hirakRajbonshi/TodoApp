import { useState, useEffect } from "react";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

interface Todo {
  id: string;
  title: string;
  description: string;
  time: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos) || []);
      } catch (error) {
        console.error("Error parsing stored todos:", error);
        setTodos([]);
      }
    }
  }, []);

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (title: string, description: string, time: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      time,
    };
    setTodos((prevTodos = []) => [...prevTodos, newTodo]);
  };
  return (
    <section data-theme="dark" className="h-[100vh] w-full flex">
      <div className="w-[40%] h-full flex items-center justify-center">
        <AddTodo addTodo={addTodo} />
      </div>
      <div className="w-[60%] overflow-scroll">
        <Todos todos={todos} onComplete={removeTodo} />
      </div>
    </section>
  );
}
