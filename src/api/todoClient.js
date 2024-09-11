import axios from "axios";

// Axios 클라이언트 설정
const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos", // (1) 기본 URL 설정
});

export default todoClient;
