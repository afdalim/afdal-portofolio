import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journal', href: '#blog' },
  { name: 'CV', href: '#cv' },
]

const sectionIds = [
  'about',
  'achievements',
  'skills',
  'blog',
  'cv',
  'contact',
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* ================= SCROLL STATE ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* ================= ACTIVE SECTION ================= */
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id,
          )
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  /* ================= LOCK BODY ================= */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  /* ================= CLOSE MENU ================= */
  const closeMenu = () => {
    setMenuOpen(false)
  }

  /* ================= NAVIGATION ================= */
  const handleNavigation = () => {
    closeMenu()
  }

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-label="Main navigation"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-white/10 bg-black/80 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-10 lg:px-12">

          {/* =================================================
              LOGO
          ================================================= */}
          <motion.a
            href="#home"
            onClick={handleNavigation}
            whileHover={{
              opacity: 0.75,
            }}
            whileTap={{
              scale: 0.97,
            }}
            aria-label="Back to home"
            className="relative z-50 text-lg font-bold tracking-[-0.04em] text-white"
          >
            AFDAL
            <span className="text-gray-500">.</span>
          </motion.a>


          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">

            {links.map((link) => {
              const sectionId = link.href.replace(
                '#',
                '',
              )

              const isActive =
                activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavigation}
                  className={`group relative py-2 text-xs transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.name}

                  {/* Active line */}
                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive
                        ? '100%'
                        : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="absolute -bottom-0.5 left-0 h-px bg-white"
                  />
                </a>
              )
            })}

          </div>


          {/* =================================================
              DESKTOP CONTACT
          ================================================= */}
          <motion.a
            href="#contact"
            onClick={handleNavigation}
            whileHover={{
              x: 2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group hidden items-center gap-2 text-xs text-white lg:flex"
          >
            <span>Let's talk</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
              ↗
            </span>
          </motion.a>


          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}
          <div className="flex items-center gap-3 lg:hidden">

            {/* Let's talk */}
            <motion.a
              href="#contact"
              onClick={handleNavigation}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex items-center gap-2 text-xs text-white"
            >
              <span className="hidden sm:inline">
                Let's talk
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                ↗
              </span>
            </motion.a>


            {/* Hamburger */}
            <motion.button
              type="button"
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label={
                menuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 hover:border-white/40"
            >

              <div className="relative h-4 w-4">

                {/* Top */}
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: 45,
                          y: 6,
                        }
                      : {
                          rotate: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                  className="absolute left-0 top-0 h-px w-4 bg-white"
                />

                {/* Middle */}
                <motion.span
                  animate={{
                    opacity: menuOpen
                      ? 0
                      : 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="absolute left-0 top-[6px] h-px w-4 bg-white"
                />

                {/* Bottom */}
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: -45,
                          y: 6,
                        }
                      : {
                          rotate: 0,
                          y: 12,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                  className="absolute left-0 top-[6px] h-px w-4 bg-white"
                />

              </div>

            </motion.button>

          </div>

        </div>

      </motion.nav>


      {/* =================================================
          MOBILE MENU
      ================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: '-2%',
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: '-2%',
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-black lg:hidden"
          >

            {/* =================================================
                SUBTLE GRID
            ================================================= */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]">

              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '70px 70px',
                }}
              />

            </div>


            {/* =================================================
                AMBIENT GLOW
            ================================================= */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />


            {/* =================================================
                MENU CONTENT
            ================================================= */}
            <div className="relative flex min-h-full flex-col px-6 pb-8 pt-28 sm:px-10">

              {/* Navigation */}
              <nav className="flex flex-1 flex-col">

                {links.map((link, index) => {
                  const sectionId =
                    link.href.replace(
                      '#',
                      '',
                    )

                  const isActive =
                    activeSection ===
                    sectionId

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavigation}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                        duration: 0.35,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className={`group flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-300 sm:py-5 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <span className="text-[9px] text-gray-700 sm:text-[10px]">
                          {String(
                            index + 1,
                          ).padStart(2, '0')}
                        </span>

                        <span
                          className={`text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 sm:text-3xl ${
                            isActive
                              ? 'text-white'
                              : 'group-hover:text-white'
                          }`}
                        >
                          {link.name}
                        </span>

                      </div>

                      <motion.span
                        animate={{
                          x: isActive
                            ? 4
                            : 0,
                        }}
                        className={`text-lg transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-600 group-hover:text-white'
                        }`}
                      >
                        ↗
                      </motion.span>

                    </motion.a>
                  )
                })}

              </nav>


              {/* =================================================
                  MOBILE FOOTER
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                }}
                className="mt-10 flex items-end justify-between"
              >

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-gray-600">
                    Based in
                  </p>

                  <p className="text-xs text-gray-400">
                    Purwokerto, Indonesia
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={handleNavigation}
                  className="text-xs text-gray-400 transition hover:text-white"
                >
                  Let's talk ↗
                </a>

              </motion.div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar