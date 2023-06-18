import {Link} from 'react-router-dom';
let FourNotFour=()=>{
    return (
        <div className="w-full pt-16 flex flex-col justify-center text-center">
            <img src="src/images/error.png" alt="404 error" />
            <p>This requested URL was not found on the server</p>
           <Link to='/dashboard'> <button className="text-xl underline"><i class="fa-solid fa-arrow-left"></i> Return to Dashboard</button></Link>
        </div>
    )
}
export default FourNotFour;