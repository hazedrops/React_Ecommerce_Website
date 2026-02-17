import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section id='projects' className='py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-12'>PROJECTS</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              live={project.live}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects