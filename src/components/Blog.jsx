import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Reveal from './Reveal'

const journalItems = [
  {
    id: 'front-end-development',
    number: '01',
    year: '2025',
    category: 'Technology',
    title: 'Website Development',
    subtitle: 'Front-End Development',
    description:
      'A record of my learning and development in front-end website development, including the technologies and practical skills I have explored.',
    label: 'Technology',
    accent: '01',
    media: [
      '/journal/sertifikat-frontend.pdf',
      '/journal/website1.png',
      '/journal/website2.png',
      '/journal/website3.png',
      '/journal/website4.png',
    ],
  },

  {
    id: 'forum-anak',
    number: '02',
    year: '2023 - 2024',
    category: 'Organization',
    title: 'Forum Anak Banyumas',
    subtitle: 'Official Appointment',
    description:
      'Documentation of my involvement in Forum Anak Banyumas, including the official appointment document issued through the Banyumas Regency Government.',
    label: 'Organization',
    accent: '02',
    media: [
      '/journal/skfanmas.pdf',
      '/journal/fanmas1.jpeg',
      '/journal/fanmas3.jpeg',
      '/journal/fanmas2.jpeg',
    ],
  },

  {
    id: 'gmki-caretaker',
    number: '03',
    year: '2024 - 2025',
    category: 'Organization',
    title: 'GMKI Caretaker Team',
    subtitle: 'Tim Caretaker',
    description:
      'Documentation of my involvement as part of the Caretaker Team of GMKI, including the official appointment document.',
    label: 'Organization',
    accent: '03',
    media: [
    '/journal/skgmki.pdf',
    ],
  },

  {
    id: 'senat-litbang',
    number: '04',
    year: '2025 - 2026',
    category: 'Organization',
    title: 'Senat Mahasiswa — Research & Development',
    subtitle: 'Divisi Litbang',
    description:
      'Experience in the Research and Development Division of the student senate, contributing to organizational activities and internal development.',
    label: 'Organization',
    accent: '04',
    media: [
      '/journal/sksenat.jpg',
    ],
  },

  {
    id: 'panitia-paskah',
    number: '05',
    year: '2025',
    category: 'Personal',
    title: 'Easter Committee',
    subtitle: 'Chairperson',
    description:
      'A personal leadership experience as the chairperson of an Easter committee, involving coordination, planning, communication, and event execution.',
    label: 'Personal',
    accent: '05',
    media: [
      '/journal/ketuapanitia.pdf',
      '/journal/paskah1.jpeg',
      '/journal/paskah2.jpeg',
      '/journal/paskah3.jpeg',
      '/journal/paskah4.mp4',
    ],
  },

  {
    id: 'ldk-jaka-aptik',
    number: '06',
    year: '2026',
    category: 'Personal',
    title: 'LDK Jaka Aptik',
    subtitle: 'Participant',
    description:
      'Documentation of my participation in LDK Jaka Aptik Semarang as part of my personal and organizational development journey.',
    label: 'Personal',
    accent: '06',
    media: [
   '/journal/jakaaptik.pdf',
   '/journal/jakaaptik1.jpeg',
   '/journal/jakaaptik2.jpeg',
   '/journal/jakaaptik3.mp4',
    ],
  },

  {
    id: 'pkkmb',
    number: '07',
    year: '2025',
    category: 'Personal',
    title: 'PKKMB STIKOM Yos Sudarso',
    subtitle: 'Participant',
    description:
      'A documentation of my participation in the student orientation and campus introduction program.',
    label: 'Personal',
    accent: '07',
    media: [
      '/journal/pkkmb.pdf',
      '/journal/pkkmb1.jpeg',
      '/journal/pkkmb2.jpeg',
      '/journal/pkkmb3.mp4',
    ],
  },

  {
    id: 'binkar',
    number: '08',
    year: '2025',
    category: 'Personal',
    title: 'BINKAR STIKOM Yos Sudarso',
    subtitle: 'Participant',
    description:
      'Documentation of my participation in Binkar as part of my personal development and learning experiences outside the classroom.',
    label: 'Personal',
    accent: '08',
    media: [
      '/journal/binkar.pdf',
    ],
  },
]

const categoryFilters = ['All', 'Technology', 'Organization', 'Personal']

function getMediaType(path) {
  const extension = path.split('.').pop()?.toLowerCase()

  if (extension === 'pdf') return 'pdf'

  if (
    extension === 'mp4' ||
    extension === 'webm' ||
    extension === 'mov'
  ) {
    return 'video'
  }

  return 'image'
}

function Blog() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeMedia, setActiveMedia] = useState(0)

  const filteredItems =
    activeFilter === 'All'
      ? journalItems
      : journalItems.filter(
          (item) => item.category === activeFilter,
        )

  const openItem = (item) => {
    setSelectedItem(item)
    setActiveMedia(0)
  }

  const closeItem = () => {
    setSelectedItem(null)
    setActiveMedia(0)
  }

  const nextMedia = () => {
    if (!selectedItem?.media?.length) return

    setActiveMedia((current) =>
      current === selectedItem.media.length - 1
        ? 0
        : current + 1,
    )
  }

  const previousMedia = () => {
    if (!selectedItem?.media?.length) return

    setActiveMedia((current) =>
      current === 0
        ? selectedItem.media.length - 1
        : current - 1,
    )
  }

  useEffect(() => {
    if (!selectedItem) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeItem()
      }

      if (event.key === 'ArrowRight') {
        nextMedia()
      }

      if (event.key === 'ArrowLeft') {
        previousMedia()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  return (
    <>
      <section
        id="blog"
        className="border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADER ================= */}
          <Reveal>
            <div className="mb-12 sm:mb-16 md:mb-20">

              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <span className="h-px w-8 bg-white/30 sm:w-10" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
                  04 — Journal
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                <h2 className="max-w-4xl text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  Things I've
                  <br />
                  <span className="text-gray-500">
                    done & experienced.
                  </span>
                </h2>

                <p className="max-w-sm text-sm leading-relaxed text-gray-500 sm:text-base">
                  A visual archive of the things I have built,
                  joined, learned, and experienced along the way.
                </p>

              </div>

            </div>
          </Reveal>

          {/* ================= FILTER ================= */}
          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-2 sm:mb-12 sm:gap-3">

              {categoryFilters.map((filter) => {
                const active = activeFilter === filter

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-xs ${
                      active
                        ? 'border-white bg-white text-black'
                        : 'border-white/10 text-gray-500 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}

            </div>
          </Reveal>

          {/* ================= JOURNAL LIST ================= */}
          <motion.div
            layout
            className="border-t border-white/10"
          >
            <AnimatePresence mode="popLayout">

              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => openItem(item)}
                    className="group relative block w-full border-b border-white/10 py-7 text-left transition-all duration-500 sm:py-9 md:py-11"
                  >

                    {/* Hover background */}
                    <div className="pointer-events-none absolute inset-x-0 inset-y-2 -z-10 rounded-2xl bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="grid gap-5 sm:grid-cols-[55px_140px_1fr_90px] sm:items-center md:grid-cols-[70px_170px_1fr_110px]">

                      {/* Number */}
                      <span className="text-xs text-gray-700 transition-colors duration-300 group-hover:text-gray-400 sm:text-sm">
                        {item.number}
                      </span>

                      {/* Category */}
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.22em] text-gray-600 transition-colors duration-300 group-hover:text-gray-400 sm:text-[10px]">
                          {item.category}
                        </span>
                      </div>

                      {/* Main content */}
                      <div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-xl font-medium tracking-[-0.025em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl md:text-3xl">
                            {item.title}
                          </h3>

                          <span className="text-xs text-gray-700">
                            {item.year}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-600 sm:text-base">
                          {item.subtitle}
                        </p>

                        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {item.description}
                        </p>

                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center sm:gap-3">

                        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700 transition-colors duration-300 group-hover:text-gray-400 sm:text-[10px]">
                          Explore
                        </span>

                        <span className="text-xl text-gray-600 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                          ↗
                        </span>

                      </div>

                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

                  </button>
                </motion.div>
              ))}

            </AnimatePresence>
          </motion.div>

          {/* ================= FOOTER ================= */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
                Personal archive
              </p>

              <span className="text-xs text-gray-600 sm:text-sm">
                {String(filteredItems.length).padStart(2, '0')} entries
              </span>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeItem()
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
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-2xl sm:rounded-3xl"
            >

              {/* ================= MODAL HEADER ================= */}
              <div className="flex shrink-0 items-start justify-between gap-6 border-b border-white/10 px-5 py-5 sm:px-7 sm:py-6 md:px-9">

                <div className="min-w-0">

                  <div className="mb-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-[10px]">
                      {selectedItem.category}
                    </span>

                    <span className="text-gray-800">
                      /
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-[10px]">
                      {selectedItem.year}
                    </span>
                  </div>

                  <h3 className="truncate text-xl font-medium tracking-tight text-white sm:text-2xl md:text-3xl">
                    {selectedItem.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    {selectedItem.subtitle}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={closeItem}
                  aria-label="Close documentation"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-gray-500 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white sm:h-10 sm:w-10"
                >
                  ×
                </button>

              </div>

              {/* ================= MODAL CONTENT ================= */}
              <div className="min-h-0 flex-1 overflow-y-auto">

                {selectedItem.media.length > 0 ? (
                  <div className="flex min-h-full flex-col">

                    {/* Media */}
                    <div className="relative flex min-h-[280px] flex-1 items-center justify-center bg-black p-4 sm:min-h-[420px] sm:p-8 md:min-h-[520px]">

                     {getMediaType(
  selectedItem.media[activeMedia],
) === 'pdf' ? (
  <iframe
    src={`${selectedItem.media[activeMedia]}#toolbar=0&navpanes=0`}
    title={`${selectedItem.title} documentation`}
    className="h-[55vh] w-full max-w-5xl rounded-lg border border-white/10 bg-white sm:h-[65vh]"
  />
) : getMediaType(
    selectedItem.media[activeMedia],
  ) === 'video' ? (
  <video
  src={selectedItem.media[activeMedia]}
  controls
  playsInline
  preload="metadata"
  className="max-h-[65vh] w-full max-w-5xl rounded-2xl border border-white/10 object-contain"
>
  Your browser does not support the video tag.
</video>
) : (
  <img
    src={selectedItem.media[activeMedia]}
    alt={`${selectedItem.title} documentation ${activeMedia + 1}`}
    className="max-h-[65vh] max-w-full rounded-lg object-contain"
  />
)}

                      {/* Previous */}
                      {selectedItem.media.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={previousMedia}
                            aria-label="Previous documentation"
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-lg text-gray-400 backdrop-blur-md transition-all hover:border-white/25 hover:text-white sm:left-6"
                          >
                            ←
                          </button>

                          {/* Next */}
                          <button
                            type="button"
                            onClick={nextMedia}
                            aria-label="Next documentation"
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-lg text-gray-400 backdrop-blur-md transition-all hover:border-white/25 hover:text-white sm:right-6"
                          >
                            →
                          </button>
                        </>
                      )}

                    </div>

                    {/* Media navigation */}
                    {selectedItem.media.length > 1 && (
                      <div className="flex shrink-0 items-center justify-center gap-2 border-t border-white/10 px-5 py-4">
                        {selectedItem.media.map((_, mediaIndex) => (
                          <button
                            key={mediaIndex}
                            type="button"
                            onClick={() => setActiveMedia(mediaIndex)}
                            aria-label={`View documentation ${mediaIndex + 1}`}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              activeMedia === mediaIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                  </div>
                ) : (
                  /* ================= EMPTY DOCUMENTATION ================= */
                  <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[500px]">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-2xl text-gray-600">
                      +
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                      Documentation
                    </p>

                    <h4 className="mt-3 text-lg font-medium text-white sm:text-xl">
                      Documentation will be added here.
                    </h4>

                    <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                      Add photos, certificates, official documents,
                      or other visual records to this entry.
                    </p>

                  </div>
                )}

              </div>

              {/* ================= MODAL FOOTER ================= */}
              <div className="flex shrink-0 flex-col gap-4 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 md:px-9">

                <p className="max-w-xl text-xs leading-relaxed text-gray-600">
                  {selectedItem.description}
                </p>

                {selectedItem.media.length > 0 && (
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-gray-700">
                    {String(activeMedia + 1).padStart(2, '0')} /{' '}
                    {String(selectedItem.media.length).padStart(2, '0')}
                  </span>
                )}

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Blog