import { motion } from 'motion/react'

function Hero() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const orbitTransition = {
    duration: 14,
    repeat: Infinity,
    ease: 'linear',
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-5 sm:px-6 md:px-10 lg:px-12"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Main blue aura */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[58%]
          top-[48%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.055]
          blur-[120px]
          sm:h-[550px]
          sm:w-[550px]
          md:h-[650px]
          md:w-[650px]
          md:blur-[150px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary violet atmosphere */}
      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          right-[-5%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-500/[0.035]
          blur-[120px]
          sm:h-[450px]
          sm:w-[450px]
          md:h-[550px]
          md:w-[550px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* =========================================================
          DECORATIVE GRID
      ========================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto min-h-screen max-w-7xl">

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          className="
            relative
            z-30
            w-full
            pt-28
            pb-[390px]

            sm:pt-32
            sm:pb-[420px]

            md:pb-36

            lg:w-[60%]
            lg:pt-28
            lg:pb-32
          "
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span className="h-px w-7 shrink-0 bg-white/30 sm:w-10" />

            <p
              className="
                text-[10px]
                uppercase
                leading-relaxed
                tracking-[0.2em]
                text-gray-400
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Information Systems Student
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="
              text-[18vw]
              font-bold
              leading-[0.76]
              tracking-[-0.08em]
              text-white

              sm:text-[7rem]
              md:text-[8rem]
              lg:text-[10rem]
              xl:text-[11rem]
            "
          >
            Afdal
            <br />

            <span className="text-gray-500">
              Indra<span className="text-white">.</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={fadeUp}
            className="
              mt-7
              max-w-[340px]

              sm:mt-10
              sm:max-w-xl

              md:mt-12
            "
          >
            <p className="text-[13px] leading-relaxed text-gray-400 sm:text-base md:text-lg">
              I explore the intersection of{' '}
              <span className="text-gray-200">
                technology
              </span>
              ,{' '}
              <span className="text-gray-200">
                creativity
              </span>
              ,{' '}
              <span className="text-gray-200">
                organization
              </span>
              , and{' '}
              <span className="text-gray-200">
                digital experiences
              </span>
              .
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
          >
            <motion.a
              href="#about"
              whileHover={{
                scale: 1.04,
                x: 2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                px-5
                py-3
                text-xs
                text-white
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/5

                sm:px-7
                sm:py-3.5
                sm:text-sm
              "
            >
              <span>About me</span>

              <span
                className="
                  text-sm
                  text-gray-500
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              >
                ↗
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* =======================================================
            RIGHT VISUAL / PORTRAIT
        ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            z-10

            h-[55vh]
            w-[115%]
            -translate-x-1/2

            sm:h-[60vh]
            sm:w-[105%]

            md:left-auto
            md:right-[-4%]
            md:h-[76vh]
            md:w-[63%]
            md:translate-x-0

            lg:right-[-3%]
            lg:h-[88vh]
            lg:w-[52%]

            xl:right-[-1%]
            xl:h-[94vh]
            xl:w-[50%]
          "
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: [18, 0, 18],
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.45,
              ease: 'easeOut',
            },
            scale: {
              duration: 1,
              delay: 0.45,
              ease: 'easeOut',
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.4,
            },
          }}
        >

          {/* =====================================================
              PORTRAIT AURA
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-[8%]
              left-1/2
              h-[65%]
              w-[70%]
              -translate-x-1/2
              rounded-full
              bg-blue-400/[0.07]
              blur-[70px]

              sm:blur-[90px]
              md:blur-[110px]
            "
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* =====================================================
              CENTRAL HALO
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[42%]
              h-[55%]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-300/[0.08]
              bg-blue-400/[0.015]
              shadow-[0_0_100px_rgba(59,130,246,0.04)]
            "
            animate={{
              scale: [1, 1.035, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* =====================================================
              ORBIT 1
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[40%]
              h-[230px]
              w-[390px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[-18deg]
              rounded-[50%]
              border
              border-white/[0.09]

              sm:h-[270px]
              sm:w-[470px]

              md:h-[310px]
              md:w-[520px]

              lg:h-[350px]
              lg:w-[590px]
            "
            animate={{
              rotate: [-18, -10, -18],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* =====================================================
              ORBIT 2
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[40%]
              h-[230px]
              w-[390px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[18deg]
              rounded-[50%]
              border
              border-blue-200/[0.06]

              sm:h-[270px]
              sm:w-[470px]

              md:h-[310px]
              md:w-[520px]

              lg:h-[350px]
              lg:w-[590px]
            "
            animate={{
              rotate: [18, 26, 18],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* =====================================================
              ORBIT 3
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[40%]
              hidden
              h-[330px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[72deg]
              rounded-[50%]
              border
              border-white/[0.035]

              md:block
              md:h-[390px]
              md:w-[610px]

              lg:h-[440px]
              lg:w-[680px]
            "
            animate={{
              rotate: [72, 78, 72],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* =====================================================
              ORBITING LIGHTS
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-[18%]
              top-[27%]
              h-1.5
              w-1.5
              rounded-full
              bg-blue-300
              shadow-[0_0_18px_rgba(147,197,253,0.9)]
              md:h-2
              md:w-2
            "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="
              absolute
              right-[13%]
              top-[30%]
              h-1
              w-1
              rounded-full
              bg-white
              shadow-[0_0_15px_rgba(255,255,255,0.8)]
              md:h-2
              md:w-2
            "
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          />

          <motion.div
            className="
              absolute
              right-[27%]
              top-[62%]
              hidden
              h-1.5
              w-1.5
              rounded-full
              bg-blue-300
              shadow-[0_0_20px_rgba(147,197,253,0.8)]
              md:block
            "
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />

          {/* =====================================================
              LABEL — TECHNOLOGY
          ===================================================== */}

          <motion.div
            className="
              absolute
              left-[4%]
              top-[27%]
              hidden
              items-center
              gap-3
              md:flex
            "
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
          >
            <span className="h-px w-10 bg-white/15" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
              Technology
            </span>
          </motion.div>

          {/* =====================================================
              LABEL — CREATIVE
          ===================================================== */}

          <motion.div
            className="
              absolute
              right-[18%]
              top-[12%]
              hidden
              flex-col
              items-center
              gap-2
              md:flex
            "
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.35,
            }}
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
              Creative
            </span>

            <span className="h-8 w-px bg-white/10" />
          </motion.div>

          {/* =====================================================
              LABEL — ORGANIZATION
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-[28%]
              left-[2%]
              hidden
              flex-col
              gap-2
              md:flex
            "
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
          >
            <span className="h-8 w-px bg-white/10" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
              Organization
            </span>
          </motion.div>

          {/* =====================================================
              LABEL — DIGITAL EXPERIENCE
          ===================================================== */}

          <motion.div
            className="
              absolute
              right-[1%]
              top-[48%]
              hidden
              flex-col
              items-end
              gap-2
              md:flex
            "
            initial={{
              opacity: 0,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.65,
            }}
          >
            <span className="h-px w-10 bg-white/10" />

            <span className="max-w-[90px] text-right text-[8px] uppercase leading-relaxed tracking-[0.3em] text-gray-600">
              Digital Experience
            </span>
          </motion.div>

          {/* =====================================================
              PERSON
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-0
              left-1/2
              h-full
              w-[88%]
              -translate-x-1/2

              sm:w-[80%]

              md:w-[88%]

              lg:w-[82%]

              xl:w-[78%]
            "
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/afdal.png"
              alt="Afdal Indra Maulana"
              className="
                absolute
                bottom-0
                left-1/2
                h-full
                w-auto
                max-w-none
                -translate-x-1/2
                object-contain
                object-bottom
                drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]
              "
            />
          </motion.div>

          {/* =====================================================
              FOREGROUND LIGHT
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-[12%]
              left-1/2
              h-px
              w-[65%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-300/20
              to-transparent
              blur-[1px]
            "
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* =======================================================
            BOTTOM INFORMATION
        ======================================================= */}

        <div className="absolute bottom-6 left-0 right-0 z-30 sm:bottom-8">

          {/* Social */}
          <motion.div
            className="hidden md:block"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-600">
              Find me on
            </p>

            <div className="flex gap-5 text-xs text-gray-500">
              <a
                href="https://www.linkedin.com/in/afdal-indra-maulana-7103b5359?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/afdalim"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.instagram.com/afdalim_18"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              LOCATION CARD
          ===================================================== */}

          <motion.div
            className="
              absolute
              right-0
              hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              py-4
              backdrop-blur-md
              md:block
            "
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.1,
            }}
          >
            <div className="flex items-center gap-3">

              <motion.span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-300
                  shadow-[0_0_12px_rgba(147,197,253,0.9)]
                "
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-gray-600">
                  Based in
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Purwokerto, Indonesia
                </p>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              SCROLL INDICATOR
          ===================================================== */}

          <motion.div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              hidden
              -translate-x-1/2
              flex-col
              items-center
              md:flex
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
          >
            <span className="mb-4 text-[9px] uppercase tracking-[0.45em] text-gray-500">
              Scroll
            </span>

            <div className="relative h-14 w-px overflow-hidden bg-white/10">

              <motion.div
                className="
                  absolute
                  left-0
                  top-0
                  h-5
                  w-px
                  bg-white/70
                "
                animate={{
                  y: [-20, 60],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero