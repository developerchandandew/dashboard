import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data1 from '../database/chartdata';
let AreaCharts = () => {
   
    return (
        <div className="!bg-white w-full border-2 border-gray-400 rounded-md lg:w-full">
            <header className="bg-gray-100 px-4 mb-5"> Area Chart Example</header>
            <div>
           <ResponsiveContainer width='100%' aspect={1|2}>
            <AreaChart data={data1} width='100%' height='50vh'>
            <CartesianGrid  />
            <XAxis dataKey='name' interval={'preservStartEnd'}/>
            <YAxis dataKey='salary'/>
            <Tooltip />
            <Area dataKey='salary' type='monotone' activeDot={{r:8}}></Area>
            </AreaChart>
           </ResponsiveContainer>
            </div>
            <footer className="bg-gray-100 px-4"> Updated yesterday at 11:59pm</footer>

        </div>
    );
};
export default AreaCharts; 