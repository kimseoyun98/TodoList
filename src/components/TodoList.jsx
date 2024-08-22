// // src/components/TodoList.jsx 예시
// import React from "react";

// const todos = [
//   { id: 1, text: "Buy milk" },
//   { id: 2, text: "Clean the house" },
//   { id: 3, text: "Go for a run" },
//   { id: 4, text: "Finish homework" },
//   { id: 5, text: "Call mom" },
//   { id: 6, text: "Buy groceries" },
//   { id: 7, text: "Walk the dog" },
//   { id: 8, text: "Read a book" },
//   { id: 9, text: "Do laundry" },
//   { id: 10, text: "Write code" },
// ];
// const TodoList = () => {
//   return (
//     // 시맨틱 html 태그인 ul(unordered list), li(list item)를 사용하여 리스트를 만듭니다.
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// };
// export default TodoList;

// import { useState } from "react";

// const SAMPLE_TODOS = [
//   { id: 1, text: "Buy milk", completed: false },
//   { id: 2, text: "Clean the house", completed: false },
//   { id: 3, text: "Go for a run", completed: false },
//   { id: 4, text: "Finish homework", completed: false },
//   { id: 5, text: "Call mom", completed: false },
//   { id: 6, text: "Buy groceries", completed: false },
//   { id: 7, text: "Walk the dog", completed: false },
//   { id: 8, text: "Read a book", completed: false },
//   { id: 9, text: "Do laundry", completed: false },
//   { id: 10, text: "Write code", completed: false },
// ];

// const TodoList = () => {
//   const [todos, setTodos] = useState(SAMPLE_TODOS);
//   const [newTodo, setNewTodo] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // <2>

//     if (!newTodo.trim()) {
//       return; // <3>
//     }
//     setTodos([
//       ...todos,
//       { id: crypto.randomUUID(), text: newTodo, completed: false },
//     ]); // <4>
//     setNewTodo(""); // <5>
//   };

//   const handleUpdate = (id) => {
//     // 1. todos 배열의 각 항목을 순회하고, 수정된 항목을 반환하여 새로운 배열을 만듭니다.
//     const updatedTodos = todos.map((todo) => {
//       // 2. 현재 항목의 id가 수정하려는 id와 일치하는지 확인합니다.
//       if (todo.id === id) {
//         // 3. id가 일치하면 completed 상태를 반전시킨 새로운 항목을 반환합니다.
//         return {
//           ...todo,
//           completed: !todo.completed, // completed 상태를 반전시킴
//         };
//       } else {
//         // 4. id가 일치하지 않으면 기존 항목을 그대로 반환합니다.
//         return todo;
//       }
//     });
//     // 5. 상태를 새로운 배열로 업데이트합니다.
//     setTodos(updatedTodos);
//   };
//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={handleInputChange}
//           placeholder="Enter a new todo"
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleUpdate(todo.id)}
//             />
//             {todo.text}, {todo.completed ? "completed" : "not completed"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // <2>

    if (!newTodo.trim()) {
      return; // <3>
    }
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ]); // <4>
    setNewTodo(""); // <5>
  };

  const handleUpdate = (id) => {
    // 1. todos 배열의 각 항목을 순회하고, 수정된 항목을 반환하여 새로운 배열을 만듭니다.
    const updatedTodos = todos.map((todo) => {
      // 2. 현재 항목의 id가 수정하려는 id와 일치하는지 확인합니다.
      if (todo.id === id) {
        // 3. id가 일치하면 completed 상태를 반전시킨 새로운 항목을 반환합니다.
        return {
          ...todo,
          completed: !todo.completed, // completed 상태를 반전시킴
        };
      } else {
        // 4. id가 일치하지 않으면 기존 항목을 그대로 반환합니다.
        return todo;
      }
    });
    // 5. 상태를 새로운 배열로 업데이트합니다.
    setTodos(updatedTodos);
  };
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  // 1. Todo 항목을 삭제하는 함수 정의
  const handleDelete = (id) => {
    // 2. 선택된 항목을 제외한 새로운 배열 생성
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // 상태 업데이트
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleUpdate(todo.id)}
            />
            {todo.text}
            {todo.completed ? <p>완료됨</p> : <p>진행중</p>}
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
