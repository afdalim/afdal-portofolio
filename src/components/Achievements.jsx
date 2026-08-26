import { motion } from 'motion/react'
import Reveal from './Reveal'

const achievements = [
  {
    year: '2023 - Regional Achievement',
    title: '3rd Place',
    event:
      'Gladi Widya Ksatria Kendalisada KWARCAB BANYUMAS (GWKK)',
    category: 'Iklan Layanan Masyarakat Putra',
    description:
      'Received 3rd place in the Male category at the Gladi Widya Ksatria Kendalisada (GWKK) 2023.',
    details: [
      'Regional-level competition',
      'High School Student',
      'Scouting Competition',
      'On-site competition',
      'Banyumas Branch of the Scout Movement',
    ],
    certificate: '/sertifikat-gwkk-2023.pdf',
    orientation: 'landscape',
  },

  {
    year: '2023 - Regional Achievement',
    title: '3rd Place',
    event: 'Video Kreatif Sejarah Banyumas',
    category: 'Video Kreatif Sejarah Banyumas',
    description:
      'Secured 3rd place in the Video Creative Competition at Video Kreatif Sebanyumas 2023, held for SMA/SMK/MA students across Banyumas Regency.',
    details: [
      'Regional-level competition',
      'Banyumas Regional Participants',
      'Video Creative Competition',
      'Organizer: DINPORABUDPAR Banyumas Regency',
    ],
    certificate: '/sertifikat-videokreatif-2023.pdf',
    orientation: 'landscape',
  },

  {
    year: '2025 - Recognition',
    title: 'Financial Literacy',
    event: 'Pembelajaran Mandiri Literasi Keuangan 2025',
    category: 'Financial Literacy',
    description:
      'Completed an independent financial literacy program focused on developing essential knowledge and skills in personal financial management.',
    details: [
      'Independent learning',
      'Financial literacy',
      'Personal finance',
      'Certificate of completion',
    ],
    certificate: '/sertifikat-modulojk-2025.pdf',
    orientation: 'portrait',
  },

  {
    year: '2025 - National Recognition',
    title: 'Financial Literacy Ambassador',
    event:
      'OJK Penggerak Duta Literasi Keuangan Indonesia (OJK PEDULI)',
    category: 'Financial Literacy',
    description:
      'Appointed as a Financial Literacy Ambassador through the OJK Penggerak Duta Literasi Keuangan Indonesia (OJK PEDULI) program by the Financial Services Authority (OJK) in 2025.',
    details: [
      'National financial literacy program',
      'Financial Literacy Ambassador',
      'Financial Education',
      'Otoritas Jasa Keuangan (OJK)',
      'OJK PEDULI',
    ],
    certificate: '/sertifikat-sobatlikjaka-2025.pdf',
    orientation: 'landscape',
  },

  {
    year: '2025 - Regional Recognition',
    title: 'Finalist',
    event: 'Kakang Mbekayu Banyumas 2025',
    category: 'Duta Wisata Banyumas',
    description:
      'Selected as a Finalist in the Kakang Banyumas 2025 selection, representing Banyumas in the regional Duta Wisata program.',
    details: [
      'Regional-level selection',
      'Duta Wisata Banyumas',
      'Tourism & Cultural Ambassador',
      'Finalist',
      'Organized by DINPORABUDPAR Banyumas & PAKEMAS',
    ],
    certificate: '/sertifikat-kakangbms-2025.pdf',
    orientation: 'landscape',
  },

  {
    year: '2026 - National Achievement',
    title: 'Silver Medal',
    event:
      'Olimpiade Sains & Kesehatan Hari Pendidikan Nasional (OSPENAS)',
    category: 'Bahasa Indonesia — Mahasiswa',
    description:
      'Received a Silver Medal in the National Indonesian Language Science Olympiad (OSPENAS) 2026, competing in the university student category.',
    details: [
      'National-level competition',
      'University student category',
      'Indonesian Language',
      'Online competition',
    ],
    certificate: '/sertifikat-ospensas-2026.pdf',
    orientation: 'landscape',
  },
]

function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="mb-14 sm:mb-16 md:mb-20">

            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-8 bg-white/30 sm:w-10" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
                02 — Achievements
              </p>
            </div>

            <h2 className="text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Things I'm
              <br />
              <span className="text-gray-500">
                proud of.
              </span>
            </h2>

          </div>
        </Reveal>


        {/* ================= ACHIEVEMENTS ================= */}
        <div className="space-y-6">

          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.event}
              direction="up"
              delay={index * 0.1}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-5 transition-all duration-700 hover:border-white/20 hover:bg-white/[0.025] sm:rounded-3xl sm:p-8 md:p-12 lg:p-16"
              >

                {/* ================= AMBIENT GLOW ================= */}
                <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/[0.02] blur-[110px] transition-all duration-1000 group-hover:bg-white/[0.06]" />


                <div className="relative grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">

                  {/* ================= CONTENT ================= */}
                  <div className="min-w-0">

                    {/* Year */}
                    <Reveal
                      delay={0.15}
                      direction="left"
                    >
                      <div className="mb-7 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">

                        <span className="text-xs text-gray-500 sm:text-sm">
                          {achievement.year}
                        </span>

                      </div>
                    </Reveal>


                    {/* ================= TITLE ================= */}
                    <Reveal delay={0.25}>
                      <h3 className="break-words text-[2.8rem] font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        {achievement.title}
                      </h3>
                    </Reveal>


                    {/* ================= EVENT ================= */}
                    <Reveal delay={0.35}>
                      <h4 className="mt-5 max-w-3xl break-words text-lg font-medium leading-tight text-white sm:mt-6 sm:text-2xl md:text-3xl">
                        {achievement.event}
                      </h4>
                    </Reveal>


                    {/* ================= CATEGORY ================= */}
                    <Reveal delay={0.45}>
                      <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-lg">
                        {achievement.category}
                      </p>
                    </Reveal>


                    {/* ================= DESCRIPTION ================= */}
                    <Reveal delay={0.55}>
                      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-8 sm:text-base">
                        {achievement.description}
                      </p>
                    </Reveal>


                    {/* ================= DETAILS ================= */}
                    <Reveal delay={0.65}>
                      <div className="mt-7 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">

                        {achievement.details.map((detail) => (
                          <motion.span
                            key={detail}
                            whileHover={{ y: -2 }}
                            className="max-w-full rounded-full border border-white/10 px-3 py-1.5 text-[9px] leading-relaxed text-gray-500 transition-all duration-300 group-hover:border-white/20 group-hover:text-gray-300 sm:px-4 sm:py-2 sm:text-xs"
                          >
                            {detail}
                          </motion.span>
                        ))}

                      </div>
                    </Reveal>

                  </div>


                  {/* ================= CERTIFICATE ================= */}
                  <Reveal
                    delay={0.35}
                    direction="right"
                  >
                    <div className="flex w-full justify-center lg:justify-end">

                      <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate for ${achievement.event}`}
                        className={`group/certificate relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 lg:hover:-translate-y-2 lg:hover:border-white/25 ${
                          achievement.orientation === 'landscape'
                            ? 'max-w-[400px] sm:max-w-[430px]'
                            : 'max-w-[270px] sm:max-w-[300px]'
                        }`}
                      >

                        {/* ================= PREVIEW ================= */}
                        <div
                          className={`relative overflow-hidden bg-white ${
                            achievement.orientation === 'landscape'
                              ? 'aspect-[1.414/1]'
                              : 'aspect-[1/1.414]'
                          }`}
                        >

                          <iframe
                            src={`${achievement.certificate}#toolbar=0&navpanes=0&scrollbar=0`}
                            title={`${achievement.event} Certificate`}
                            className="pointer-events-none absolute inset-0 h-full w-full"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 lg:group-hover/certificate:bg-black/50">

                            <div className="translate-y-3 rounded-full border border-white/20 bg-black/60 px-5 py-3 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-500 lg:group-hover/certificate:translate-y-0 lg:group-hover/certificate:opacity-100">
                              View Certificate ↗
                            </div>

                          </div>

                        </div>


                        {/* ================= LABEL ================= */}
                        <div className="border-t border-white/10 bg-black px-3 py-3 sm:px-4 sm:py-4">

                          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-500 sm:text-[10px] sm:tracking-[0.2em]">
                            Official Certificate
                          </p>

                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white sm:text-sm">
                            {achievement.event}
                          </p>

                        </div>

                      </a>

                    </div>
                  </Reveal>

                </div>


                {/* ================= BOTTOM ACCENT ================= */}
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

              </motion.article>
            </Reveal>
          ))}

        </div>


        {/* ================= FOOTER ================= */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs sm:tracking-[0.25em]">
              A milestone worth remembering
            </p>

            <span className="text-xs text-gray-600 sm:text-sm">
              {String(achievements.length).padStart(2, '0')} achievement
              {achievements.length !== 1 ? 's' : ''}
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Achievements