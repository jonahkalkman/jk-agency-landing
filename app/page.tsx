export default function Home() {
  return (
    <main className="relative flex h-dvh w-full flex-col justify-center overflow-hidden">
      <div
        className="grain pointer-events-none fixed -inset-[10%]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-fit max-w-full flex-col items-start px-6 text-left">
        <h1
          aria-label="jk agency"
          className="relative flex items-center justify-start gap-[0.15em] font-display text-[clamp(2.5rem,4vw,11rem)] font-extrabold leading-none tracking-tighter lowercase"
        >
          <svg
            aria-hidden
            viewBox="0 0 356 226"
            fill="currentColor"
            className="logo-reveal h-[0.8em] w-auto shrink-0 translate-y-[0.077em]"
          >
            <path d="M96.1982 105.662C102.578 27.8412 159.575 2.7953 187.276 0V115.725C222.531 95.9347 226.029 30.329 223.371 0H340.051C319.905 105.662 261.565 124.81 223.371 135.852C292.54 131.491 340.611 194.134 356 226H223.371C220.349 185.748 198.048 161.429 187.276 154.301V190.779C187.276 210 169.5 226 156.217 226H1.34322C-9.40141 129.059 46.9519 105.383 76.4717 105.662V213.84C90.574 213.84 95.4986 204.336 96.1982 199.584V105.662Z" />
          </svg>
          <span className="text-[0.85em] tracking-tighter">
            <span className="word-reveal">agency</span>
          </span>
        </h1>

        <p
          style={{ "--delay": "1.3s" } as React.CSSProperties}
          className="fade-up relative mt-6 max-w-md text-base text-foreground/70 sm:text-lg"
        >
          We build and design digital products by combining technology with
          creativity. Building websites, apps, and digital experiences that help
          businesses grow.
        </p>

        <div
          style={{ "--delay": "1.5s" } as React.CSSProperties}
          className="fade-up mt-6"
        >
          <a
            href="mailto:info@jkagency.com"
            className="group relative inline-block overflow-hidden rounded-full border border-white px-8 py-3 text-sm leading-[1.4] text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-black"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative">Contact us</span>
          </a>
        </div>
      </div>
    </main>
  );
}
