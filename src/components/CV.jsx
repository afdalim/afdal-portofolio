import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal'

const cvFile = '/cv-afdal.pdf'

function CV() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Prevent background scrolling while CV is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <section
        id="cv"
        className="border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADER ================= */}
          <Reveal>
            <div className="mb-14 sm:mb-16 md:mb-20">

              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <span className="h-px w-8 bg-white/30 sm:w-10" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
                  05 — Curriculum Vitae
                </p>
              </div>

              <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
                A quick look
                <br />
                <span className="text-gray-500">
                  at my profile.
                </span>
              </h2>

            </div>
          </Reveal>

          {/* ================= CV CARD ================= */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition-all duration-700 hover:border-white/20 hover:bg-white/[0.025] sm:rounded-3xl sm:p-8 md:p-12 lg:p-16"
            >

              {/* Ambient glow */}
              <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/[0.025] blur-[110px] transition-all duration-1000 group-hover:bg-white/[0.06]" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

                {/* ================= INFORMATION ================= */}
                <div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
                    Afdal Indra Maulana
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl md:text-5xl">
                    Information Systems Student
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-6 sm:text-base md:text-lg">
                    Pribadi yang senang belajar, berkarya, mencoba hal baru, dan terus berkembang melalui setiap pengalaman.
                  </p>

                  {/* ================= QUICK INFO ================= */}
                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-10 sm:grid-cols-3 sm:gap-8">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
                        Education
                      </p>

                      <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                        S1 Information Systems
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
                        University
                      </p>

                      <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                        STIKOM Yos Sudarso
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
                        Location
                      </p>

                      <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                        Purwokerto, Indonesia
                      </p>
                    </div>

                  </div>

                </div>

                {/* ================= ACTIONS ================= */}
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                  {/* View CV */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group/view flex items-center justify-center gap-4 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    View CV

                    <span className="text-lg transition-transform duration-300 group-hover/view:translate-x-1 group-hover/view:-translate-y-1">
                      ↗
                    </span>
                  </button>

                  {/* Download CV */}
                  <a
                    href={cvFile}
                    download
                    className="group/download flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:gap-6 hover:bg-gray-200"
                  >
                    Download CV

                    <span className="text-lg transition-transform duration-300 group-hover/download:translate-y-1">
                      ↓
                    </span>
                  </a>

                  <p className="hidden text-center text-[10px] uppercase tracking-[0.2em] text-gray-600 lg:block">
                    PDF · Curriculum Vitae
                  </p>

                </div>

              </div>

              {/* ================= BOTTOM TAGS ================= */}
              <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:gap-x-8 sm:text-xs">
                  <span>Web Development</span>
                  <span>Information Systems</span>
                  <span>UI / Design</span>
                  <span>Organization</span>
                </div>

              </div>

              {/* Bottom hover accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-px w-0 bg-white"
                whileHover={{
                  width: '100%',
                }}
                transition={{
                  duration: 0.9,
                  ease: 'easeOut',
                }}
              />

            </motion.div>
          </Reveal>

          {/* ================= FOOTER NOTE ================= */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs sm:tracking-[0.25em]">
                Updated profile
              </p>

              <span className="text-xs text-gray-600 sm:text-sm">
                PDF · CV
              </span>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= CV MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-xl sm:p-5 md:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false)
              }
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
              }}
              className="relative flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-2xl sm:h-[92vh] sm:rounded-3xl"
            >

              {/* ================= MODAL HEADER ================= */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5 md:px-8">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600 sm:text-[10px]">
                    Curriculum Vitae
                  </p>

                  <p className="mt-1 text-sm text-white sm:text-base">
                    Afdal Indra Maulana
                  </p>
                </div>

                <div className="flex items-center gap-2">

                  {/* Download inside modal */}
                  <a
                    href={cvFile}
                    download
                    className="hidden rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-gray-400 transition-all hover:border-white/25 hover:text-white sm:block"
                  >
                    Download
                  </a>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close CV"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-gray-500 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white sm:h-10 sm:w-10"
                  >
                    ×
                  </button>

                </div>

              </div>

              {/* ================= PDF ================= */}
              <div className="min-h-0 flex-1 bg-black p-2 sm:p-4 md:p-6">

                <iframe
                  src={`${cvFile}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Afdal Indra Maulana Curriculum Vitae"
                  className="h-full w-full rounded-lg border border-white/10 bg-white"
                />

              </div>

              {/* ================= MODAL FOOTER ================= */}
              <div className="flex shrink-0 items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">

                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700 sm:text-[10px]">
                  PDF · Curriculum Vitae
                </span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-600 transition-colors hover:text-white"
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CV