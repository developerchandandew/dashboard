import  AreaCharts from './Charts/AreaCharts';
import BarCharts from './Charts/BarCharts';
import Tables from './pages/Tables';

let Dashboard=()=>{
    return(
        <div className="p-3">
            <h1 className="mt-16  text-4xl font-semibold">DashBoard</h1>
            <h2 className="text-gray-500 ml-1">Dashboard</h2>

            <div className="w-full mt-6  flex flex-col justify-between  md:flex-row md:flex-wrap">

                <div className="w-full my-4 p-2 bg-blue-600 text-white rounded-md md:w-[47%]">
                    <h1 className="h-16 p-2 text-xl">Primary Card</h1>
                    <span className="w-full px-3 flex justify-between border-t-2  border-blue-700"><h2 className="underline my-2">View Details</h2><i class="fa-solid fa-chevron-right mt-3"></i></span>
                </div>


                <div className="w-full my-4 p-2 bg-yellow-400 text-white rounded-md md:w-[47%]">
                    <h1 className="h-16 p-2 text-xl">Warning Card</h1>
                    <span className="w-full px-3 flex justify-between border-t-2  border-yellow-500"><h2 className="underline my-2">View Details</h2><i class="fa-solid fa-chevron-right mt-3"></i></span>
                </div>

                <div className="w-full my-4 p-2  bg-green-800 text-white rounded-md md:w-[47%]">
                    <h1 className="h-16 p-2 text-xl">Success Card</h1>
                    <span className="w-full px-3 flex justify-between border-t-2  border-green-700"><h2 className="underline my-2">View Details</h2><i class="fa-solid fa-chevron-right mt-3"></i></span>
                </div>

                <div className="w-full my-4 p-2 bg-red-700 text-white rounded-md md:w-[47%]">
                    <h1 className="h-16 p-2 text-xl">Danger Card</h1>
                    <span className="w-full px-3 flex justify-between border-t-2  border-red-800"><h2 className="underline my-2">View Details</h2><i class="fa-solid fa-chevron-right mt-3"></i></span>
                </div>
            </div>

            {/* area chart */}
            <AreaCharts/>
            <BarCharts/>
            <Tables/>
        </div>
    )
}
export default Dashboard