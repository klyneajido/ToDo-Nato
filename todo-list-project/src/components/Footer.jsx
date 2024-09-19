import styles from './footer.module.css'
export default function Footer({completedTasks, totalTasks}){
    return <div className={styles.container}>
        <span className={styles.footer}>Completed Tasks: {completedTasks}</span>
        <span className={styles.footer}>Total Task: {totalTasks}</span>
    </div>
}