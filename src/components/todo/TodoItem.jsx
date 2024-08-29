import { TodoContext } from "@/context/TodoContext";
import React, { useContext } from "react";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  if (!todo) {
    return null; // 혹은 적절한 에러 메시지를 출력하거나, 빈 엘리먼트를 반환
  }

  const { toggleCompleted, handleDelete } = useContext(TodoContext);

  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}-{" "}
          {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
        </p>
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => toggleCompleted(todo.id)}
          color="blue"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton onClick={() => handleDelete(todo.id)} color="red">
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;
const TaskItemContent = styled.div``;
const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
`;
export const TaskItemActionButton = styled.button`
  color: white;
  background-color: ${({ $color }) => $color};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
