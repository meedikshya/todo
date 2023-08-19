import img from "../bodyimg.svg";

import { Footer } from './footer';

import { Navbarr } from '../Navbar';



export const Home = () => {
    return(
      <div className="homePage">
        <Navbarr />

        <div className='body'>
<div className='sectionI'>
  <img src= {img} className='imageBody' alt='image' height="700px" width= "500px" />
  </div>

<div className='sectionII'>
<p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <u className='title'>Task-List</u>
            </p>
            <form class="d-flex justify-content-center align-items-center mb-4" className='inputHome'>
              <div class="form-outline flex-fill">
                <input type="text" id="form3" class="form-control form-control-lg" placeholder='New Task...' />
              </div>
              <input className='addButton' type='button' value="ADD" />
            </form>

<br/>
  <br/>

            <div className='list'>
            <ul>
              <li>List 1 Edit/ Delete</li>
              <li>List 2 Edit/ Delete</li>

            </ul>
            </div>
</div>
</div>

<Footer />


      </div>
    )
  };