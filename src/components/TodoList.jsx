// src/components/TodoList.jsx 예시
import React from "react";

const todos = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
  ];
// src/components/TodoList.jsx
const TodoList = () => {
    return (
        // 시맨틱 html 태그인 ul(unordered list), li(list item)를 사용하여 리스트를 만듭니다.
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    );
  };
  export default TodoList;