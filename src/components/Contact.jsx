import Reveal from './Reveal'

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <Reveal>
          <div className="mb-14 sm:mb-16 md:mb-20">

            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
              06 — Contact
            </p>

            <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Let's make
              <br />
              <span className="text-gray-500">
                something together.
              </span>
            </h2>

          </div>
        </Reveal>


        {/* ================= CONTACT CONTENT ================= */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= INTRO ================= */}

          <Reveal direction="left">
            <div className="min-w-0">

              <p className="max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
                Whether it's a project, collaboration,
                organization, internship opportunity, or simply
                a conversation about technology and creativity,
                feel free to reach out.
              </p>

              <a
                href="mailto:afdalindram2006@gmail.com"
                className="
                  mt-7
                  inline-block
                  max-w-full
                  break-all
                  border-b
                  border-white/20
                  pb-2
                  text-base
                  text-white
                  transition-colors
                  duration-300
                  hover:border-white

                  sm:mt-8
                  sm:text-xl

                  md:text-2xl
                "
              >
                afdalindram2006@gmail.com
              </a>

            </div>
          </Reveal>


          {/* ================= LINKS ================= */}

          <Reveal direction="right">
            <div>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/afdal-indra-maulana-7103b5359?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-white/10 py-5 transition-all duration-300 hover:px-2 sm:py-6 sm:hover:px-4"
              >
                <span className="text-lg text-white sm:text-xl md:text-2xl">
                  LinkedIn
                </span>

                <span className="text-lg text-gray-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-xl">
                  ↗
                </span>
              </a>


              {/* GitHub */}

              <a
                href="https://github.com/afdalim"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-white/10 py-5 transition-all duration-300 hover:px-2 sm:py-6 sm:hover:px-4"
              >
                <span className="text-lg text-white sm:text-xl md:text-2xl">
                  GitHub
                </span>

                <span className="text-lg text-gray-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-xl">
                  ↗
                </span>
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/afdalim_18?igsi=MThkZjd1enUxZHc0YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-white/10 py-5 transition-all duration-300 hover:px-2 sm:py-6 sm:hover:px-4"
              >
                <span className="text-lg text-white sm:text-xl md:text-2xl">
                  Instagram
                </span>

                <span className="text-lg text-gray-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-xl">
                  ↗
                </span>
              </a>


              {/* TikTok */}

              <a
                href="https://www.tiktok.com/@af18jul06?_r=1&_t=ZS-99CGhRn6yJz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-t border-white/10 py-5 transition-all duration-300 hover:px-2 sm:py-6 sm:hover:px-4"
              >
                <span className="text-lg text-white sm:text-xl md:text-2xl">
                  TikTok
                </span>

                <span className="text-lg text-gray-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-xl">
                  ↗
                </span>
              </a>

            </div>
          </Reveal>

        </div>


        {/* ================= BOTTOM ================= */}

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-gray-600 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-xs sm:tracking-[0.2em]">

            <span>
              Available for opportunities
            </span>

            <span>
              Purwokerto, Indonesia
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Contact