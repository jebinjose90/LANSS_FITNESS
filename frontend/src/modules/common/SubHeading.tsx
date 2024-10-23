import React from 'react'
interface Heading{
    subHeading : string
  }
const SubHeading: React.FC<Heading> = ({subHeading = "heading"}) => {
    return (
        <div className='subHeading flex items-center justify-center h-2/5'>
            <div className='bg-color1 h-1 w-10'></div>
            <p className='text-2xl font-bold text-center ml-4 mr-4'>{subHeading}</p>
            <div className='bg-color1 h-1 w-10 '></div>
        </div>
    )
}

export default SubHeading