import { projects } from "./../data/projects"
import { FaGithub } from "react-icons/fa"

export default function ProjectSection() {
  return (
    <section className="fade-up mx-auto w-11/12 max-w-6xl py-10 border-t-1 border-neutral-300 dark:border-neutral-700">
        <div className="mb-12">
        <h2 className="font-manrope text-2xl font-extrabold uppercase tracking-tight text-black dark:text-white md:text-3xl">
            Featured Projects
        </h2>

        <p className="mt-3 max-w-md font-manrope text-sm leading-5 text-neutral-500 dark:text-neutral-400">
            Here are some of the selected projects that showcase my passion for
            front-end development.</p>
        </div>
      {projects.map((project) => (
        <article
          key={project.id}
          className="grid gap-10 lg:grid-cols-2 md:items-center"
        >
        <div className=" w-full max-w-[600px] mx-auto overflow-hidden rounded-2xl border border-white/80
            bg-white/25 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-transparent
            dark:bg-neutral-900  dark:shadow-lg dark:backdrop-blur-none ">
            <img
                src={project.image}
                alt={`${project.title} preview`}
                className="block w-full rounded-lg object-cover shadow-lg"
            />
        </div>

        <div>
            <h3 className="font-manrope text-base font-semibold md:text-xl">{project.title}</h3>
            <p className="mt-4 font-manrope text-sm leading-6 text-neutral-500 dark:text-neutral-400">{project.description}</p>

            
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wide">Project Info</h4>

              <div className="border-y border-neutral-300 dark:border-neutral-700">
                <div className="flex justify-between border-b border-neutral-300 py-4 text-sm dark:border-neutral-700">
                  <span>Year</span>
                  <span className="text-neutral-500">{project.year} </span>
                </div>

                <div className="flex justify-between py-2 text-sm">
                  <span>Role</span>
                  <span className="text-neutral-500">{project.role}</span>
                </div>
              </div>
            </div>

            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="flex items-center gap-2 rounded-full bg-[#DDE2D8] px-3 py-2 text-xs transition-colors duration-300 dark:bg-neutral-800"
                >
                  {technology.icon && (
                    <technology.icon size={12} />
                  )}

                  <span>{technology.name}</span>
                </div>
              ))}
            </div>

            
            <div className="mt-6 flex gap-6">
              <a
                href={project.link.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-xs text-[#B9683F] underline underline-offset-4 transition-colors duration-300 hover:text-[#9E5331]"
              >
                LIVE DEMO ↗
              </a>

              <a
                href={project.link.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-manrope text-xs text-[#B9683F] underline underline-offset-4 transition-colors duration-300 hover:text-[#9E5331]"
              >
                SEE ON GITHUB <FaGithub/>
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}