import React from 'react'
import { useTheme } from '../../../common/hooks/useTheme'
import Logo from '../../../common/Logo'
import CompanyName from '../../../common/CompanyName'
import Icon from '../../../common/Icon'

const LandingPageFooter: React.FC = () => {
    const theme = useTheme()

    if (!theme) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <div className='bg-color1 text-color3 w-full p-20'>
                <div className='flex flex-col justify-center items-center pt-10'>
                    <div className="flex flex-col justify-center items-center">
                        <Logo logoUrl={theme.logoUrl} />
                        <CompanyName companyName={theme.companyName} />
                    </div>
                    <p className="text-color3 text-center font-sans md:w-1/2 lg:w-1/2 mt-7">Dumbbells, kettlebells and resistance bands are key tools for strength training, helping to build muscle, improve flexibility, and boost overall physical performance.</p>

                    <div className="flex flex-row justify-center mt-4">
                            <Icon svgName="x-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="instagram-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="facebook-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="whatsapp-icon" width="40" height="40" className="mx-4 text-color1" />
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>
        </>
    )
}

export default LandingPageFooter