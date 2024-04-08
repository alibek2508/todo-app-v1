import Todo from "./Todo";
function TodoList({ todos }) {
	return todos.map((elem, index) => <Todo key={index} todo={elem} />);
}

export default TodoList;
