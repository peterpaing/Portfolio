import CertificateIcon from "./../assets/certificateIcon.png"
import {certificates} from "../data/portfolio"

export default function Certificates() {
  return (
    <section className="mx-auto w-11/12">
        <a href="/"
        className="mb-8 inline-flex items-center gap-3 font-manrope text-base text-neutral-600 transition-colors duration-300
         hover:text-[#B9683F] dark:text-neutral-400 rounded-md focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
        >← Back to Home Page</a>
        <div className="py-10 ">
      
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h3 className="font-bebas text-5xl uppercase tracking-wide md:text-6xl">
            Certificates
          </h3>

          <p className="mt-4 max-w-lg font-manrope text-sm leading-6 text-neutral-600 dark:text-neutral-400 md:text-base">
            A collection of my professional certifications that represent my
            skills, learning journey, and commitment to growth.
          </p>
        </div>

        <img
          src={CertificateIcon}
          alt=""
          className="hidden w-40 md:block lg:w-52"
        />
      </div>

     
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
            <article
            key={certificate.title}
            className="overflow-hidden rounded-2xl border border-neutral-300 bg-[#DDE2D8] transition-transform duration-300 hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-900"
            >
            <div className="aspect-[4/3] overflow-hidden bg-[#DDE2D8] p-3 dark:bg-neutral-800">
                <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="h-full w-full rounded-lg object-cover"
                />
            </div>

            
            <div className="p-5">
              <h4 className="font-manrope text-lg font-semibold text-neutral-900 dark:text-zinc-100">
                {certificate.title}
              </h4>

              <p className="mt-2 font-manrope text-sm text-neutral-500 dark:text-neutral-400">
                {certificate.month} {certificate.year}
              </p>

              
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-full border border-neutral-400 px-4 py-2.5 font-manrope text-xs font-semibold 
                uppercase tracking-wide text-neutral-900 transition-colors duration-300 hover:border-[#B9683F] hover:text-[#B9683F] dark:border-neutral-600 dark:text-zinc-100
                dark:hover:border-[#D3E97A] dark:hover:text-[#D3E97A] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
              >
                View Certificate
                <span aria-hidden="true">↗</span>
                </a>
                </div>
            </article>
            ))}
        </div>
        </div>
        </section>
  );
}