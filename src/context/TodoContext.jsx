import { createContext } from "react";

// named export로 변경
export const TodoContext = createContext({
  todos: [],
  toggleCompleted: () => {},
  handleDelete: () => {},
});
