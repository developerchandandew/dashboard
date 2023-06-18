import data1 from "../database/chartdata";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let BarCharts = () => {
    return (
        <div className="w-full my-12 bg-white border-2 border-gray-300 lg:w-[48%]">
            <header className="bg-gray-100 px-4 mb-5"> Bar Chart Example</header>

            <ResponsiveContainer width="100%" aspect={1|2}>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="months" />
          <YAxis dataKey='salary'/>
          <Tooltip />
          <Bar dataKey="salary" fill="#0d6efd" />
        </BarChart>
      </ResponsiveContainer>

            <footer className="bg-gray-100 px-4"> Updated yesterday at 11:59pm</footer>


        </div>
    );
};
export default BarCharts;
