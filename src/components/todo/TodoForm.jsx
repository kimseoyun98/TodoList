import { useContext, useState } from "react";
import styled from "styled-components";
import { TaskItemActionButton } from "./TodoItem";
import { TodoContext } from "@/context/TodoContext";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodos } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }
    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };
    addTodos(newTodoObj);
    setNewTodo("");
  };

  return (
    <TaskForm onSubmit={handleSubmit}>
      <TaskInput
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="할일을 추가해주세요"
      />
      <TaskButton type="submit" color="red">
        추가하기
      </TaskButton>
    </TaskForm>
  );
};

export default TodoForm;

const TaskForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  color: #6b6b6b;
  background-color: white;
  transition: border-color 0.3s;
  &:focus {
    border-color: blue;
  }
`;
const TaskButton = styled(TaskItemActionButton)`
  background-color: blue;
`;
