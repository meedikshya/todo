import React from 'react';
import img from "../bodyimg.svg";
import { Footer } from './footer';
import { Navbarr } from '../Navbar';
import { useNavigate } from "react-router-dom";

export const Home = ({ handleChange, addTask, listTasks, deleteTask, updateTaskName }) => {
  const navigate = useNavigate();
  const routeChange = (task) => {
  let path = `/edit/${task.id}`;
    navigate(path, { state: {task} });
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
              <input onChange={handleChange} type="text" id="form3" className="form-control form-control-lg" placeholder='New Task...' />
            <div className="form-outline flex-fill">
            </div>
            <input onClick={addTask} className='addButton' type='button' value="ADD" />
          </form>
          <br />
          <br />
          <ul className="list">
            {listTasks.map((task) => (
              <li key={task.id} className="listItems">
              <span className='listItem'>
                <input className="form-check-input" type="checkbox" value="" id="flexCheck"  />
                {task.taskName}
                </span>
                <span className="buttonsED">
                  <button type="button" className="btn btn-primary" onClick={() => {
                  routeChange(task);
                  updateTaskName(task);
                  }}>
                  Edit
                  </button>
                  &nbsp; &nbsp;
                  <button onClick={() => deleteTask(task.id)} type="button" className="btn btn-danger">Delete</button>
                  <br />
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