import styles from "./taskItem.module.css";

export default function TaskItem({ item, tasks, setTasks }) {
  function handleDelete(item) {
    console.log("delete clicked for task: " + item.name + item.done);
    setTasks(tasks.filter((task) => task !== item));
  }

  function handleClick() {
    // Correcting the reference to item properties
    setTasks(tasks.map((task) =>
      task.name === item.name ? { ...task, done: !task.done } : task
    ));
  }
  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.container}>
          <div className={styles.taskContainer}>
      <p className={className} onClick={handleClick}>
        {item.name}
      </p>
      <button onClick={() => handleDelete(item)} className={styles.deleteBtn}>
        -
      </button>
    </div>
    </div>
  );
}
