import { SAMPLE_TODOS } from "../components/constants/sample-todos";
import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoText) => {
    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodoObj]);
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // 5. 상태를 새로운 배열로 업데이트합니다.
    // setTodos(updatedTodos);
  };

  // 1. Todo 항목을 삭제하는 함수 정의
  const handleDelete = (id) => {
    // 2. 선택된 항목을 제외한 새로운 배열 생성
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodos, toggleCompleted, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
