import { useTheme } from '../../core/usecases/useTheme';
import Logo from './Logo';
import CompanyName from './CompanyName';


interface UserType {
    imageUrl: string;
    heading: string;
    showSubHeading?: boolean;
    showUserSignup?: boolean;
    userSigupText?: string;
    userSignupHref?: string;
    showUserSignin?: boolean;
    userSiginText?: string;
    userSigninHref?: string;
    children?: React.ReactNode; // This allows passing in custom input fields
}

const AuthenticationUISkin: React.FC<UserType> =
    ({
        imageUrl, heading, showSubHeading = false, children, showUserSignup = false, userSigupText = 'New User', userSignupHref = "", showUserSignin = false, userSiginText = 'Already a User', userSigninHref = "",
    }) => {
        const theme = useTheme()

        if (!theme) {
            return <div>Loading...</div>;
        }
        return (
            <section className="h-full flex flex-col md:flex-row items-center bg-color1">

                <div className="hidden sm:hidden md:hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
                    <div className="absolute flex flex-col justify-center items-center m-8 text-color3 z-10">
                        <Logo logoUrl={theme.logoUrl} />
                        <CompanyName companyName={theme.companyName} />
                    </div>
                    <img className="object-cover w-full h-full opacity-70 p-0 m-0" src={imageUrl} alt="Image" />
                </div>

                {/* <div className="w-[600px] h-full bg-color1 absolute skew-x-[5deg] left-[850px]"></div>
                <div className="h-4/5 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute bottom-0 right-[350px]"></div>
                <div className="h-4/5 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute botttom-10 right-[400px] "></div> */}


                <div className=" w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-full px-6 lg:px-16 xl:px-12 flex items-center justify-center z-10">



                    <div className="w-full h-full">
                        {showUserSignup && (
                            <div className="md:flex justify-end space-x-4 text-color3 mb-10">
                                <p className="text-end ml-auto">
                                    {userSigupText} <a className="font-bold pl-2" href={userSignupHref}>SIGN UP</a>
                                </p>
                            </div>
                        )}
                        {showUserSignin && (
                            <div className="md:flex justify-end space-x-4 text-color3 mb-10">
                                <p className="text-end ml-auto">
                                    {userSiginText} <a className="font-bold pl-2" href={userSigninHref}>SIGN IN</a>
                                </p>
                            </div>
                        )}
                        <h1 className="text-left text-color3 font-oswald text-3xl mt-4">{heading}</h1>
                        {showSubHeading &&
                            <p className="text-color3 text-left font-sans my-[10px]">login to continue</p>}
                        {children}
                    </div>
                </div>


            </section>
        )
    }

export default AuthenticationUISkin