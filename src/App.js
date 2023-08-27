import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import { Home } from './pages/home';
import { Add } from './pages/add';
import { Edit } from './pages/edit';

function App() {

const[listTasks, setListTasks] = useState([]);
const[newTask, setNewTask] = useState("");
const[editedTask,setEditedTask] = useState(null);

const addTask = () => {
  const task = {
    id: listTasks.length === 0 ? 1 : listTasks[listTasks.length-1].id + 1 ,
    taskName: newTask
  }
  setListTasks([...listTasks,task]);
}

const handleChange = (event) => {
  setNewTask(event.target.value);
}

const editTask = (editedTask) => {
  const updatedTask = listTasks.map((task) =>
   (task.id === editedTask.id) ? {...task, taskName: editedTask.taskName} : task
  );
  setEditedTask(updatedTask);
  setEditedTask(null);
}


const updateTaskName = (taskId, newTaskName) => {
  const updatedTasks = listTasks.map((task) =>
    task.id === taskId ? { ...task, taskName: newTaskName } : task
  );
  setListTasks(updatedTasks);
};


const deleteTask = (taskId) => {
  const updateTask = listTasks.filter((task) => taskId !== task.id); 
  setListTasks(updateTask);
}
    return (
      <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} addTask={addTask} listTasks={listTasks} deleteTask={deleteTask} updateTaskName={updateTaskName} setListTasks={setListTasks} />} />
            <Route path="/add" element={<Add  handleChange={handleChange} addTask={addTask} listTasks={listTasks} />} />
            <Route path="/edit/:taskId" element={<Edit editTask={editTask} editedTask={editedTask}  listTasks={listTasks} updateTaskName={updateTaskName} />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </>
        </div>
    )};
export default App;
