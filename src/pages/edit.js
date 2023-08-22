import '../App.css';
import { Navbarr } from '../Navbar';
import { Footer } from './footer';

export const Edit = ({editTask,handleSave,task,addTask}) => {

  console.log(task);
    return (
        <div className="editPage">
        <Navbarr />
<div className='containerEdit'>
<form class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <input onChange={handleSave} type="text" class="form-control" id="inputPassword2" value={task}  style={{"margin-top":"50px", "width":"500px", "margin-left":"70px"}}/>
  </div>
  <button onClick={() => editTask(task)} type="button" class="btn btn-primary mb-2" style={{"margin-top":"30px", "margin-left":"0px"}}>Save</button>

</form>

</div>
<Footer />
        </div> 

)}

