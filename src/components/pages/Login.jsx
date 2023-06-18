import {Link} from 'react-router-dom';
let Login=()=>{
    return(
        <div className="w-full h-[100vh] bg-blue-600 flex justify-center items-center">
            <form className="w-4/5 border-2 border-gray-300 rounded-md bg-white flex flex-col md:w-[60%]">
                <header className="w-full h-12 pt-2 text-xl font-semibold bg-gray-300 text-center">Login</header>
                <input type="Email" name="email" placeholder="Email" className="w-[90%] border-2 border-gray-400 rounded-md m-auto my-5 mt-7 p-2"/>
                <input type="password" name="password" id="" placeholder="Password" className="w-[90%] border-2 border-gray-400 rounded-md m-auto p-2 my-5" />
                <div className="flex ">
                <input type="checkbox" name="remember" value="reme"  className="w-5 h-5 ml-7 inline"/>
                <label className="mx-2">Remember Password</label>
                </div>
                <div className="w-[90%] m-auto my-5 flex justify-between">
                    <Link to='/recovery' className='underline '>Forget Password</Link>
                    <Link to='/dashboard'>
                    <button className="bg-blue-600 p-2 rounded-md">Login</button></Link>
                </div>
                <footer className="w-full h-12 pt-2 text-xl font-semibold bg-gray-300 text-center"><Link to='/register'>Need an Account? Sign Up?</Link></footer>

            </form>
        </div>
    )
}
export default Login 