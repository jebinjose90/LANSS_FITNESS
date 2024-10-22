import React from 'react'
import SubHeading from '../../../common/SubHeading'

const SubscriptionPlans = () => {
    return (
        <>
            <div className='bg-color2 text-color1 w-full '>
                <SubHeading subHeading='SUBSCRIPTION PLANS' />
                <div className='flex justify-center'>
                    {/* <!-- component --> */}
                        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
                            {/* <!-- Basic Plan --> */}
                            <div className="border-2 border-color3 p-6 flex flex-col flex-1">


                                <h1 className="text-color3 text-start font-oswald text-2xl mt-4">BASIC</h1>

                                {/* Bulleted List */}
                                <ul className="list-disc list-inside text-color3 mt-3 font-sans  pb-20">
                                    <li>Get Access to all of the fitness courses.</li>
                                </ul>

                                {/* Spacer */}
                                <div className="flex-grow"></div> {/* This will push the button down */}

                                <p className="text-4xl text-color3 font-bold mb-6">₹ 800 <span className="text-xl font-normal text-color3">/month</span></p>

                                {/* Button */}
                                <button className="text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 hover:opacity-45 transition duration-300">
                                    SUBSCRIBE
                                </button>

                            </div>
                            {/* <!-- Advanced Plan --> */}
                            <div className="border-2 border-color3 p-6 flex flex-col flex-1">


                                <h1 className="text-color3 text-start font-oswald text-2xl mt-4">ADVANCED</h1>

                                {/* Bulleted List */}
                                <ul className="list-disc list-inside text-color3 mt-3 font-sans  pb-20">
                                    <li>Get Access to all of the fitness courses.</li>
                                    <li>Chat with favorite trainer, get diet plans.</li>
                                </ul>

                                {/* Spacer */}
                                <div className="flex-grow"></div> {/* This will push the button down */}

                                <p className="text-4xl text-color3 font-bold mb-6">₹ 1600 <span className="text-xl font-normal text-color3">/month</span></p>

                                {/* Button */}
                                <button className="text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 hover:opacity-45 transition duration-300">
                                    SUBSCRIBE
                                </button>

                            </div>

                            {/* <!-- Pro Plan --> */}
                            <div className="border-2 border-color3 p-6 flex flex-col flex-1">


                                <h1 className="text-color3 text-start font-oswald text-2xl mt-4">PREMIUM</h1>

                                {/* Bulleted List */}
                                <ul className="list-disc list-inside text-color3 mt-3 font-sans pb-20">
                                    <li>Get Access to all of the fitness courses.</li>
                                    <li>Chat with favorite trainer, get diet plans.</li>
                                    <li>Live interaction with the Trainers.</li>
                                </ul>

                                {/* Spacer */}
                                <div className="flex-grow"></div> {/* This will push the button down */}

                                <p className="text-4xl text-color3 font-bold mb-6">₹ 2300 <span className="text-xl font-normal text-color3">/month</span></p>

                                {/* Button */}
                                <button className="text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 hover:opacity-45 transition duration-300">
                                    SUBSCRIBE
                                </button>

                            </div>
                        </div>
                </div>

            </div>
            <div className="w-screen h-[1px] bg-gray-300"></div>
        </>
    )
}

export default SubscriptionPlans