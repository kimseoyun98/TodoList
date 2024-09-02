import Router from "./Router";
import TodoProvider from "./context/TodoProvider";
import "./reset.css";

const App = () => {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
};

export default App;
