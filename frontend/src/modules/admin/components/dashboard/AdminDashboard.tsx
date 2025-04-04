import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import SalesChart from './SalesChart';

const data = [
  { name: 'Jan', sales_2023: 22510, sales_2024: 25000 },
  { name: 'Feb', sales_2023: 70000, sales_2024: 72000 },
  { name: 'Mar', sales_2023: 80000, sales_2024: 85000 },
  { name: 'Apr', sales_2023: 150000, sales_2024: 160000 },
  { name: 'May', sales_2023: 130000, sales_2024: 140000 },
  { name: 'Jun', sales_2023: 90000, sales_2024: 95000 },
  { name: 'Jul', sales_2023: 110000, sales_2024: 115000 },
  { name: 'Aug', sales_2023: 105000, sales_2024: 108000 },
  { name: 'Sep', sales_2023: 98000, sales_2024: 102000 },
  { name: 'Oct', sales_2023: 120000, sales_2024: 125000 },
  { name: 'Nov', sales_2023: 140000, sales_2024: 145000 },
  { name: 'Dec', sales_2023: 160000, sales_2024: 170000 },
];

const AdminDashboard = () => {
  return (
    <div className="p-4 sm:ml-64 text-color3">
      <div className="p-4 border-2 border-color1 border-dashed">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center justify-center h-24 border-2 border-color3">
            <p>Total Revenue</p>
            <h1 className='text-3xl font-oswald'>₹ 11750</h1>
          </div>
          <div className="flex flex-col items-center justify-center h-24 border-2 border-color3">
            <p>Revenue from Slots</p>
            <h1 className='text-3xl font-oswald'>₹ 7000</h1>
          </div>
          <div className="flex flex-col items-center justify-center h-24 border-2 border-color3">
            <p>Revenue from Courses</p>
            <h1 className='text-3xl font-oswald'>₹ 10750</h1>
          </div>
        </div>
        <SalesChart/>
      </div>
    </div>
  )
}

export default AdminDashboard