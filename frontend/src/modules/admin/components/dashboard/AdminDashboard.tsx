import SalesChart from './SalesChart';

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