import {Link} from 'react-router-dom';
let PasswordRecovery=()=>{
    return(
        <div className="w-full h-[100vh] bg-blue-600 flex justify-center items-center">
            <form className="w-4/5 bg-white flex flex-col rounded-md border-2 border-gray-300 md:w-2/5">
                <header className="w-full h-20 pt-6 text-xl font-semibold bg-gray-300 text-center">Password Recovery</header>
                <p className="text-center my-3">Enter your email address and we will send you a link to reset your password.</p>
                <input type="email" name="email" placeholder="Email Address" className="w-[90%] border-2 border-gray-400 rounded-md m-auto my-5 mt-7 p-2" />
                <div className="w-[90%] m-auto flex justify-between my-3">
                    <Link to='/login' className='underline'>Return to login</Link>
                    <button className="bg-blue-600 p-2 rounded-md">Reset Password</button>
                </div>
                <footer className="w-full h-12 pt-2  bg-gray-300 text-center"><Link to='/register' className='underline'>Need a account? Sign Up?</Link></footer>
            </form>
        </div>
    )
}
export default PasswordRecovery