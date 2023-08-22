import '../App.css';
import { Navbarr } from '../Navbar';
import { Footer } from './footer';
import '../App.js';
import { useState } from 'react';
import handleChange from "../App";


export const Add = ({handleChange, addTask, listTasks}) => {
    return (
      <div className='addPage'>
        <Navbarr />
<section class="vh-100">
<div className='addItems'>
          <div class="card-body p-5" style={{"margin-top":"50px"}}>
            <h6 class="mb-3">Awesome Todo List</h6>
            <form class="d-flex justify-content-center align-items-center mb-4">
              <div class="form-outline flex-fill">
                <input onChange={handleChange} type="text" id="form3" class="form-control form-control-lg" />
                <label class="form-label" for="form3" style={{"margin-top":"30px"}}>What do you need to do today?</label>
              </div>
              <button onClick={addTask} type="button" class="btn btn-primary btn-lg ms-2" style={{"margin-top":"-60px"}}>Add</button>
            </form>
          </div>
          <div>
             {listTasks.map((task) => {
              return( <h1 key={task.id}>{task.id}{task.taskName}</h1>)
             })}
             </div>

        </div>
</section>
<Footer />
</div>
    )
}