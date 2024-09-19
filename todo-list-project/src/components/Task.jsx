import Footer from "./Footer.jsx";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
export default function Task() {
  const [tasks, setTasks] = useState([]);
  
  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length;
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
      <Footer completedTasks={completedTasks} totalTasks={totalTasks} />
    </div>
  );
}
