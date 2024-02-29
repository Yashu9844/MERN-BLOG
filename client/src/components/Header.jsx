import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import{FaMoon,FaSun} from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';


const Header = () => {
   const dispatch = useDispatch()
  const path = useLocation().pathname
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector(state => state.theme)



  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
  <Navbar className='border-b-2'>
 <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Yashwanth's</span>
    Blog</Link>  
  <form>
    <TextInput 
    type='text'
    placeholder='Search...'
    rightIcon={AiOutlineSearch}
    className='hidden lg:inline'
    />
 


  </form>

  <Button className='w-12 h-10 lg:hidden ' color='gray' pill>
    <AiOutlineSearch/>
  </Button>
  <Navbar.Collapse>
  <Navbar.Link active={path === "/"} as={'div'}>
    <Link to='/'>
      Home
    </Link>
  </Navbar.Link >


  <Navbar.Link  active={path === "/about"} as={'div'}>
    <Link to='/about'>
      About
    </Link>
  </Navbar.Link>


  <Navbar.Link  active={path === "/projects"} as={'div'}>
    <Link to='/projects'>
      Projects
    </Link>
  </Navbar.Link>


  


</Navbar.Collapse>

<div className='flex gap-2'>
<Button className='w-12 h-10 hidden sm:inline ' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
  
{theme === 'light' ? <FaSun/> : <FaMoon/>}


</Button>



 {currentUser ? (
  <Dropdown arrowIcon={false}
  inline
  label={
    <Avatar
    alt='user'
    img={currentUser.profilePicture}
    rounded/>
  }>
    <DropdownHeader>
      <span className='block text-sm'>@{currentUser.username}</span>
      <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
    </DropdownHeader>
    <DropdownHeader>
     <Link to={'/dashboard?tab=profile'}>
      <DropdownItem>
         Profile
      </DropdownItem>
     </Link>
     <Dropdown.Divider/>
     <DropdownItem onClick={handleSignout}>
      Sign Out
     </DropdownItem>

   
    </DropdownHeader>

  </Dropdown>
 ):
 (
  <Link to='/sign-in' >
 <Button gradientDuoTone='purpleToBlue' outline >Sign in</Button>

</Link>)}
</div>

<Navbar.Toggle/>

  </Navbar>
  )

}

export default Header
