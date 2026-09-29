import './Card.css';
import { PiStudent, PiLeaf } from "react-icons/pi";
import { BsGraphUpArrow  } from "react-icons/bs";
import { TiBatteryFull } from "react-icons/ti";
function Card(){
    return(
        <div className='cardCont'>
            <div className='card'>
                <PiStudent className='student' />
                <p className='carHead'>Total Student</p>
                <h1>300</h1>
            </div>
            <div className='card'>
                <BsGraphUpArrow  className='grade'/>
                <p className='carHead'>Student absent & COPA</p>
                <h1>Card1</h1>
            </div>
            <div className='card'>
                <TiBatteryFull  className='absent'/>
                <p className='carHead'>Attendence rate</p>
                <h1>Card1</h1>
            </div>
            <div className='card'>
                <PiLeaf className='satisfaction'/>
                <p className='carHead'>Teacher Satisfaction</p>
                <h1>Card1</h1>
            </div>
        </div>
    )
}
export default Card;