import { Link } from "react-router-dom";
import TodoDetail from "../components/todo/TodoDetail";
import styled from "styled-components";

const TodoDetialPage = () => {
  return (
    <div>
      <TodoDetail />

      <Link to="/">
        <ToListButton>목록으로</ToListButton>
      </Link>
    </div>
  );
};
export default TodoDetialPage;
const ToListButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
