import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import {Route, BrowserRouter, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login />}></Route>
             <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
