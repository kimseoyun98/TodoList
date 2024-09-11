// import axios from "axios";

// // GET 요청: 모든 Todo 항목 조회
// async function getTodos() {
//   const response = await axios.get("http://localhost:3000/todos"); // (1)
//   console.log(response.data); // (2)
// }

// getTodos();

import todoClient from "./todoClient";

// GET 요청: 모든 Todo 항목 조회
async function getTodos() {
  const response = await todoClient.get("/");
  console.log(response.data);
}

getTodos();
