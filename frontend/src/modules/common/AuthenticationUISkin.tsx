import { useTheme } from '../../core/usecases/useTheme';
import Logo from './Logo';
import CompanyName from './CompanyName';
import { Link } from 'react-router-dom';


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
            <div className=" h-screen bg-color1">
                <div className="flex rounded-lg shadow-lg overflow-hidden h-full ">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover relative p-9"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                        <div className="absolute flex flex-col justify-center items-center m-8 text-color3 z-10">
                            <Logo logoUrl={theme.logoUrl} />
                            <CompanyName companyName={theme.companyName} />
                        </div>
                    </div>

                    <div className="w-[600px] h-full bg-color1 absolute skew-x-[5deg] left-[850px]"></div>
                    <div className="h-4/5 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute bottom-0 right-[350px]"></div>
                    <div className="h-4/5 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute botttom-10 right-[400px] "></div>

                    <div className="w-full p-10 lg:w-1/2 z-10">
                        {showUserSignup && (
                            <div className="md:flex justify-end space-x-4 text-color3 mb-10">
                                <p className="text-end ml-auto">
                                    {userSigupText}
                                    <Link className="font-bold pl-2" to={userSignupHref}>SIGN UP</Link>
                                </p>
                            </div>
                        )}
                        {showUserSignin && (
                            <div className="md:flex justify-end space-x-4 text-color3 mb-10">
                                <p className="text-end ml-auto">
                                    {userSigupText}
                                    <Link className="font-bold pl-2" to={userSigninHref}>SIGN IN</Link>
                                </p>
                            </div>
                        )}
                        <h1 className="text-left text-color3 font-oswald text-3xl mt-4">{heading}</h1>
                        {showSubHeading &&
                            <p className="text-color3 text-left font-sans my-[10px]">login to continue</p>}
                        {children}
                    </div>
                </div>
            </div>

        )
    }

export default AuthenticationUISkin