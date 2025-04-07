// frontend\src\modules\user\components\homePage\BodyMassIndex.tsx

import React, { useState } from 'react'
import SubHeading from '../../../common/SubHeading'
import Dropdown from '../../../common/Dropdown'
import { useBMI } from '../../hooks/useBMI';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCustomAlert from '../../../../core/usecases/useCustomAlert';
import useValidation from '../../../../core/usecases/useValidation';


const BodyMassIndex = () => {
    const [bmiData, setBmiData] = useState({ weight: '', height: '', age: '', gender: '', bmi: '', interpretation: '' });

    const { validateAll } = useValidation();
    const { showAlert } = useCustomAlert();
    const { calculateBMI } = useBMI();

    // Unique toast ID to control the toast
    const toastId = React.useRef<string | number | null>(null);

    // Callback function to handle the selection from Dropdown
    const handleGenderSelection = (option: string) => {
        setBmiData((prevData) => ({
            ...prevData,
            gender: option,
        }));  // Update state with selected option
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with data:", bmiData);
        const allErrors = validateAll({ username: "*", email: "*", password: "*", phone: "*" ,height: bmiData.height ,weight: bmiData.weight ,age: bmiData.age, gender: bmiData.gender, certificateUrl:"*"});
        console.log("GENDER",bmiData.gender);
        
    if (allErrors.length > 0) {
        // Pass the array of errors directly to showAlert
        showAlert({ title: "BMI Calculation Failed", listItems: allErrors });
    } else {
        // Show custom toast notification
        toastId.current = toast.info("Please wait", {
            position: "top-center",
            autoClose: false, // Keep toast visible
            closeButton: false, // No close button
            className: "bg-color1 text-color3 font-bold p-4 rounded-lg shadow-lg", // Custom class for styling
            bodyClassName: "font-sans py-2", // Customize body text style
            progressClassName: "rounded-progress bg-color3", // Custom rounded progress bar
        });

        try {
            const result = await calculateBMI(bmiData.weight, bmiData.height, bmiData.age, bmiData.gender);

            // Update state with the result
            setBmiData((prevData) => ({
                ...prevData,
                bmi: result.bmi,
                interpretation: result.interpretation
            }));

            // Close the toast notification when result is ready
            if (toastId.current) toast.dismiss(toastId.current);
        } catch (error) {
            console.error("Error calculating BMI:", error);
            toast.error("Failed to calculate BMI", { position: "top-center" });
        }
    }
    };

    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBmiData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000} // Toast auto-close duration (3 seconds)
                hideProgressBar={true} // Hide default progress bar
                newestOnTop={false}
                closeOnClick={false} // Don't close on click
                rtl={false} // No RTL support
                pauseOnFocusLoss={false} // Don't pause on focus loss
                draggable={false} // Disable dragging
                pauseOnHover={false} // Disable pause on hover
            />
            <div className='bg-color2 text-color1 w-full p-20'>
                <SubHeading subHeading='BODY MASS INDEX' />
                <h1 className="flex justify-center text-color3 text-start font-oswald text-3xl mt-4">Calculate Your BMI Now</h1>
                <div className='flex flex-col justify-center pt-10'>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="weight" placeholder='Weight / KG' onChange={handleInputChange} value={bmiData.weight} autoComplete='off' />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="height" placeholder='Height / CM' onChange={handleInputChange} value={bmiData.height} autoComplete='off' />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="age" placeholder='Age' onChange={handleInputChange} value={bmiData.age} autoComplete='off' />
                            </div>
                            <div>
                                <Dropdown options={["Male", "Female"]} onSelect={handleGenderSelection} />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                            <div>
                                <input type="text" className=" bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="BMI Activity Factor" id="BMI Activity Factor" placeholder='BMI Activity Factor' value={bmiData.bmi} readOnly />
                            </div>
                            <div>
                                <input type="text" className="bg-color2 text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 focus:outline-none w-full" name="This Means" id="This Means" placeholder='This Means' value={bmiData.interpretation} readOnly />
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

            <div className="w-full h-[1px] bg-gray-300"></div>
        </>
    )
}

export default BodyMassIndex