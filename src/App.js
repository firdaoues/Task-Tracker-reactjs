import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "monday",
      reminder: "true",
    },
    {
      id: 2,
      text: "school",
      day: "tuesday",
      reminder: "false",
    },
    {
      id: 3,
      text: "shopping",
      day: "saturday",
      reminder: "false",
    },
  ]);

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        " No Tasks to show"
      )}
    </div>
  );
}

export default App;
