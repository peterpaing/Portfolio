import { projects } from "../data/portfolio"
import { FaGithub } from "react-icons/fa"
import { IoArrowUpSharp } from "react-icons/io5"

export default function ProjectSection() {
  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="fade-up mx-auto w-11/12 max-w-6xl border-t border-neutral-400 py-10 dark:border-neutral-700"
    >
      <div className="mb-12">
        <h2
          id="featured-projects-heading"
          className="font-manrope text-2xl font-extrabold uppercase tracking-tight text-black dark:text-white md:text-3xl"
        >
          Featured Projects
        </h2>

        <p className="mt-3 max-w-md font-manrope text-base leading-6 text-neutral-600 dark:text-neutral-400">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className="flex flex-col gap-y-15">
        {projects.map((project) => (
          <article
            key={project.id}
            aria-labelledby={`project-title-${project.id}`}
            className="grid gap-10 md:items-center lg:grid-cols-2"
          >
            <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/80 bg-white/25 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors duration-300 dark:border-transparent dark:bg-neutral-900 dark:shadow-lg dark:backdrop-blur-none">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="block w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            <div>
              <h3
                id={`project-title-${project.id}`}
                className="mt-4 font-manrope text-lg font-semibold md:text-xl"
              >
                {project.title}
              </h3>

              <p className="mt-4 font-manrope text-base leading-6 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wide">
                  Project Info
                </h4>

                <dl className="border-y border-neutral-300 text-sm dark:border-neutral-700">
                  <div className="flex justify-between border-b border-neutral-300 py-4 dark:border-neutral-700">
                    <dt>Year</dt>
                    <dd className="text-neutral-600 dark:text-neutral-400">
                      {project.year}
                    </dd>
                  </div>

                  <div className="flex justify-between py-2">
                    <dt>Role</dt>
                    <dd className="text-neutral-600 dark:text-neutral-400">
                      {project.role}
                    </dd>
                  </div>
                </dl>
              </div>

              <ul
                aria-label={`Technologies used in ${project.title}`}
                className="mt-6 flex flex-wrap gap-2"
              >
                {project.technologies.map((technology) => {
                  const TechnologyIcon = technology.icon

                  return (
                    <li
                      key={technology.name}
                      className="flex items-center gap-2 rounded-full bg-[#DDE2D8] px-3 py-2 text-xs transition-colors duration-300 dark:bg-neutral-800"
                    >
                      {TechnologyIcon && (
                        <span aria-hidden="true">
                          <TechnologyIcon size={12} />
                        </span>
                      )}

                      <span>{technology.name}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 flex flex-wrap gap-6">
                <a
                  href={project.link.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} (opens in a new tab)`}
                  className="rounded-md font-manrope text-xs underline decoration-[#B9683F] underline-offset-4 hover:text-[#B9683F] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
                >
                  LIVE DEMO{" "}
                  <IoArrowUpSharp
                    aria-hidden="true"
                    focusable="false"
                    className="inline-block rotate-45 text-sm"
                  />
                </a>

                <a
                  href={project.link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                  className="flex items-center gap-2 rounded-md font-manrope text-xs underline decoration-[#B9683F] underline-offset-4 hover:text-[#B9683F] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
                >
                  SEE ON GITHUB
                  <FaGithub aria-hidden="true" focusable="false" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}