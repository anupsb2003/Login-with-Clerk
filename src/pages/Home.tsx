import './Home.css'
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import Academic from "../Components/Academic";
import Card from '../Components/Card';
import StudentList from '../Components/StudentList';
function Home(){
    return (
        <div className='home'>
            <SideBar />
            <div className='dashboard'>
                <NavBar />
                <Academic />
                <Card />
                <StudentList />
            </div>
        </div>
    )
}
export default Home;