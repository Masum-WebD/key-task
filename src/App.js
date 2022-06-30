import './App.css';
import {Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import AddTask from './Page/AddTask';
import ToDo from './Page/ToDo';
import Calender   from './Page/Calender';
import Footer from './component/Footer';

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
    </div>
  );
}

export default App;
