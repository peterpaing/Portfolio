import { FaGithub, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"

export default function Footer() {
  const socialLinkStyles =
    "rounded-md transition-all duration-300 motion-reduce:transition-none motion-safe:hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto flex w-11/12 flex-col items-center justify-center gap-4 border-t border-neutral-400 py-10 dark:border-neutral-700"
    >
      <h2
        id="contact-heading"
        className="font-bebas text-3xl uppercase tracking-wide md:text-4xl lg:text-5xl"
      >
        Let’s <span className="text-[#D4804E]">connect</span>
      </h2>

      <p className="text-sm text-neutral-800 dark:text-neutral-400 md:text-base">
        Say hello at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pyaesonepaing104@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email to pyaesonepaing104@gmail.com (opens in a new tab)"
          className="rounded-md text-black underline decoration-[#B9683F] underline-offset-7 hover:text-[#B9683F] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-4 dark:text-white"
        >
          pyaesonepaing104@gmail.com
        </a>
      </p>

      <p className="text-sm leading-5 text-neutral-800 dark:text-neutral-400 md:text-base">
        For more info, here’s my{" "}
        <a
          href="/Pyae_Sone_Paing_Junior_Frontend_Developer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Pyae Sone Paing's resume PDF (opens in a new tab)"
          className="rounded-md text-black underline decoration-[#D4804E] underline-offset-3 hover:text-[#D4804E] focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-4 dark:text-white"
        >
          resume
        </a>
      </p>

      <nav aria-label="Social media links" className="mt-3 flex items-center gap-4 text-xl text-[#D4804E] text-shadow-md">
        <a
          href="https://github.com/peterpaing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Pyae Sone Paing's GitHub profile (opens in a new tab)"
          className={socialLinkStyles}
        >
          <FaGithub aria-hidden="true" focusable="false" />
        </a>

        <a
          href="https://www.tiktok.com/@guanqt?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Pyae Sone Paing's TikTok profile (opens in a new tab)"
          className={socialLinkStyles}
        >
          <FaTiktok aria-hidden="true" focusable="false" />
        </a>

        <a
          href="https://www.instagram.com/peter_is4_shar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Pyae Sone Paing's Instagram profile (opens in a new tab)"
          className={socialLinkStyles}
        >
          <FaInstagram aria-hidden="true" focusable="false" />
        </a>

        <a
          href="https://www.linkedin.com/in/pyae-sone-paing-06a283418/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Pyae Sone Paing's LinkedIn profile (opens in a new tab)"
          className={socialLinkStyles}
        >
          <FaLinkedinIn aria-hidden="true" focusable="false" />
        </a>

        <a
          href="https://t.me/guanqt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open a Telegram chat with Pyae Sone Paing (opens in a new tab)"
          className={socialLinkStyles}
        >
          <FaTelegram aria-hidden="true" focusable="false" />
        </a>
      </nav>
    </footer>
  )
}