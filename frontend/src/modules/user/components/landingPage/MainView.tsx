import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../common/hooks/useTheme";
import CompanyName from "../../../common/CompanyName"
import Logo from "../../../common/Logo"
import userCRM from "../../../../core/constants/route/userCRM";
import trainerCRM from "../../../../core/constants/route/trainerCRM";


const MainView: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate()


    function usersignin(): void {
        navigate(`/${userCRM.UserLogin}`)
    }

    function trainerSignin(): void {
        navigate(`/${trainerCRM.TrainerLogin}`)
    }

    if (!theme) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="h-[924px] w-full bg-color1 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full">
                    <img className="object-cover w-full h-full opacity-50 transform scale-x-[-1]" src="https://i.imgur.com/F6iBfkA.jpeg" alt="Image" />
                </div>
                <div className="w-[600px] h-full bg-color1 absolute skew-x-[-20deg] left-[400px]"></div>
                <div className="w-[760.89px] h-[300px] bg-gradient-to-r from-color2 to-color3 opacity-20 skew-y-[-40deg] rotate-90 absolute bottom-72 -left-[-180px]"></div>
                <div className="w-[760.89px] h-[300px] bg-gradient-to-r from-color2 to-color3 opacity-20 skew-y-[-40deg] rotate-90 absolute bottom-64 -left-[-160px]"></div>
                <img className="absolute w-80 h-80 rounded-full object-cover bottom-5 left-1/2 transform -translate-x-1/2"
                    src="https://i.imgur.com/g7ObP7e.jpeg" alt="Circular Image" />
                <div className="absolute flex-col items-center p-32 w-1/2 font-oswald text-color3">
                    <h1 className="text-5xl pb-10">At Lanss Fitness,  we help you cultivate  strength,  endurance,  and resilience.</h1>

                    <p className="font-sans text-2xl opacity-70">
                        Your fitness journey starts with dedication, we are committed to  guiding you every step of the way. Our tailored sessions are designed to challenge your limits, fostering both physical strength and mental resilience. Embrace the journey, trust the process, and achieve your highest potential. Ready to begin? </p>
                    <p className="font-sans text-2xl opacity-70 pb-5"><a className="text-color3 text-3xl font-semibold">Click below</a> to start your transformation today!</p>
                    <a className="text-color3 text-3xl font-sans font-semibold opacity-70 hover:opacity-45 transition duration-300" href="">JOIN NOW</a>
                </div>

                <div className="absolute mx-auto flex justify-between items-center w-full px-20 py-5">
                    <div className="flex flex-col justify-center items-center -space-y-2 text-color3">
                        <Logo logoUrl={theme.logoUrl} />
                        <CompanyName companyName={theme.companyName} />
                    </div>
                    <div className="md:flex space-x-4">
                        <button className="text-color3 w-40 h-10 px-4 hover:border-2 border-color3" onClick={trainerSignin}>
                            TRAINER
                        </button>
                        <button className="text-color3 border-2 border-color3 w-40 h-10 px-4 hover:border-0" onClick={usersignin}>
                            USER
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
        </>
    )
}

export default MainView