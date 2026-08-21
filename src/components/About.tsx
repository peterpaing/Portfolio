export default function About(){
    return(
    <section className="mx-auto flex w-11/12 flex-col gap-8 border-t border-neutral-400 py-10 dark:border-neutral-700 md:flex-row md:items-center md:gap-12 lg:gap-20">
    <div className="md:w-2/6">
        <h4 className="font-bebas text-4xl uppercase tracking-wide md:text-5xl lg:text-6xl">
        About Me
        </h4>
    </div>

    <div className="md:w-4/6">
        <p className="font-manrope text-lg leading-7 text-neutral-900 dark:text-zinc-100 md:leading-9">
        I am a front-end developer passionate about building modern and
        user-friendly websites. Focused on creating accessible and meaningful
        web experiences.
        </p>

        <p className="mt-4 max-w-3xl font-manrope text-sm leading-5 text-neutral-600 dark:text-neutral-400 md:text-base md:leading-6">
        I enjoy working with React, TypeScript, Next.js, and Tailwind CSS. I’m
        passionate about solving problems, learning new technologies, and
        continuously improving my development skills. I care about accessibility
        and clean, responsive interfaces, while also exploring UI/UX design.
        Outside of coding, I enjoy playing football, photography, and gaming.
        </p>
    </div>
</section>
    )
}