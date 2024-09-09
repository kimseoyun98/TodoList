import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  toggleCompleted: () => {},
  handleDelete: () => {},
  completedTodos: () => {},
  pendingTodos: () => {},
});
