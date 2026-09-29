import './SideBar.css';
import { PiStudent } from "react-icons/pi";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";
import { SiCodementor,SiCoursera } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";
import { UserButton} from "@clerk/clerk-react";
function Navbar () {
    return (
        <div className='side'>
            <div>
                <h1><PiStudent /> Student ERP</h1>
            </div>
            <div className='navlink-con'>
                <a  className='nav-link' ><HiOutlineRectangleGroup />Dashboard</a>
                <a  className='nav-link' ><TbListDetails /> Students Profile</a>
                <a  className='nav-link' > <SiCodementor />Mentor info</a>
                <a  className='nav-link' ><BsGraphUpArrow />Improvments</a>
                <a  className='nav-link'><SiCoursera />Course resourse</a>
            </div>
            <div className='navlink-fot'>
                <a  className='nav-link'  > <FaRegSun />Settings</a>
                <a  className='nav-link' ><UserButton afterSignOutUrl="/login" />Logout</a>
            </div>
        </div>
    )
}
export default Navbar;