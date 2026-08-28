import Reveal from './Reveal'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen border-t border-white/10 px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <Reveal direction="left">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              01 — About Me
            </p>
          </div>
        </Reveal>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <Reveal>
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Building things,
                <br />
                <span className="text-gray-500">
                  exploring ideas.
                </span>
              </h2>

              {/* Decorative line */}
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-16 bg-white/30" />

                <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  AFDAL INDRA MAULANA
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <div className="space-y-8 text-base leading-relaxed text-gray-400 sm:text-lg">

            {/* Paragraph 1 */}
            <Reveal delay={0.15}>
              <p className="text-justify leading-relaxed transition-colors duration-300 hover:text-gray-300">
                Saya merupakan mahasiswa Sistem Informasi yang senang mengubah ide menjadi sesuatu yang dapat diwujudkan,
                baik melalui teknologi, karya kreatif, maupun berbagai pengalaman yang melibatkan orang lain.
                Dalam hidup ini, saya memegang satu prinsip sederhana bahwa “Kecil, muda, dan tua, hanya satu kali.” Maka dari itu, saya ingin menjalani setiap tahap kehidupan dengan
                sebaik-baiknya, berani melangkah, tidak takut mencoba hal baru, dan menjadi pribadi yang dapat memberikan
                manfaat bagi orang lain.
              </p>
            </Reveal>

            {/* Paragraph 2 */}
            <Reveal delay={0.3}>
              <p className="text-justify leading-relaxed transition-colors duration-300 hover:text-gray-300">
                Personal Portfolio &amp; Blog Website ini menjadi ruang untuk mendokumentasikan berbagai hal yang telah saya pelajari,
                kembangkan, dan kerjakan. Setiap proses di dalamnya menjadi bagian dari perjalanan saya untuk terus menemukan
                cara baru dalam berkarya dan memberikan sesuatu yang berarti. 
                Saya memahami bahwa proses belajar tidak hanya tentang memahami bagaimana sesuatu bekerja,
                tetapi juga tentang berani mencoba, mengambil peran, dan terus berkembang dari setiap pengalaman.
              </p>
            </Reveal>

            {/* Paragraph 3 */}
            <Reveal delay={0.45}>
              <p className="text-justify leading-relaxed transition-colors duration-300 hover:text-gray-300">
                Bagi saya, setiap kesempatan adalah ruang untuk belajar, setiap langkah adalah pengalaman,
                dan setiap karya adalah kesempatan untuk meninggalkan sesuatu yang bernilai.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.6}>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-white transition-all duration-300 hover:gap-5 hover:border-white"
                >
                  Let's connect

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About