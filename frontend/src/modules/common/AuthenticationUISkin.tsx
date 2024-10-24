import { useTheme } from '../../core/usecases/useTheme';
import Logo from './Logo';
import CompanyName from './CompanyName';
import Icon from './Icon';
import { Children } from 'react';


interface UserType {
    imageUrl: string;
    userType: string;
    newUserType: string;
    createUserHref: string;
    signinWithGoogleHref: string;
    onSubmit: (event: React.FormEvent) => void;
    children?: React.ReactNode; // This allows passing in custom input fields
}

const AuthenticationUISkin: React.FC<UserType> = ({ imageUrl, userType, newUserType, createUserHref,children,onSubmit}) => {
    const theme = useTheme()

    if (!theme) {
        return <div>Loading...</div>;
    }
    return (
        <div className="h-screen w-screen bg-color1 relative">

            <div className="absolute top-0 left-0 w-1/2 h-full opacity-70 z-auto ">
                <img className="object-cover w-full h-full opacity-70" src={imageUrl} alt="Image" />
            </div>
            <div className="w-[600px] h-full bg-color1 absolute skew-x-[5deg] left-[850px]"></div>
            <div className="h-5/6 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute bottom-0 right-[350px]"></div>
            <div className="h-5/6 w-1/5 bg-gradient-to-b from-color2 to-color3 opacity-20 skew-x-[-40deg] absolute bottom-10 right-[400px]"></div>

            <div className="absolute mx-auto flex justify-between items-center w-full px-20 py-5">
                <div className="flex flex-col justify-center items-center -space-y-2 text-color3">
                    <Logo logoUrl={theme.logoUrl} />
                    <CompanyName companyName={theme.companyName} />
                </div>
                <div className="md:flex space-x-4 text-color3">
                    <p>{newUserType} <a className="font-bold pl-2" href={createUserHref}>SIGN UP</a></p>
                </div>
            </div>
            <div className='absolute h-5/6 w-2/6 top-28 right-52 opacity-95 '>
                <h1 className="text-left text-color3 font-oswald text-3xl mt-4">{userType}</h1>
                <p className="text-color3 text-left font-sans my-[10px]">login to continue</p>
                <form onSubmit={onSubmit} className='space-y-7 bg-transparent py-10' method="POST">
                    {children}
                </form>
                
            </div>
        </div>
    )
}

export default AuthenticationUISkin