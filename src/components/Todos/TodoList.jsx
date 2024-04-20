import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo }) {
	return (
		<div className={styles.todoListContainer}>
			{!todos.length && <h2>Todo list is empty</h2>}
			{todos.map((elem, index) => (
				<Todo key={index} todo={elem} index={index} deleteTodo={deleteTodo} />
			))}
		</div>
	);
}

export default TodoList;
