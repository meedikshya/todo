import '../App.css';
import { Navbarr } from '../Navbar';
import { Footer } from './footer';
import '../App.js';
import { useRef} from 'react';


export const Add = ({handleChange, addTask, listTasks}) => {

  let ref = useRef();

const addItem = () => {
  const taskName = ref.current.value;
if(taskName){
  addTask({taskName});
  ref.current.value = "";
}
};

    return (
      <div className='addPage'>
        <Navbarr />
<section class="vh-100">
<div className='addItems'>
          <div class="card-body p-5" style={{"margin-top":"50px"}}>
            <h6 class="mb-3"></h6>
            <form class="d-flex justify-content-center align-items-center mb-4">
              <div class="form-outline flex-fill">
                <input onChange={handleChange} ref={ref} type="text" id="form3" class="form-control form-control-lg" />
                <label class="form-label" for="form3" style={{"margin-top":"30px"}}>What do you need to do today?</label>
              </div>
              <button onClick={addItem} 
              type="button" class="btn btn-primary btn-lg ms-2" style={{"margin-top":"-60px"}}>Add</button>
            </form>
          </div>
          <div className='addedItem' >
             {listTasks.map((task, index) => {
              return( <h1 key={task.id}>
              <span class="d-flex justify-content-center">
             <span className='addedId'>{index + 1}</span>
              <span className='addedList'>{task.taskName}</span>
              </span>
              </h1>)
             })}
             </div>
        </div>
</section>
<Footer />
</div>
    )
}