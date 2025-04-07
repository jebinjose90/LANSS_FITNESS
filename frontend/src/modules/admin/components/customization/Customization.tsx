import { useState } from "react";
import ThemeCustomizationModal from "./ThemeCustomizationModal";

const Customization = () => {
  // Setting for MODAL
  const [isModalOpen, setModalOpen] = useState(false);
  // const [selectedData, setSelectedData] = useState<any>(null);
  //____________________________________________________________
// HANDLE MODAL - By Clicking the Action button the reports modal will pop up.
  const handleButtonClick = (data: any) => {
    // setSelectedData(data);
    setModalOpen(true);
  };
  return (
    <div>
      <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col text-color3">
        <div className="p-4 border-2 border-color1 border-dashed space-y-12 flex-grow">
          <div className="mb-2 flex items-center justify-between px-12">
            <h1 className="font-oswald text-3xl">CUSTOMIZATION</h1>
          </div>

          <div className="space-y-4 pl-16">
            <div className="flex items-center space-x-6">
              <p>Company Name:</p>
              <p>LANSS FITNESS</p>
            </div>
            <div className="flex items-center space-x-6">
              <p>Company Icon:</p>
              <img className="w-[60px] h-[60px]" src="https://i.imgur.com/H7QtKIM.png" />
            </div>
          </div>

          <div className="space-y-6 pl-16">
            <h1 className="font-oswald text-2xl">THEME</h1>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-[50px]"><p>Color1:</p></div>
                <div className="w-[50px] h-[50px] border-2 border-color3 bg-color1"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[50px]"><p>Color2:</p></div>
                <div className="w-[50px] h-[50px] border-2 border-color3 bg-color2"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[50px]"><p>Color3:</p></div>
                <div className="w-[50px] h-[50px] border-2 border-color3 bg-color3"></div>
              </div>
            </div>
            <div className="mx-8">
              <button onClick={() => handleButtonClick("")} className="border-2 border-color3 bg-color2 px-6 py-2">EDIT</button>
            </div>
          </div>
        </div>
      </div>
      <ThemeCustomizationModal data={""} isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
    </div>
  )
}

export default Customization