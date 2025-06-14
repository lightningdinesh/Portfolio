import React from "react";
import logo from '../assets/footer-name.png'
export const Footer = () => (
    <footer className="bg-gray-400 px-6 mt-4">
        <div className="max-w-7xl mx-auto ">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mt-4 mb-8">
                {/* Left: Contact Message */}
                <div className="mb-6 mt-4 md:mb-0">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Please feel free to get in<br className="hidden md:block" /> touch with me
                    </h2>
                </div>
   
                <div className="flex items-start mt-4 gap-3 mb-6 md:mb-0">
                    <span className="mt-1 text-blue-900">
                   
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 2C7 2 3 6 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-5-4-9-9-9z" />
                        </svg>
                    </span>
                    <div>
                        <div className="font-semibold text-gray-900">My Location</div>
                        <div className="text-gray-700 mt-5 text-md leading-tight">
                            Perundurai,Erode 638-052.<br /> <br />TN,India. 
                        </div>
                    </div>
                </div>
           
                <div className="flex items-start mt-4 gap-3">
                    <span className="mt-1 text-blue-900">
                      
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="M3 7l9 6 9-6" />
                        </svg>
                    </span>
                    <div>
                        <div className="font-semibold text-gray-900">For Contact:</div>
                        <div className=" mt-5 text-gray-700 font-bold text-md leading-tight">
                            webworksbydinesh@gmail.com<br /><br/>
                            contact@ +91 9750160507
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="border-t mb-6 " />


            <div>
                <h2>Build By</h2>
                <br/>
                <img src={logo} 
                className=' flex mx-auto'
                alt="footer-name" />

            </div>
        </div>
    </footer>
);
