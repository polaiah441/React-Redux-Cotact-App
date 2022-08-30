import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import Add from './components/Add';
import Edit from './components/Edit';
import ErrorComp from './components/ErrorComp';
import Home from './components/Home';

function App() {
  const notify = () => toast("Wow It's cool!sucessfully loaded, submitted, requested and it's amazing");
  return (
    <div className="App">
      <ToastContainer/> 
      <Navbar />
       <Routes>
         <Route exact path="/" element={<Home/>} /> 
         <Route path="/add" element={<Add />} />
         <Route path="/edit/:id" element={<Edit/>} />
         <Route path="*" element={<ErrorComp/>}/>
       </Routes>
    </div>
  );
}

export default App;
