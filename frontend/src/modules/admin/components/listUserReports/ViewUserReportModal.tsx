// components/CustomModal.tsx
import React from 'react';

interface UserReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ViewUserReportModal: React.FC<UserReportModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none text-color3 focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px] sm:w-[920px] md:w-[920px] lg:w-[1024px] xl:w-[1280px]">
        <div className="w-full h-full border-[1px] border-color3">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none p-6 space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-mono font-bold text-3xl">REPORT</label>
              <button onClick={onClose}>X</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className='flex flex-row space-x-2'>
                <p className='font-extrabold'>Status:</p>
                <p>Pending</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <p className='font-extrabold'>Username:</p>
                <p>{data.username}</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <p className='font-extrabold'>Trainer Name:</p>
                <p>{data.username}</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <p className='font-extrabold'>Report Type:</p>
                <p>Safety</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <p className='font-extrabold'>Date:</p>
                <p>11/03/2024</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-extrabold'>Evidence:</p>
                <div className='w-[150px] h-[100px] bg-slate-500'>
                <img src="" alt="" />
                </div>
              </div>
              <button className='bg-color2 border-2 border-color3 w-1/2'>Send Response</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserReportModal;
