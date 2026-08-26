import { motion } from 'motion/react'
import Reveal from './Reveal'

function About() {
  const stats = [
    {
      value: '2024',
      label: 'Started University',
    },
    {
      value: '01',
      label: 'Silver Medal',
    },
    {
      value: '04+',
      label: 'Organization Roles',
    },
    {
      value: '∞',
      label: 'Things to Explore',
    },
  ]

  return (
    <section
      id="about"
      className="min-h-screen border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION LABEL ================= */}
        <Reveal direction="left">
          <motion.div
            className="mb-14 sm:mb-16 md:mb-20"
            whileInView={{ opacity: [0.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30 sm:w-10" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
                01 — About Me
              </p>
            </div>
          </motion.div>
        </Reveal>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT ================= */}
          <Reveal>
            <div>
              <h2 className="text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building things,
                <br />
                <span className="text-gray-500">
                  exploring ideas.
                </span>
              </h2>

              {/* Decorative line */}
              <motion.div
                className="mt-8 flex items-center gap-4 sm:mt-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
              >
                <span className="h-px w-12 bg-white/30 sm:w-16" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs sm:tracking-[0.25em]">
                  A little about me
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* ================= RIGHT ================= */}
          <div className="space-y-7 text-[15px] leading-relaxed text-gray-400 sm:space-y-8 sm:text-base md:text-lg">

            <Reveal delay={0.15}>
              <p className="transition-colors duration-300 hover:text-gray-300">
                Saya merupakan seorang mahasiswa Sistem Informasi 
                yang gemar mengeksplorasi teknologi, pengalaman digital, dan karya kreatif.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="transition-colors duration-300 hover:text-gray-300">
                Minat saya berada di antara bidang teknologi dan interaksi sosial, 
                mulai dari mengembangkan proyek digital hingga terlibat dalam proyek kreatif 
                dan berbagai kegiatan organisasi.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="transition-colors duration-300 hover:text-gray-300">
                Website ini adalah kumpulan hal-hal yang telah saya pelajari,
                bangun, alami, dan terus saya eksplor.
              </p>
            </Reveal>

            {/* ================= CTA ================= */}
            <Reveal delay={0.6}>
              <div className="pt-2 sm:pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm text-white transition-all duration-300 hover:gap-5 hover:border-white sm:text-base"
                >
                  Let's connect

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </motion.a>
              </div>
            </Reveal>

          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:mt-24 md:mt-32 md:grid-cols-4">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                className="group relative min-h-[120px] overflow-hidden bg-black p-5 transition-colors duration-500 hover:bg-white/[0.035] sm:min-h-[140px] sm:p-6 md:min-h-[160px] md:p-8"
              >

                {/* Hover glow */}
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Number */}
                <p className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="relative mt-2 max-w-[120px] text-[9px] uppercase leading-relaxed tracking-[0.15em] text-gray-600 transition-colors duration-300 group-hover:text-gray-400 sm:text-[10px] sm:tracking-[0.2em]">
                  {stat.label}
                </p>

                {/* Small index */}
                <span className="absolute bottom-4 right-4 text-[9px] text-gray-800 transition-colors duration-300 group-hover:text-gray-600 sm:bottom-5 sm:right-5">
                  0{index + 1}
                </span>
              </motion.div>
            ))}

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default About