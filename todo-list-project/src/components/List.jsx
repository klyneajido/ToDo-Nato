import TaskItem from "./TaskItem";
export default function List({ tasks, setTasks }) {
  const sortedTasks = tasks.slice().sort((a,b)=> Number(a.done - b.done));
  return (
    <div>
      {sortedTasks.map((item) => (
        <div key={item.name}>
          <TaskItem item={item} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
}
