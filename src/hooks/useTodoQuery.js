import { getTodos } from "@/api/todoClient";
import { useQuery } from "@tanstack/react-query";
import { useGetFilter } from "./useGetFilter";

export const useTodoFilterQuery = () => {
  const { filter } = useGetFilter();
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};
export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};
export const useTodoDetailQuery = (id) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodos(id),
  });
};
