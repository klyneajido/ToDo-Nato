import styles from "./header.module.css";
import Todo from "../assets/svg/Todo.svg";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Todo} alt="" />
        <p className={styles.name}>
        Hey Shelmy! Let’s crush that to-do list!
        </p>
      </div>
    </div>
  );
}
