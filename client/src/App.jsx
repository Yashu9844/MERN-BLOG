import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signinn from './pages/Signinn'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (

  

   <BrowserRouter>
     <Header/>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/sign-in' element={<Signinn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route element={<PrivateRoute/>}>
        
    <Route path='/dashboard' element={<Dashboard/>} />

      </Route>
 
    <Route path='/projects' element={<Projects/>} />
</Routes>
   <Footer/>
   
   </BrowserRouter>
  )
}

export default App
