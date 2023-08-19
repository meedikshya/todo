import '../App.css';

import { Navbarr } from '../Navbar';
import { Footer } from './footer';

export const Add = () => {
    return (

      <div className='addPage'>
        <Navbarr />

<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">

        <div class="card">
          <div class="card-body p-5">

            <h6 class="mb-3">Awesome Todo List</h6>

            <form class="d-flex justify-content-center align-items-center mb-4">
              <div class="form-outline flex-fill">
                <input type="text" id="form3" class="form-control form-control-lg" />
                <label class="form-label" for="form3">What do you need to do today?</label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg ms-2">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
</div>
    )
}