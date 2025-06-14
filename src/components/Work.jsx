import React from 'react'
import health from '../assets/Health-connect.png'
import migrant from '../assets/Migrant -connect.png'
import ecogreen from '../assets/Ecogreen.png'
export const Work = () => {
  return (
    <div  >
      <section id='work' className="w-full min-h-screen bg-gray-200 flex flex-col items-center py-12 px-4">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 ">
          Projects
        </h2>

        <div className="h-1 w-3/5 bg-yellow-300  mx-auto mb-6"></div>


        <p className="text-gray-600 font-mono text-center max-w-2xl mb-12">
          Here you will find some of the personal  projects that I created with each project containing its own story.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <img
              src={health}
              alt="health Screenshot"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col items-start max-w-xl ">
            <h3 className="text-2xl font-bold mb-3">Health connect</h3>
            <p className="text-gray-700 mb-6 md:flex flex-col-6">
              Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
            </p>
            <button className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition">
              view
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <img
              src={migrant}
              alt="migrant Screenshot"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col items-start max-w-xl">
            <h3 className="text-2xl font-bold mb-3">Migrant connect</h3>
            <p className="text-gray-700 mb-6">
              Migrant Connect is a platform designed to assist migrants moving between states by addressing their essential needs such as housing, employment, healthcare, and local support services. It aims to simplify their transition and improve their quality of life by connecting them with vital resources and community networks.            </p>
            <button className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition">
              view
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <img
              src={ecogreen}
              alt="ecogreen Screenshot"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        
        <div className="flex flex-col mt-10 items-start max-w-xl">
          <h3 className="text-2xl font-bold mb-3">Ecogreen</h3>
          <p className="text-gray-700 mb-6">
            EcoGreen is a local shopping platform that connects users with nearby shops and department stores, offering quick delivery of daily essentials. It brings the convenience of online grocery shopping to local retailers, enabling easy ordering, real-time tracking, and fast doorstep delivery—supporting small businesses while providing customers with a seamless shopping experience.   </p>
          <button className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition">
            view
          </button>
        </div>
      </div>
    </section >


    </div>
  )
}
