import axios from "axios";

// Axios 클라이언트 설정
export const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});
export const getTodos = async (filter) => {
  const searchParams = new URLSearchParams();

  if (filter === "completed") {
    searchParams.append("completed", true);
  }
  if (filter === "pending") {
    searchParams.append("completed", false);
  }
  const { data } = await todoClient.get(`${searchParams.toString()}`);

  return data;
};

export const getTodosDetail = async (id) => {
  const { data } = await todoClient.get(`/${id}`);

  return data;
};

export const postTodo = async (newTodoObj) => {
  const { data } = await todoClient.post("/", newTodoObj);

  return data;
};

export const toggleTodo = async (id, completed) => {
  const { data } = await todoClient.patch(`/${id}`, { completed });

  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await todoClient.delete(`/${id}`);

  return data;
};
