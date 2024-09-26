import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "@/hooks/useTodoMutation";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const { mutateAsyc: handleDelete, isPending } = useDeleteTodoMutation();
  const { mutate: handleToggle } = useToggleTodoMutation();

  return (
    <TaskItem key={todo.id}>
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
          onClick={() =>
            handleToggle({ id: todo.id, completed: !todo.completed })
          }
          color="blue"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={async () => {
            await handleDelete(todo.id);
            navigate("/");
          }}
          color="red"
        >
          {isPending ? "삭제중" : "삭제"}
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
