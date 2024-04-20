import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList({ todos }) {
	return (
		<div className={styles.todoListContainer}>
			{todos.map((elem, index) => (
				<Todo key={index} todo={elem} />
			))}
		</div>
	);
}

export default TodoList;
