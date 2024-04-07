import Todo from "./Todo";
function TodoList({ todos }) {
	return todos.map((elem, index) => <Todo key={index} elem={elem} />);
}

export default TodoList;
