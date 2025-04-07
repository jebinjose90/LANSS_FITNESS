import { useState } from "react";
import { Link } from "react-router-dom";

interface ListTableProps<T> {
  title: string;
  data: T[];
}

const TrainerRequestTable = <T extends { id: number; status: boolean }>({
  title,
  data,
}: ListTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Extract table headers dynamically and add "Actions"
  const headers = data.length ? [...Object.keys(data[0]), "Actions"] : [];

  return (
    <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col">
      <div className="p-4 border-2 border-color1 border-dashed space-y-8 flex-grow">
        <div className="mb-2 flex items-center justify-between px-12">
          <h1 className="text-color3 font-oswald text-3xl">{title}</h1>
        </div>

        {/* Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <table className="min-w-full border-[1px] border-color3 text-center text-sm font-light">
              <thead className="bg-color1 font-medium text-color3 h-20">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-6 py-4 capitalize">
                      {header === "Actions" ? "Actions" : header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id} className="text-color3">
                    {Object.keys(item).map((key) => {
                      const value = item[key as keyof typeof item];

                      return (
                        <td key={key} className="whitespace-nowrap px-6 py-4">
                          {key === "status" ? (
                            <span className={value ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                              {value ? "Approved" : "Not Approved"}
                            </span>
                          ) : key === "name" ? (
                            <Link
                              // to={`/admin/trainers/request/profile/${item.id}`}
                              to={`/admin/trainers/request/profile`}
                              className="text-white hover:underline font-medium"
                            >
                              {String(value)}
                            </Link>
                          ) : (
                            String(value)
                          )}
                        </td>
                      );
                    })}
                    <td className="whitespace-nowrap px-6 py-4">
                      {!item.status && (
                        <button className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                          Approve
                        </button>
                      )}
                    </td>
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

export default TrainerRequestTable;
