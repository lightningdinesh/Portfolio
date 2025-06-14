import React from 'react';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'Bootstrap',
];

const Skills = () => {
  return (
    <section id='skills' className="bg-gray-100 flex  tracking-wider justify-center py-16 px-6 md:py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Skills
        </h2>
        <div className=" h-1 bg-yellow-300 rounded mx-auto mb-6">
        </div>
        <p className="text-center font-mono text-lg mb-12 px-4">
          As a frontend-focused developer experienced with the MERN stack, <br />
          I love building responsive, user-friendly interfaces and robust web applications.
          <br /><br />Here are some of the technologies and tools I work with:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <button
              key={skill}
              className="bg-white text-black border-2 border-black rounded-full px-6 py-2 transition font-medium shadow-lg"
              disabled
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
