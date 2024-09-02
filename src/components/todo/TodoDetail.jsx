import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoDetail = () => {
  const { todos } = useContext(TodoContext);
  const { id } = useParams();

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return <section> 404 NOT FOUND TODO! </section>;
  }
  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
