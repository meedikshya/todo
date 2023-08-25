import { Navbarr } from '../Navbar';
import { Footer } from './footer';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';


export const Edit = ({editTask,listTasks,updateTaskName}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task || {};

  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleInputChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  console.log(task);
  console.log(listTasks);
    return (
        <div className="editPage">
        <Navbarr />
<div className='containerEdit'>
<form class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <input onChange={handleInputChange} type="text" class="form-control" id="inputPassword2" value={editedTaskName}  style={{"margin-top":"50px", "width":"500px", "margin-left":"70px"}}/>
  </div>
  <button 
  onClick={() => {
  editTask({...task, taskName: editedTaskName })
   updateTaskName(task.id, editedTaskName);
  navigate('/');
   } }
   type="button" 
   class="btn btn-primary mb-2" 
   style={{"margin-top":"30px", "margin-left":"0px"}}>
   Save
   </button>
</form>

</div>
<Footer />
        </div> 

)}

