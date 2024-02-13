import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Employee from './components/Employee'; 
import Profile from './components/Profile';
import Category from './components/Category';
import Addcategory from './components/Addcategory'
import Home from './components/Home';
import {Route, BrowserRouter, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login />}></Route>
             <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Home />} />
                <Route path='/dashboard/employee' element={<Employee />} />
                <Route path='/dashboard/category' element={<Category />} />
                <Route path='/dashboard/profile' element={<Profile />} />
                <Route path='/dashboard/add_category' element={<Addcategory />} />
             </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
