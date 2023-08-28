import React, { useRef } from 'react';
import img from "../bodyimg.svg";
import { Footer } from './footer';
import { Navbarr } from '../Navbar';
import { useNavigate } from "react-router-dom";

export const Home = ({ handleChange, addTask, listTasks, deleteTask, updateTaskName,setListTasks }) => {
  const navigate = useNavigate();
  const routeChange = (task) => {
  let path = `/edit/${task.id}`;
    navigate(path, { state: {task} });
  };

  let ref = useRef();

  const handleAdd = () => {
    const taskName = ref.current.value;
    if (taskName) {
      addTask(taskName);
      ref.current.value = "";
    }
  };

  const confirmAndDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteTask(taskId);
    }
  };

  const toggle = (taskId) => {
    const updatedTasks = listTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setListTasks(updatedTasks);
  };

  return (
    <div className="homePage">
      <Navbarr />
      <div className='body'>
        <div className='sectionI'>
          <img src={img} className='imageBody' alt='image' height="700px" width="500px" />
        </div>
        <div className='sectionII'>
          <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
            <u className='title'>Task-List</u>
          </p>
          <form className="d-flex justify-content-center align-items-center mb-4 inputHome">

              <input onChange={handleChange} type="text" ref={ref}  id="form3" className="form-control form-control-lg" placeholder='New Task...' />
            <div className="form-outline flex-fill">
            </div>
            <input onClick= {handleAdd} className='addButton' type='button' value="ADD"  />
          </form>
          <br />
          <br />
          <ul className="list">
            {listTasks.map((task) => (
              <li key={task.id} className="listItems" class="d-flex flex-row">
              <span className='listItem' class="d-flex justify-content-start">
                <input className="form-check-input" onChange={() => toggle(task.id)} type="checkbox" value=""  id={`flexCheck-${task.id}`}
                    checked={task.checked || false}/>
                <span style={{ textDecorationLine: task.checked ? "line-through" : "none" }}>
                {task.taskName}
                </span>
                </span>
                <span className='buttonsED'>
                <span className="p-2" class="d-flex justify-content-end">
                  <button type="button" className="btn btn-primary" onClick={() => {
                  routeChange(task);
                  updateTaskName(task);
                  }}>
                  Edit
                  </button>
                  &nbsp; &nbsp;
                  <button onClick={() => confirmAndDelete(task.id)} type="button" className="btn btn-danger">Delete</button>
                  <br />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>


  );
};