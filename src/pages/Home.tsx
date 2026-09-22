import './Home.css'
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import Academic from "../Components/Academic";
function Home(){
    return (
        <div className='home'>
            <SideBar />
            <div className='dashboard'>
                <NavBar />
                <Academic />
                <h1>Welcome </h1>
            </div>
        </div>
    )
}
export default Home;