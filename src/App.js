import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/home';
import { Add } from './pages/add';
import { Edit } from './pages/edit';

  function App() {
    return (
      <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </>
        </div>
    )};



export default App;
