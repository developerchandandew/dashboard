import {Link} from 'react-router-dom';
let Register=()=>{
    return (
        <div className="w-full h-[100vh] bg-blue-600 flex justify-center items-center">
            <form className="w-4/5 bg-white border-2 border-gray-200 rounded-md flex flex-col md:flex-row flex-wrap lg:w-1/2">
                <header className="w-full h-12 bg-slate-300 text-center text-2xl pt-2">Create Account</header>
                <input type="text" name='firstname' placeholder='First name' className="w-[85%] m-auto my-5 mt-8 p-2 border-2 border-gray-400 rounded-md focus:border-none focus:outline-none focus:shadow-lg focus:shadow-blue-400 md:w-[45%] "/>
                <input type="text" name='lastname' placeholder='Last name' className="w-[85%] m-auto my-5 mt-8 p-2 border-2 border-gray-400 rounded-md focus:border-none focus:outline-none focus:shadow-lg focus:shadow-blue-400 md:w-[45%] "/>
                <input type="email" name="email" id="" placeholder='Email' className="w-[85%] m-auto my-5 p-2 border-2 border-gray-400 rounded-md focus:border-none focus:outline-none focus:shadow-lg focus:shadow-blue-400 md:w-[95%]"/>
                <input type="password" name="pass" id="" placeholder='Password' className="w-[85%] m-auto my-5 p-2 border-2 border-gray-400 rounded-md focus:border-none focus:outline-none focus:shadow-lg focus:shadow-blue-400 md:w-[45%]"/>
                <input type="password" name="confpass" id="" placeholder='Confirm Password' className="w-[85%] m-auto my-5 p-2 border-2 border-gray-400 rounded-md focus:border-none focus:outline-none focus:shadow-lg focus:shadow-blue-400 md:w-[45%]"/>
                <button className="w-[85%] m-auto my-5 bg-blue-600 p-2 border-2 border-gray-400 rounded-md text-white text-xl border-none md:w-[95%]">Create Account</button>
                <footer className="w-full h-12 bg-slate-300 text-center text-lg pt-2"><Link to='/login'>Have an Account? Goto login</Link></footer>
            </form>
        
        </div>
    )
}
export default Register