import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ListTableProps<T> {
  title: string;
  data: T[];
}

const ListMealsTable = <T extends { id: number }>({ title, data }: ListTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Extract table headers dynamically
  const headers = data.length ? Object.keys(data[0]) : [];

  const navigate = useNavigate()

  function goToAddMeal() {
    navigate("/admin/mealPlans/addMeal")
  }

  return (
    <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col">
      <div className="p-4 border-2 border-color1 border-dashed space-y-8 flex-grow">
        <div className="mb-2 flex items-center justify-between px-12">
          <h1 className="text-color3 font-oswald text-3xl">{title}</h1>
          <button onClick={goToAddMeal} className="bg-color2 text-color3 border-2 border-color3 px-8 py-2">ADD MEAL</button>
        </div>

        {/* Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <table className="min-w-full border-[1px] border-color3 text-center text-sm font-light">
              <thead className="bg-color1 font-medium text-color3 h-20">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-6 py-4 capitalize">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id} className="text-color3">
                    {headers.map((key) => (
                      <td key={key} className="whitespace-nowrap px-6 py-4">
                        {String(item[key as keyof typeof item])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-color3 text-color3 hover:bg-color1 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-color3 px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-color3 text-color3 hover:bg-color1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListMealsTable;
