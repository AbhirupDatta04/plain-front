import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
