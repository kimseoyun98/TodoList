import { useState } from "react";
import { TodoContext } from "./TodoContext"; // Named Import로 변경
import { SAMPLE_TODOS } from "@/components/constants/sample-todos";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completedTodos = todos.filter((todo) => todo.completed);

  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        toggleCompleted,
        handleDelete,
        completedTodos,
        pendingTodos,
      }} // todos 포함
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
