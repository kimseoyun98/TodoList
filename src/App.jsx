import RootLayout from "./components/layout/RootLayout";
import TodoContainer from "./components/todo/TodoContainer";
import TodoProvider from "./context/TodoProvider";
import "./reset.css";

const App = () => {
  return (
    <RootLayout>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </RootLayout>
  );
};

export default App;
