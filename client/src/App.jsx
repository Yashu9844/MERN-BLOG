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
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostShow from './pages/PostShow'
import ScrollTop from './components/ScrollTop'
import Search from './pages/Search'


const App = () => {
  return (

  

   <BrowserRouter>
   <ScrollTop/>
     <Header/>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/sign-in' element={<Signinn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/search' element={<Search />} />
    

    <Route element={<PrivateRoute/>}>
    <Route path='/dashboard' element={<Dashboard/>} />
      </Route>


    <Route element={<OnlyAdminPrivateRoute/>}>
    <Route path='/create-post' element={<CreatePost/>} />
    <Route path='/update-post/:postId'element={<UpdatePost/>}/>
      </Route>
 

    
    <Route path='/projects' element={<Projects/>} />
    <Route path='/post/:postSlug' element={<PostShow/>} />
</Routes>
   <Footer/>
   
   </BrowserRouter>
  )
}

export default App
