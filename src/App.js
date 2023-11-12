import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './app/Home';
import About from './app/About';
import Contact from './app/Contact';
import Services from './app/Services';
import Login from './app/Login';
import Register from './app/Register';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
   </Routes>
  )
}

export default App;
