import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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

const SalesChart = () => {
  return (
    <div className="w-full h-[500px] bg-color1 shadow-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />  {/* ✅ Add legend to differentiate lines */}
          <Line type="monotone" dataKey="sales_2023" stroke="#4F46E5" strokeWidth={2} name="Sales 2023" />
          <Line type="monotone" dataKey="sales_2024" stroke="#E53E3E" strokeWidth={2} name="Sales 2024" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
