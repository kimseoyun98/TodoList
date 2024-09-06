import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  toggleCompleted: () => {},
  handleDelete: () => {},
  completedTodos: () => {},
  pendingTodos: () => {},
});
