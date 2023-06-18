import {Link} from 'react-router-dom';
let Five = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-7xl mt-16">500</h1>
            <h2 className="mt-4 text-2xl">Internal server error</h2>
            <Link to='/dashboard'>
                <button className="mt-5 border-b-2 border-blue-900"><i class="fa-solid fa-arrow-left mx-4"></i>Return to dashboard</button>
            </Link>

        </div>
    );
};
export default Five; 