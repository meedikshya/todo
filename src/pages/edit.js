import '../App.css';
import { Navbarr } from '../Navbar';
import { Footer } from './footer';

export const Edit = () => {
    return (
        <div className="editPage">
        <Navbarr />
<div className='containerEdit'>
<form class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <input type="text" class="form-control" id="inputPassword2" value="" style={{"margin-top":"50px", "width":"500px", "margin-left":"70px"}}/>
  </div>
  <button type="submit" class="btn btn-primary mb-2" style={{"margin-top":"30px", "margin-left":"0px"}}>Save</button>
</form>
</div>
<Footer />
        </div> 

)}

