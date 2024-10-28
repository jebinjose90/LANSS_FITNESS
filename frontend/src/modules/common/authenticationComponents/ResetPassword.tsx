import Icon from '../Icon'

const ResetPassword = () => {
  return (
    <>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon svgName="login-password-icon" width="28" height="24" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="password" id="password" placeholder='ENTER PASSWORD' />
            </div>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon svgName="login-password-icon" width="28" height="24" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="confirm password" id="confirm password" placeholder='CONFIRM PASSWORD' />
            </div>
            <div className='flex-row justify-center items-start'>
                <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sanspy-2 h-10 w-full px-4 hover:opacity-45 transition duration-300">
                    SIGN UP
                </button>
            </div>
        </>
  )
}

export default ResetPassword