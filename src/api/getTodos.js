import axios from "axios";

// GET 요청: 모든 Todo 항목 조회
async function getTodos() {
  const response = await axios.get("http://localhost:5501/todos"); // (1)
  console.log(response.data); // (2)
}

getTodos();
