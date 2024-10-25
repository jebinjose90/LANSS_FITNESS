import Icon from '../Icon'

const Login = () => {
    return (
        <>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-user-icon" width="23" height="23" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none" name="email" id="email" placeholder='ENTER EMAIL' />
            </div>
            <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                <Icon name="login-password-icon" width="28" height="24" className="custom-class" />
                <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none" name="password" id="password" placeholder='ENTER PASSWORD' />
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">By continuing I agree to the <a className='opacity-80' href="">Terms of Use</a> & <a className='opacity-80' href="">Privacy Policy</a></p>
            <div className='flex-row justify-center items-start'>
                <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sanspy-2 h-10 w-1/4 px-4 hover:opacity-45 transition duration-300">
                    LOGIN
                </button>
                <a className="text-color3 font-sanspy-2 pl-5" href=''>FORGOT PASSWORD?</a>
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
            <button className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon name="google-sign-color-icon" width="30" height="30" className="custom-class" /> <a href="" className='pl-3'>sign in with google</a>
            </button>
        </>
    )
}

export default Login