import React from 'react'
import './App.css';
//import "antd/dist/antd.css";
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Register'
import Home from './Home'
import Addsubscription from './Addsubscription'
import Discover from './Discover';
import Settings from './Settings';
import Mysubscriptions from './Mysubcriotion';
import Dashboard from './dashboard'

function App() {
  //debugger
  return (
    <div >
      
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addsub" element={<Addsubscription />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/settings" element=
        {<Settings/>} />
        <Route path="/mySubcription" element={<Mysubscriptions/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </div>
      )
}

export default App;
