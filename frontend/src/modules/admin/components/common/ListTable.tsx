import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ListTableProps {
  title: string;
  data: {
    id: number;
    name: string;
    specialization?: string; // Optional for users
    email: string;
    image: string;
    isBlocked: boolean;
  }[];
  onToggleBlock: (id: number) => void;
}

const ListTable: React.FC<ListTableProps> = ({ title, data, onToggleBlock }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const navigate = useNavigate()

  function goTotrainersRequests() {
    navigate("/admin/trainers/request");
  }

  return (
    
    <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col">
      <div className="p-4 border-2 border-color1 border-dashed space-y-8 flex-grow">
        <div className="mb-2 flex items-center justify-between px-12">
          <h1 className="text-color3 font-oswald text-3xl">{title}</h1>
          { title === "TRAINERS" && <button className="bg-color2 text-color3 border-2 border-color3 px-8 py-2" onClick={goTotrainersRequests}>REQUESTS</button>}
        </div>

        {/* Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <table className="min-w-full border-[1px] border-color3 text-center text-sm font-light">
              <thead className="bg-color1 font-medium text-color3 h-20">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  {data[0]?.specialization && <th className="px-6 py-4">Specialization</th>}
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Image</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id} className="text-color3">
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    {item.specialization && (
                      <td className="whitespace-nowrap px-6 py-4">{item.specialization}</td>
                    )}
                    <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center">
                      <img className="w-10 h-10 rounded-full" src={item.image} alt="Avatar" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.isBlocked}
                          onChange={() => onToggleBlock(item.id)}
                        />
                        <div className={`relative w-11 h-6 rounded-full ${item.isBlocked ? "bg-red-600" : "bg-green-600"} peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-green-600 after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                      </label>
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

export default ListTable;
