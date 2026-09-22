import './SideBar.css';
import { PiStudent } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";
import { SiCodementor,SiCoursera } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
function Navbar () {
    return (
        <div className='side'>
            <div>
                <h1><PiStudent /> Student ERP</h1>
            </div>
            <div className='navlink-con'>
                <a href='' className='nav-link' ><HiOutlineRectangleGroup />Dashboard</a>
                <a href='' className='nav-link' ><TbListDetails /> Students Profile</a>
                <a href='' className='nav-link' > <SiCodementor />Mentor info</a>
                <a href='' className='nav-link' ><BsGraphUpArrow />Improvments</a>
                <a href='' className='nav-link'><SiCoursera />Course resourse</a>
            </div>
            <div className='navlink-fot'>
                <a href='' className='nav-link'  > <FaRegSun />Settings</a>
                <a href='' className='nav-link' ><MdOutlineLogout />Logout</a>
            </div>
        </div>
    )
}
export default Navbar;