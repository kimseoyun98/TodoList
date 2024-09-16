import { getTodos } from "@/api/todoClient";
import { useQuery } from "@tanstack/react-query";
import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const { data: allTodos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const { data: completedTodos } = useQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos("completed"),
  });

  const { data: pendingTodos } = useQuery({
    queryKey: ["todos", "pending"],
    queryFn: () => getTodos("pending"),
  });

  return (
    <DashboardSection>
      <DashboardCardList>
        <DashboardCard $flex="2" color="#e33535" to={"/"} $highlight={!filter}>
          <div>
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {allTodos?.length} <br /> All Task
          </p>
        </DashboardCard>
        <DashboardCard
          $flex="1"
          color="#8c35e3"
          to={"?filter=completed"}
          $highlight={filter === "completed"}
        >
          <div>
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            {completedTodos?.length} <br /> Completed
          </p>
        </DashboardCard>
        <DashboardCard
          $flex="1"
          color="#202020"
          to={"?filter=pending"}
          $highlight={filter === "pending"}
        >
          <div>
            <Video />
            <Ellipsis />
          </div>
          <p>
            {pendingTodos?.length} <br /> Pending
          </p>
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;
const DashboardCard = styled(Link)`
  background-color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((728px / 4));
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${({ $flex }) => $flex};
  text-decoration: ${({ $highlight }) => ($highlight ? "underline" : "none")};
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
