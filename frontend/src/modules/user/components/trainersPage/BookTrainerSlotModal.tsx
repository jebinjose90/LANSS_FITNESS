import Icon from "../../../common/Icon";

interface ChildComponentProps {
  onClose: () => void; // Callback to close the child
}


const BookTrainerSlotModal: React.FC<ChildComponentProps> = ({ onClose }) => {
  return (
    <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px] sm:w-[920px] md:w-[920px] lg:w-[1024px] xl:w-[1280px]">
        <div className="w-full h-full border-[1px] border-color3">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none p-6 space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-mono font-bold text-3xl">AVALIABLE SLOTS</label>
              <button onClick={onClose}>X</button>
            </div>
            <div>
              <label className="text-sm">SELECT A SLOT</label>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button className="border-[1px] w-[60px] h-[60px] flex flex-col items-center justify-center">
                <a className="block font-oswald text-[10px] font-light">OCT</a>
                <a className="block font-oswald font-semibold text-xl">7</a>
                <a className="block font-oswald text-[10px] font-light">MON</a>
              </button>
              <button className="border-[1px] w-[60px] h-[60px] flex flex-col items-center justify-center">
                <a className="block font-oswald text-[10px] font-light">OCT</a>
                <a className="block font-oswald font-semibold text-xl">7</a>
                <a className="block font-oswald text-[10px] font-light">MON</a>
              </button>
              <button className="border-[1px] w-[60px] h-[60px] flex flex-col items-center justify-center">
                <a className="block font-oswald text-[10px] font-light">OCT</a>
                <a className="block font-oswald font-semibold text-xl">7</a>
                <a className="block font-oswald text-[10px] font-light">MON</a>
              </button>
              <button className="border-[1px] w-[60px] h-[60px] flex flex-col items-center justify-center">
                <a className="block font-oswald text-[10px] font-light">OCT</a>
                <a className="block font-oswald font-semibold text-xl">7</a>
                <a className="block font-oswald text-[10px] font-light">MON</a>
              </button>
              <button className="border-[1px] w-[60px] h-[60px] flex flex-col items-center justify-center">
                <a className="block font-oswald text-[10px] font-light">OCT</a>
                <a className="block font-oswald font-semibold text-xl">7</a>
                <a className="block font-oswald text-[10px] font-light">MON</a>
              </button>
              <button className="w-[60px] h-[60px] flex flex-col items-center justify-center">
                <Icon svgName="calender-icon" width="55" height="55" />
              </button>
            </div>
            <div className="flex justify-center">
              <label className="text-sm">SLIDE TO CHECK AVAILABILITY</label>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-start items-center -space-x-[40px] w-[450px] sm:w-[450px] lg:w-[680px] overflow-x-auto no-scrollbar">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div><div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-red-700 mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div><div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-white mt-1 ml-[44px]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    <a className="font-oswald text-[10px]">6.00 AM</a>
                    <div className="h-4 w-[2px] bg-white"></div>
                  </div>
                  <div className="w-[40px] h-[3px] bg-transparent mt-1 ml-[44px]"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-6">
              <button className="flex flex-col justify-center items-center space-y-2">
                <a className="block">FROM</a>
                <a className="block">06.00 AM</a>
              </button>
              <div className="h-14 bg-color3 w-[2px]"></div>
              <button className="flex flex-col justify-center items-center space-y-2">
                <a className="block">TO</a>
                <a className="block">06.00 PM</a>
              </button>
            </div>
            <div className="flex flex-col items-end">
              <button className="text-color1 bg-color3 text-[11px] font-extrabold font-sanspy hover:opacity-45 transition duration-300 p-3 w-1/6">
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTrainerSlotModal