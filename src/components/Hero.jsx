import React from 'react'
import arrow from '../assets/arrow-right.png'
import brush from '../assets/yellow-brush.svg'
export const Hero = () => {
    return (
        <div id='home' className=" bg-gray-100 flex justify-center p-48 h-screen  ">
            <div className="text-center font-mono tracking-wider md:pb-5 mt-24">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-950 mb-4">
                        HI there <br /> I am Dinesh Sathyamurthi
                    </h1>
                    <img
                        src={brush}
                        alt="brush stroke"
                        className="mx-auto  h-200 w-80 object-contain"
                    />
                </div>

                <p className="text-wrap min-w-96 text-lg mb-6">
                    A web developer focused on delivering impactful websites and applications that enhance product outcomes and business goals.
                </p>
                <div className='flex justify-center'>
                    <a href='#work' className="group flex items-center gap-2  text-black hover:bg-black hover:text-white border-2 border-black rounded-full px-4 py-2 transition">
                        Projects
                        <img
                            src={arrow}
                            alt="arrow icon"
                            className=" w-5 h-5 object-contain transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </div>



    )
}
