
const MainView = () => {
    return (
        <>
        
        <div className="h-[857px] w-full bg-color1 relative">
            <div className="absolute top-0 right-0  h-full sm:w-full md:w-full lg:w-1/2">
                <img className="object-cover w-full h-full opacity-50 transform scale-x-[-1]" src="https://i.imgur.com/F6iBfkA.jpeg" alt="Image" />
            </div>
            <div className="w-[620px] h-full bg-color1 absolute skew-x-[-20deg]  hidden sm:hidden md:hidden lg:block sm:left-[50px] md:left-[50px] lg:left-[100px] xl:left-[400px] "></div>
            <div className="w-[760.89px] h-[300px] bg-gradient-to-r from-color2 to-color3 opacity-20 skew-y-[-40deg] rotate-90 absolute bottom-72 -left-[-180px] hidden sm:hidden md:hidden lg:block"></div>
            <div className="w-[760.89px] h-[300px] bg-gradient-to-r from-color2 to-color3 opacity-20 skew-y-[-40deg] rotate-90 absolute bottom-64 -left-[-160px] hidden sm:hidden md:hidden lg:block"></div>
            <img className="absolute w-80 h-80 rounded-full object-cover bottom-5 left-1/2 transform -translate-x-1/2 hidden sm:hidden md:hidden lg:block" src="https://i.imgur.com/g7ObP7e.jpeg" alt="Circular Image" />
            <div className="absolute flex-col items-center h-full xs:pt-40 sm:pt-40 xs:p-10 sm:p-10 md:p-32 lg:p-32 sm:w-full  md:w-full  lg:w-full  xl:w-1/2  2xl:w-1/2  font-oswald text-color3">
                <h1 className="xs:text-3xl sm:text-5xl  md:text-5xl  lg:text-5xl  xl:text-5xl  2xl:text-5xl pb-10">Unlock Your Full Potential with Every Workout</h1>

                <p className="xs:text-2xl sm:text-3xl  md:text-3xl  lg:text-2xl  xl:text-2xl  2xl:text-2xl font-sans">
                    Every rep, every set, every drop of sweat brings you closer to your goals. Success doesn't come from shortcuts—it’s built through consistency, hard work, and a relentless drive to improve. Embrace the challenge, push through the discomfort, and remember: your only competition is the person you were yesterday. Keep going, stay focused, and watch your transformation unfold.
                </p>
            </div>
            
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        </>
        

    )
}

export default MainView