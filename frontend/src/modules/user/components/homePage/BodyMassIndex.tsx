import React from 'react'
import SubHeading from '../../../common/SubHeading'
import Dropdown from '../../../common/Dropdown'

const BodyMassIndex = () => {
    return (
        <>
            <div className='bg-color2 text-color1 w-full p-20'>
                <SubHeading subHeading='BODY MASS INDEX' />
                <h1 className="flex justify-center text-color3 text-start font-oswald text-3xl mt-4">Calculate Your BMI Now</h1>
                <div className='flex flex-col justify-center pt-10'>
                    <form>
                        <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="weight/kg" id="weight/kg" placeholder='Weight / KG' />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="height / CM" id="height / CM" placeholder='Height / CM' />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="age" id="age" placeholder='Age' />
                            </div>
                            <div>
                                <Dropdown />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                            <div>
                                <input type="text" className=" bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="BMI Activity Factor" id="BMI Activity Factor" placeholder='BMI Activity Factor' readOnly />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="This Means" id="This Means" placeholder='This Means' readOnly />
                            </div>
                            <div>
                                <button type='submit' className="text-color2 font-bold bg-color3 font-sanspy-2 h-10 px-4 hover:opacity-45 transition duration-300 w-full">
                                    CALCULATE NOW
                                </button>
                            </div>

                        </div>
                    </form>

                </div>

            </div>

            <div className="w-screen h-[1px] bg-gray-300"></div>
        </>
    )
}

export default BodyMassIndex