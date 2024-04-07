import { useState } from "react";
import "./App.css";
import TodoList from "./components/Todos/Todo";
import TodoForm from "./components/Todos/TodoForm";

function App() {
	const [todos, setTodos] = useState([]);
	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
