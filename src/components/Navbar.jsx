import {useState} from 'react';
// import Navbar from '../components/SideBar';
import SideBar from '../components/SideBar';
import {Link} from 'react-router-dom'
let Navbar = () => {
    const [dropdown,setDropDown] = useState(false);
    const [side,setSide] = useState(false);
    return (
        <div className="w-full bg-black flex justify-between p-4 fixed top-0 left-0 z-20">
            <div className="w-1/2 text-slate-50"><h1>Dashboard</h1></div>
            <div className="w-1/8 mx-2 flex justify-between text-gray-400">
                <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-10 " onMouseMove={()=>setDropDown(!dropdown)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
             {
                dropdown && 
                <ul className="absolute top-12 left-5 transition-all delay-300 bg-white z-20 p-2 rounded-md">
                <li>Activity</li>
                <li>Settings</li>
               <Link to='/login'><li>SignOut</li></Link> 
            </ul>
             }   
            </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 active:text-white z-30" onClick={()=>setSide(!side)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                {side && <SideBar/>}
            </div>
        </div>
    );
};
export default Navbar;