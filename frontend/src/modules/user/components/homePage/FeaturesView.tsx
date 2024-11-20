import React from 'react'
import SubHeading from '../../../common/SubHeading'
import Icon from '../../../common/Icon'

const FeaturesView = () => {
    return (
        <>
            <div className='flex-col items-center justify-center bg-color2 py-20 text-color1 w-full'>
                <SubHeading subHeading='FEATURES' />
                <div className='flex justify-center items-center mx-4 pt-6 xs:space-x-1 sm:space-x-2 md:space-x-10 lg:space-x-32 xl:space-x-52 2xl:space-x-72'>
                    <div className="flex flex-col justify-center items-center">
                        <Icon svgName="dumbell-icon" width="40" height="23" className="custom-class  mb-2  text-color3 "/>
                        <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>Personalized Workout Plans</h1>
                        <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                            Tailored fitness programs designed to meet your unique goals, whether it’s weight loss, muscle gain, or improving endurance. Each plan is customized to fit your fitness level and schedule.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Icon svgName="food-icon" width="33" height="28" className="custom-class  mb-2  text-color3" />
                        <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>Nutritional Guidance</h1>
                        <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                            Get expert nutritional advice and meal plans to complement your fitness regime. We offer personalized diets that focus on fueling your body for optimal performance and recovery.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Icon svgName="progress-icon" width="35" height="28" className="custom-class  mb-2  text-color3" />
                        <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>Progress Tracking</h1>
                        <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                            Monitor your fitness journey with real-time progress tracking. Track your weight, body measurements, and workout performance to see how far you've come.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
        </>

    )
}

export default FeaturesView