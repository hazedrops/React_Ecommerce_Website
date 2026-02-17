function ProjectCard({ title, description, image, github, live, tech }) {
  return (
    <div className='bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300 hover:-translate-y-2'>
      {/* Project Image */}
      <img src={ image } alt={title} className='w-full h-60 object-fill' />

      <div className='p-6'>
        <h3 className='text-xl font-semibold text-blue-500 mb-3'>{title}</h3>

        <p className='text-gray-400 mb-4'>{description}</p>

        {/* Tech Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item) => (
            <span
              key={item}
              className='px-3 py-1 bg-slate-700 text-sm rounded-full'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex gap-4'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-sm'
          >
            GitHub
          </a>

          <a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-500 transition text-sm'
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
