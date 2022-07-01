import './App.css';
import {Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import AddTask from './Page/AddTask';
import ToDo from './Page/ToDo';
import Calender   from './Page/Calender';
import Footer from './component/Footer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>  
      <Navbar/>
        <Routes>
          <Route path="/" element={<AddTask/>}></Route>
          <Route path="/todo" element={<ToDo/>}></Route>
          <Route path="/calender" element={<Calender/>}></Route>
        </Routes>
        <Footer/>
        <ToastContainer/>
    </div>
  );
}

export default App;
