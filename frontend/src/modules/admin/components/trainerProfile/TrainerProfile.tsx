import { dummyImage } from "../dummyConstantData" 

const TrainerProfile = () => {
  return (
    <div>
      <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col text-color3">
        <div className="p-4 border-2 border-color1 border-dashed space-y-12 flex-grow">
          <div className="mb-2 flex items-center justify-between px-12">
            <h1 className="font-oswald text-3xl">PROFILE</h1>
          </div>

          <div className="flex flex-row items-center space-x-20 ml-10">
            <div>
              <img
                src="https://i.imgur.com/f9szTOU.jpeg"
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-bold text-4xl">John Don</h1>
              <p>Fitness Trainer</p>
              <p>johndoe@gmail.com</p>
              <p>7985664582</p>
            </div>
          </div>

          <div className="flex flex-row justify-between space-x-20  ml-10">
            <div className="flex flex-col items-start space-y-5">
              <div className="space-y-1">
              <h1 className="font-bold text-4xl">Description</h1>
              <p className="text-base leading-relaxed">
              Certified fitness professional with 6+ years of experience in strength training, HIIT, and client transformation programs.
              </p>
              </div>
              <div className="space-y-1">
              <h1 className="font-bold text-3xl">Skills</h1>
              <p>HIIT (High-Intensity Interval Training)</p>
              <p>Strength Training</p>
              <p>Weight Loss Coaching</p>
              </div>
            </div>
            <div>
              <img
                src={dummyImage}
                alt="Profile"
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerProfile