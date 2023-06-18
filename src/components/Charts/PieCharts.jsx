import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import data1 from '../database/chartdata';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
let PieCharts = () => {
    return (
        <div className="w-full mt8 md:mt-12 lg:w-[48%]">
            <header className="bg-gray-100 px-4 mb-5 "> Pie Chart Example</header>
            <ResponsiveContainer aspect={1|2}>
                <PieChart width={400} height={300}>
                    <Pie
                        dataKey="salary"
                        isAnimationActive={true}
                        data={data1}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#0d6efd"
                        label
                    >
                     {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}   
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <footer className="bg-gray-100 px-4"> Updated yesterday at 11:59pm</footer>

        </div>
    );
};
export default PieCharts;