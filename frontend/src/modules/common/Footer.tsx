import React from 'react'
import Icon from './Icon'

const Footer = () => {
    return (
        <>
            <footer className="relative bg-color1 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-4/12 px-4">
                            <h5 className="text-3xl font-sans-semibold text-color3">NEED THE MOBILE APP?</h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <Icon svgName="google-play-icon" width="258" height="78" className="custom-class pt-5" />
                                <Icon svgName="app-store-icon" width="258" height="78" className="custom-class pt-5" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 text-color3 px-4 ml-auto">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Atlanta</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Auckland</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Austin</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Boston</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Brisbane</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Calgary</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Chicago</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Dallas</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Denver</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Dublin</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Houston</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Las Vegas</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>London</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Los Angeles</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Manchester</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Miami</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 text-color3 px-4 ml-auto">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>New York</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Orlando</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>San Francisco</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Seattle</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Sydney</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Toronto</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Vancouver</a>
                                        </li>
                                        <li>
                                            <a className='text-color3 hover:text-color3 opacity-45 font-sans block pb-2 text-lg'>Washington DC</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 pt-8">
                            <h5 className="text-2xl text-center font-sans text-color3">Are you a trainer and want to get more exposure by listing here ?</h5>
                            <div className="mt-6 flex justify-center pt-10 lg:mb-0 mb-6">
                                <button className="text-color3 border-2 border-color3 font-sanspy-2 h-10 px-4 hover:opacity-45 transition duration-300 w-full">
                                    GET LISTED
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-row justify-center ">
                            <Icon svgName="x-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="instagram-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="facebook-icon" width="40" height="40" className="mx-4 text-color1" />
                            <Icon svgName="whatsapp-icon" width="40" height="40" className="mx-4 text-color1" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer