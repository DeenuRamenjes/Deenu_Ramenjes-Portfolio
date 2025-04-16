import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {

    const frontendSkills=[
        {name:'HTML',icon:'https://img.icons8.com/color/48/000000/html-5.png'},
        {name:'CSS',icon:'https://img.icons8.com/color/48/000000/css3.png'},
        {name:'JavaScript',icon:'https://img.icons8.com/color/48/000000/javascript.png'},
        {name:'React',icon:'https://img.icons8.com/color/48/000000/react-native.png'},
        {name:'Angular',icon:'https://img.icons8.com/color/48/000000/angularjs.png'},
        {name:'TailwindCSS',icon:'https://img.icons8.com/color/48/000000/tailwindcss.png'},]

    // const frontendSkills=["HTML","CSS","JavaScript","React","TailwindCSS"]
    // const backendSkills=["Node.js","Express","MongoDB"]

    const backendSkills=[
        {name:'Node.js',icon:'https://img.icons8.com/color/48/000000/nodejs.png'},
        {name:'Express.js',icon:'https://img.icons8.com/color/48/000000/express.png'},
        {name:'MongoDB',icon:'https://img.icons8.com/color/48/000000/mongodb.png'},
    ]

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent items-center justify-center flex'>About Me</h2>
            <div className='rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>Passionate developer with expertise in building scalable web applications and creating innovative solutions</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        {/* <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((tech,key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div> */}
                        <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((skill, key) => (
                                <div key={key} className='flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                    <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {backendSkills.map((skill, key) => (
                                <div key={key} className='flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                    <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Education</h3>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>
                            <strong>B.Tech in Information Technology</strong> from <strong>CSI Institute of Technology</strong> (2021-2025)
                        </li>
                        <li>
                            Relevant Coursework: <strong>Full Stack Web Development</strong> with a focus on <strong>MEAN Stack</strong>
                        </li>
                    </ul>
                </div>
                <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                    <div className='space-y-4 text-gray-300 '>
                    <div className=''>
                        <h4><strong>React Frontend Intern</strong> at <strong>Srishti Innovative</strong> (Trivandrum, 1 Month)</h4>
                        <p>Designed and developed a responsive React frontend for an e-commerce platform, enhancing user experience and functionality.</p>
                    </div>

                    <div>
                        <h4><strong>Full Stack Developer Intern</strong> at <strong>Quantzi Infotech</strong> (Chennai, 3 Months)</h4>
                        <p>Contributed to multiple projects as a full-stack developer, handling both front-end and back-end development while optimizing performance and scalability.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About