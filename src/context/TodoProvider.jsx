import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext"; // Named Import로 변경
import axios from "axios";
import todoClient from "@/api/todoClient";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data); // 서버에서 가져온 데이터로 todos 상태 설정
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(newTodoObj) {
    const response = await todoClient.post("/", newTodoObj);
    console.log("New Todo Added:", response.data);
    setTodos((prevTodos) => [...prevTodos, response.data]);
  }

  async function toggleCompleted(id, completed) {
    const response = await todoClient.patch(`/${id}`, {
      completed,
    });
    console.log("Todo Completed Status Updated:", response.data);

    // 서버에서 받은 데이터를 이용해 상태 업데이트
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: response.data.completed } : todo
      )
    );
  }

  async function handleDelete(id) {
    await todoClient.delete(`/${id}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
