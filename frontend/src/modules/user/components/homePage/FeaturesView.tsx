import React from 'react'
import SubHeading from '../../../common/SubHeading'
import Icon from '../../../common/Icon'

const FeaturesView = () => {
    return (
        <>
        <div className='flex-col items-center justify-center bg-color2 h-[588px] text-color1 w-full'>
            <SubHeading subHeading='FEATURES' />
            <div className='flex justify-center'>
                <div className="max-w-sm rounded mx-10">
                    <div className="px-6 py-4 flex flex-col items-center">
                        <Icon svgName="dumbell-icon" width="40" height="23" className="custom-class  mb-2  text-color3" />
                        <h1 className='text-color3 text-center font-oswald text-2xl'>Personalized Workout Plans</h1>
                        <p className="text-color3 text-center font-sans mt-5">
                            Tailored fitness programs designed to meet your unique goals, whether it’s weight loss, muscle gain, or improving endurance. Each plan is customized to fit your fitness level and schedule.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded mx-10">
                    <div className="px-6 py-4 flex flex-col items-center">
                        <Icon svgName="food-icon" width="33" height="28" className="custom-class  mb-2  text-color3" />
                        <h1 className='text-color3 text-center font-oswald text-2xl'>Nutritional Guidance</h1>
                        <p className="text-color3 text-center font-sans mt-5">
                        Get expert nutritional advice and meal plans to complement your fitness regime. We offer personalized diets that focus on fueling your body for optimal performance and recovery.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded mx-10">
                    <div className="px-6 py-4 flex flex-col items-center">
                        <Icon svgName="progress-icon" width="35" height="28" className="custom-class  mb-2  text-color3" />
                        <h1 className='text-color3 text-center font-oswald text-2xl'>Progress Tracking</h1>
                        <p className="text-color3 text-center font-sans mt-5">
                        Monitor your fitness journey with real-time progress tracking. Track your weight, body measurements, and workout performance to see how far you've come.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        </>
        
    )
}

export default FeaturesView