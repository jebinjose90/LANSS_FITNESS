import React from 'react'

const Pagination = () => {
    return (
        <div className='justify-center py-2 bg-color2 h-24 w-full space-y-4'>
            <div className=" w-4/5 h-[0.5px] bg-color3 mx-auto"></div>
            <nav className='max-w-md mx-auto' aria-label="Page navigation example">
                <ul className="inline-flex space-x-5 text-base h-10">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 font-semibold text-color3 bg-color1 hover:bg-color3 hover:text-color1 ">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight font-semibold text-color1 bg-color3 hover:bg-color1 hover:text-color3  ">Next</a>
                    </li>
                </ul>
            </nav>
            <div className=" w-4/5 h-[0.5px] bg-color3 mx-auto"></div>
        </div>
    )
}

export default Pagination