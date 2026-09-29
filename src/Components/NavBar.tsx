import { UserButton, useUser} from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
import "./NavBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
function NavBar(){
    const [time, setTime] = useState(new Date());
    const [search, setSearch] = useState('');
    const {user} = useUser();
    useEffect(()=>{
        const timerID = setInterval(()=>{
            setTime(new Date());
        },1000)
        return () => {
      clearInterval(timerID);
    };
  }, []);
  
    return(
        <div className="nav">
            <div className="headline">
                <h3>Welcome {user?.firstName} </h3>
                <p>{time.toLocaleTimeString()}</p>
            </div>
            <div className='search'>
                <FaSearch className='search-icon'/>
                <input
                    type='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search....'
                />
            </div>
            <FaMicrophone className='mic-icon'/>
            <div className='theme'>
                <IoSunnyOutline className='dark-icon'/>
                <IoMoonOutline className='light-icon' />
            </div>
            <IoIosNotifications className='mic-icon' />
            <div className='profile'>
                <UserButton afterSignOutUrl="/login" />
                <div className='profile-row' >
                    <p className='name' >{user?.firstName}</p>
                    <p className='role' >Ui Designer.....</p>
                </div>
            </div>
        </div>
    )
}
export default NavBar;