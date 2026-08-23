import CertificateIcon from "./../assets/certificateIcon.png"
import { certificates } from "../data/portfolio"
import { IoArrowUpSharp } from "react-icons/io5"

export default function Certificates() {
  return (
    <section aria-labelledby="certificates-heading" className="mx-auto w-11/12">
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-3 rounded-md font-manrope text-base text-neutral-600 transition-colors duration-300 hover:text-[#B9683F] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6 dark:text-neutral-400"
      >
        <span aria-hidden="true">←</span>
        Back to Home Page
      </a>

      <div className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1
              id="certificates-heading"
              className="font-bebas text-5xl uppercase tracking-wide md:text-6xl"
            >
              Certificates
            </h1>

            <p className="mt-4 max-w-lg font-manrope text-sm leading-6 text-neutral-600 dark:text-neutral-400 md:text-base">
              A collection of my professional certifications that represent my
              skills, learning journey, and commitment to growth.
            </p>
          </div>

          <img
            src={CertificateIcon}
            alt=""
            aria-hidden="true"
            className="hidden w-40 md:block lg:w-52"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              aria-labelledby={`certificate-title-${certificate.title}`}
              className="overflow-hidden rounded-2xl border border-neutral-300 bg-[#DDE2D8] transition-transform duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#DDE2D8] p-3 dark:bg-neutral-800">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              <div className="p-5">
                <h2
                  id={`certificate-title-${certificate.title}`}
                  className="font-manrope text-lg font-semibold text-neutral-900 dark:text-zinc-100"
                >
                  {certificate.title}
                </h2>

                <p className="mt-2 font-manrope text-sm text-neutral-500 dark:text-neutral-400">
                  <time>
                    {certificate.month} {certificate.year}
                  </time>
                </p>

                <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title} certificate (opens in a new tab)`}
                className="mt-5 flex items-center justify-center gap-2 rounded-full border border-neutral-400 px-4 py-2.5 font-manrope text-xs font-semibold uppercase tracking-wide text-neutral-900 transition-colors duration-300 hover:border-[#B9683F] hover:text-[#B9683F] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6 dark:border-neutral-600 dark:text-zinc-100 dark:hover:border-[#D3E97A] dark:hover:text-[#D3E97A]"
                >
                View Certificate
                <IoArrowUpSharp
                aria-hidden="true"
                focusable="false"
                className="rotate-45 text-sm"
                />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}