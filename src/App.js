import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import About from './component/About/About';
import Navbar from './component/Navbar';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import NoteState from './context/notes/NoteState';
import Landing from './component/Landing/Landing';
import Notes from './component/Notes/Notes';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Calender from './component/Calender/Calender';

function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
        <ToastContainer /> 
          <Navbar />

          <Routes>
            <Route exact path="/land" element={<Landing />} />
            <Route exact path="/" element={<Notes />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/calender" element={<Calender />} />

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>

        </BrowserRouter>
      </NoteState>


    </div>
  );
}

export default App;
