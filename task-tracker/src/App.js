import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // add task
  const addTask = (task) => {  
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header 
        title='Task Tracker App' 
        onCreate={() => 
        setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onCreate={addTask} /> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to display"}
    </div>
  );
}

export default App;
