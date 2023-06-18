import BarCharts from './BarCharts';
import PieCharts  from './PieCharts';
import AreaCharts from '../Charts/AreaCharts';
let Charts = () => {
    return (
        <div className="p-2 w-full sm:w-full">
            <h1 className='mt-12'>Charts</h1>
            <p className='mt-5 mb-14'><a className='text-blue-500 underline'>Dashboard</a> / Charts</p>

            <AreaCharts className='lg:w-full'/>
            <div className='w-full my-4 flex flex-col lg:flex-row lg:justify-between'>
                <BarCharts/>
                <PieCharts/>
            </div>
        </div>
    );
};
export default Charts; 