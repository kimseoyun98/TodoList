import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext"; // Named Import로 변경
import axios from "axios";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get("http://localhost:5501/todos");
        setTodos(response.data); // 서버에서 가져온 데이터로 todos 상태 설정
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(newTodoObj) {
    const response = await axios.post(
      "http://localhost:5501/todos",
      newTodoObj
    );
    setTodos((prevTodos) => [...prevTodos, response.data]);
  }

  async function toggleCompleted(id, completed) {
    try {
      const response = await axios.patch(`http://localhost:5501/todos/${id}`, {
        completed,
      });
      console.log("Todo Completed Status Updated:", response.data);

      // 서버에서 받은 데이터를 이용해 상태 업데이트
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? { ...todo, completed: response.data.completed }
            : todo
        )
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:5501/todos/${id}`); // (1)
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // todos 상태에서 삭제된 항목 제거
    console.log(`Todo with id ${id} deleted`); // (2)
  }

  const completedTodos = todos.filter((todo) => todo.completed);

  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleCompleted,
        handleDelete,
        completedTodos,
        pendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
