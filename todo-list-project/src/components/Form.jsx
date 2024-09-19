import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ name: "", done: false });
  }
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputContainer}
          onChange={(e) => setTask({ name: e.target.value, done: false })}
          type="text"
          value={task.name}
        />
        <button className={styles.addBtn} type="submit">
          +
        </button>
      </form>
    </div>
    </div>
  );
}
