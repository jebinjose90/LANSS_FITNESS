import React from 'react'
import SubHeading from '../../../common/SubHeading'


const WorkProgress = () => {
    return (
        <>
            <div className='bg-color2 text-color1 w-full p-20'>
                <SubHeading subHeading='WORK PROCESS' />
                <h1 className="flex justify-center text-color3 text-center font-oswald text-3xl mt-4">Easy Step To Achive Your Goals.</h1>
                <div className='grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-72 h-72 flex items-center justify-center rounded-full bg-color1">
                            <img src="https://i.imgur.com/sicLI0M.jpeg" alt="Exercise Image" className="absolute w-64 h-64 rounded-full object-cover mb-9 bg-opacity-75"
                            />
                        </div>
                        <h1 className="text-color3 text-center font-oswald text-3xl mt-2">Gym Movement</h1>
                        <p className="text-color3 text-center font-sans mt-1">Engage in structured, effective workouts that build strength and stamina.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-72 h-72 flex items-center justify-center rounded-full bg-color1">
                            <img src="https://i.imgur.com/K9ccbQm.jpeg" alt="Exercise Image" className="absolute w-64 h-64 rounded-full object-cover mb-9 bg-opacity-75"
                            />
                        </div>
                        <h1 className="text-color3 text-center font-oswald text-3xl mt-2">Fitness Practice</h1>
                        <p className="text-color3 text-center font-sans mt-1">Consistently follow tailored routines to enhance your overall fitness.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-72 h-72 flex items-center justify-center rounded-full bg-color1">
                            <img src="https://i.imgur.com/hpNheE0.jpeg" alt="Exercise Image" className="absolute w-64 h-64 rounded-full object-cover mb-9 bg-opacity-75"
                            />
                        </div>
                        <h1 className="text-color3 text-center font-oswald text-3xl mt-2">Achievement</h1>
                        <p className="text-color3 text-center font-sans mt-1">Reach your goals with dedication, commitment, and measurable progress.</p>
                    </div>
                </div>

            </div>

            <div className="w-screen h-[1px] bg-gray-300"></div>
        </>
    )
}

export default WorkProgress