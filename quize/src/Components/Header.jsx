import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/Main'

const Header = () => {
   const {user,logout}=useContext(MainContext);
  return (
    <div className='p-3 bg-white shadow' >
        <header className='max-w-[1200px] mx-auto flex justify-between items-center '>
            <div className='text-2x1 font-bold '>  Quizz</div>
            <ul className='flex gap-5'>
                <li>
                    <Link to={"/"}>
                    Listing
                    </Link>
                </li>
                <li >
                    <Link to={"/add"}>
                    Create
                    </Link>
                </li>
               
                
                  {
                    user == null 
                    ?
                    <li>
                    <Link to={"/login"}>
                    Login
                    </Link>
                    </li> 
                    :
                    <>
                   
                   <li>
                   <Link to={"/play"}>
                    Play
                    </Link>
                    </li>  
                   <li className='cursor-pointer' onClick={logout} >
                  Logout
                   </li>
                    </>
                  }
                
            </ul>
        </header>
      
    </div>
  )
}

export default Header
