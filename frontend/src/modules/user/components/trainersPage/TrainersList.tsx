import React from 'react'
import Icon from '../../../common/Icon'
import Search from '../../../common/Search'
import Pagination from '../../../common/Pagination'

const TrainersList = () => {
    return (
        <>
        <Search/>
            <div className='flex flex-col justify-center items-center bg-color2 text-color3 w-full py-5 px-5'>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2">
                        <div className='flex flex-col'>
                            <img className='w-full h-40 object-cover' src="https://i.imgur.com/g7ObP7e.jpeg" alt="" />
                            <label className='font-extrabold text-xl'>Trainer</label>
                            <label>Specification: <a>________________________</a></label>
                        </div>
                        <div className='grid gap-6 grid-cols-3 pt-2'>
                            <button className='hover:opacity-45 transition duration-300' ><Icon svgName="video-icon" width="40" height="27" className="custom-class"/></button>
                            <button className="text-color2 text-[11px] font-extrabold bg-color3 font-sanspy hover:opacity-45 transition duration-300 px-2">CHART</button>
                            <button className="text-color2 text-[12px] font-extrabold bg-color3 font-sanspy hover:opacity-45 transition duration-300 px-2">BOOK SLOT</button>
                        </div>
                    </div>

                    {/* <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div>
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div>
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div> */}
                </div>
            </div>
        <Pagination/>
        </>
    )
}

export default TrainersList