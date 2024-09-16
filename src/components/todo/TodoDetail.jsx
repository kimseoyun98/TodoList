import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";

const TodoDetail = ({ id }) => {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodosDetail(id),
  });

  if (isLoading) {
    return <section> Loading </section>;
  }
  if (error) {
    return <section> Error: {error.message} </section>;
  }
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
