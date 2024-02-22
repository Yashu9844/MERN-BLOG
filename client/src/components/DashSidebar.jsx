import React from 'react'
import {Sidebar, SidebarItem, SidebarItemGroup} from 'flowbite-react'
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
import { useEffect,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DashSidebar = () => {
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
   <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <SidebarItem active={tab === 'profile'} icon={HiUser} label={"User"} labelColor="dark" as='div'>
                    Profile
                </SidebarItem>
                <SidebarItem  icon={HiArrowSmRight} classnam>
                    Sign Out
                </SidebarItem>
                </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>


   </Sidebar>
  )
}

export default DashSidebar
