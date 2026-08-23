import { Link } from "react-router"
import NotFoundImage from "../assets/images/NotFound.png"

export default function WrongPath() {
  return (
  <main className="flex min-h-screen flex-col items-center px-6 pt-12 text-center md:pt-16">
  <div className="w-full max-w-2xl">
    <img
      src={NotFoundImage}
      alt=""
      aria-hidden="true"
      className="mx-auto w-full max-w-md"
    />

    <h1 className="mt-4 font-bebas text-3xl uppercase tracking-wide md:text-4xl">
      Page not found
    </h1>

    <p className="mx-auto mt-2 max-w-sm font-manrope text-sm leading-6 text-neutral-600 dark:text-neutral-400 md:text-base">
      Sorry, the page you're looking for doesn't exist or may have been moved.
    </p>

    <Link
      to="/"
      className="mt-5 inline-flex rounded-md bg-[#D98C5F] px-5 py-2.5 font-manrope text-sm font-semibold text-white transition-colors hover:bg-[#c77b50] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-4"
    >
      Back to Home
    </Link>
  </div>
</main>
  )
}