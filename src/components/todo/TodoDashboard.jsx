import { TodoContext } from "@/context/TodoContext";
import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import React, { useContext } from "react";
import styled from "styled-components";

const TodoDashboard = () => {
  const { todos } = useContext(TodoContext);
  const all = todos.length;
  const completed = 7;
  const pending = 3;

  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>

      <DashboardCardList>
        <DashboardCard $flex="2" color="red">
          <div>
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {all} <br /> All Task
          </p>
        </DashboardCard>
        <DashboardCard $flex="1" color="blue">
          <div>
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            {completed} <br /> Completed
          </p>
        </DashboardCard>
        <DashboardCard $flex="1" color="orange">
          <div>
            <Video />
            <Ellipsis />
          </div>
          <p>
            {pending} <br /> Pending
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
const DashboardHeader = styled.header``;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;
const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((728px / 4));
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props.$flex};

  /* &:first-child {
    flex-basis: 60%; */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
