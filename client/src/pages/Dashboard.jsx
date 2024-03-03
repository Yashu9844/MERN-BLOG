import { useLocation } from 'react-router-dom'
import React from 'react'
import { useEffect,useState } from 'react'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'
import DashPosts from '../components/DashPosts'


const Dashboard = () => {

  const [tab,setTab] = useState('')
  const location = useLocation()

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFormURL = urlParams.get('tab')
    if (tabFormURL) {
      setTab(tabFormURL)
      
    }
  },[location.search])
  
  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
           <div className='md:w-56'>
             {/*SideBar */}
             <DashSidebar/>
           </div>
           {/*Profile*/}
           {tab === 'profile' && <DashProfile/>}
           {/* Posts */}
           {tab === 'posts' && <DashPosts/>}
    </div>

  )
}

export default Dashboard
