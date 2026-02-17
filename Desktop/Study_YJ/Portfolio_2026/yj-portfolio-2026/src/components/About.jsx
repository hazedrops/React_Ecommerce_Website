import { skills } from "../data/skills.js"

function About() {
  return (
    <section id='about' className='py-24 bg-slate-800'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-6'>ABOUT ME</h2>

        <p className='text-gray-400 max-w-2xl'>
          I'm a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy building clean and interactive
          user interfaces.
        </p>

        <div className='mt-8 flex flex-wrap gap-4'>
          {skills.map((skill) => (
            <span
              key={skill}
              className='px-4 py-2 bg-slate-700 rounded-full text-sm hover:bg-blue-500 transition'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
