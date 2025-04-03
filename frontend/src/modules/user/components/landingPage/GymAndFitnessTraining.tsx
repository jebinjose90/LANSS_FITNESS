import React from 'react'
import SubHeading from '../../../common/SubHeading'

const GymAndFitnessTraining = () => {
    return (
        <>
            <div className='bg-color2 text-color1 w-full p-20'>
                <SubHeading subHeading='GYM & FITNESS TRAINING' />
                <h1 className="flex justify-center text-color3 text-center font-oswald text-3xl mt-4">Our Gym Fitness Classes</h1>
                <div className='grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/WfHr48O.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75" />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">FITNESS & GYM CLASS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/AJAMMaj.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75"
                            />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">PERSONAL TRAINING</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/A8Ov0bc.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75"
                            />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">BOXING CLASS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/3CFa7oA.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75" />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">CROSSFIT TRAINING</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/zq4uDYn.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75"
                            />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">YOGA & PILATES</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[-4deg] left-6"></div>
                            <div className="absolute w-48 h-64 bg-color1 skew-x-[4deg] right-6"></div>
                            <img src="https://i.imgur.com/aiS7jUw.jpeg" alt="Exercise Image" className="absolute w-64 h-64 object-cover mb-7 bg-opacity-75"
                            />
                        </div>
                        <p className="text-color3 text-center font-semibold text-2xl">PSYCHO TRAINING</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>
        </>
    )
}

export default GymAndFitnessTraining