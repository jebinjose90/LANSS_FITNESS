import Icon from '../Icon'

interface SignupModel {
    showUplaodCertificate?: boolean
}

const Signup: React.FC<SignupModel> = ({ showUplaodCertificate = false }) => {
    return (
        <>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-user-icon" width="23" height="23" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="name" id="name" placeholder='ENTER YOUR NAME' />
            </div>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-password-icon" width="28" height="24" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="email" id="email" placeholder='ENTER YOUR EMAIL' />
            </div>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-user-icon" width="23" height="23" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="phone" id="phone" placeholder='ENTER PHONE' />
            </div>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-password-icon" width="28" height="24" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="password" id="password" placeholder='ENTER PASSWORD' />
            </div>
            {showUplaodCertificate &&
                <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                    <Icon name="login-user-icon" width="23" height="23" className="custom-class" />
                    <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="certificate" id="certificate" placeholder='ATTACH YOUR CERTIFICATE' />
                </div>
            }

            <p className="text-color3 text-left font-sans my-[10px]">By continuing I agree to the <a className='opacity-80' href="">Terms of Use</a> & <a className='opacity-80' href="">Privacy Policy</a></p>
            <div className='flex-row justify-center items-start'>
                <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sanspy-2 h-10 w-full px-4 hover:opacity-45 transition duration-300">
                    SIGN UP
                </button>
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
            <button className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon name="google-sign-color-icon" width="30" height="30" className="custom-class" /> <a href="" className='pl-3'>sign in with google</a>
            </button>
        </>
    )
}

export default Signup