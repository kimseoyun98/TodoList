import { TodoContext } from "@/context/TodoContext"; // Named Import 사용
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, handleDelete } = useContext(TodoContext);

  return (
    <TaskItem>
      <TaskItemContent>
        <TaskLink
          to={`/${todo.id}`}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </TaskLink>
        {""}-<span>{todo.completed ? " 완료됨" : " 미완료"}</span>
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
  background-color: ${({ color }) => color};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
const TaskLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
