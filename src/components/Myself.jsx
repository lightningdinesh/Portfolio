import React from 'react'

export const Myself = () => {
    return (
       <section id='myself' className="min-h-screen flex justify-center font-mono bg-gray-200 py-12 px-2 sm:px-4 md:px-8">
  <div className="w-full max-w-3xl px-4 sm:px-8 md:px-12 lg:px-16 text-center py-10 sm:py-16 md:py-20 lg:py-24 bg-white/70 rounded-xl shadow">
    <h2 className="text-3xl sm:text-4xl tracking-wider font-semibold text-gray-900 mb-6">
      My Self
    </h2>
    <div className="h-1 w-16 bg-yellow-300 rounded mx-auto mb-6"></div>
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      I'm a Frontend Focused <span className="bg-yellow-300 font-semibold">web developer</span> building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.
    </p>
    <p className="text-base sm:text-lg text-gray-700 mb-6">
      I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming.
    </p>
    <p className="text-base sm:text-lg text-gray-700 mb-6">
      I'm open to <span className="brush-highlight font-semibold text-xl text-gray-950 bg-yellow-300">Job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.
    </p>
    <div className="mt-8 flex justify-center flex-wrap gap-4">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition"
      >
        LinkedIn
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition"
      >
        Instagram
      </a>
      <a
        href="mailto:your.email@example.com"
        className="bg-gray-900 text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 py-2 transition"
      >
        Contact
      </a>
    </div>
  </div>
</section>

    )
}
