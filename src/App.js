import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import { Home } from './pages/home';
import { Add } from './pages/add';
import { Edit } from './pages/edit';

function App() {

const[listTasks, setListTasks] = useState([]);
const[newTask, setNewTask] = useState("");

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

const editTask = () => {

}

const deleteTask = (taskId) => {
  const updateTask = listTasks.filter((task) => taskId !== task.id); 
  setListTasks(updateTask);
}

    return (
      <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} addTask={addTask} listTasks={listTasks} deleteTask={deleteTask} />} />
            <Route path="/add" element={<Add  handleChange={handleChange} addTask={addTask} listTasks={listTasks} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </>
        </div>
    )};



export default App;
