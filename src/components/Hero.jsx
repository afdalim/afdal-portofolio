import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { useEffect, useState } from 'react'

const ROLES = [
  'Information Systems Student',
  'Tech Enthusiast',
  'Digital Builder',
  'Creative Thinker',
]

/* =========================================================
   ROLE TYPER
========================================================= */

function RoleTyper() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, text.length + 1)

          setText(nextText)

          if (nextText === currentRole) {
            setIsDeleting(true)
          }
        } else {
          const nextText = currentRole.slice(0, text.length - 1)

          setText(nextText)

          if (nextText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % ROLES.length)
          }
        }
      },
      isDeleting
        ? 45
        : text === currentRole
          ? 1800
          : 65
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="inline-flex items-center">
      <span className="text-gray-200">
        {text}
      </span>

      <motion.span
        className="ml-1 h-[1.05em] w-[2px] bg-blue-300"
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.55,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </span>
  )
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  /* -------------------------------------------------------
     Mouse movement
  ------------------------------------------------------- */

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springX = useSpring(mouseX, {
    stiffness: 40,
    damping: 22,
    mass: 0.7,
  })

  const springY = useSpring(mouseY, {
    stiffness: 40,
    damping: 22,
    mass: 0.7,
  })

  const portraitX = useTransform(
    springX,
    [0, 1],
    [-12, 12]
  )

  const portraitY = useTransform(
    springY,
    [0, 1],
    [8, -8]
  )

  const glowX = useTransform(
    springX,
    [0, 1],
    [-25, 25]
  )

  const glowY = useTransform(
    springY,
    [0, 1],
    [-15, 15]
  )

  const contentX = useTransform(
    springX,
    [0, 1],
    [3, -3]
  )

  function handleMouseMove(event) {
    mouseX.set(
      event.clientX / window.innerWidth
    )

    mouseY.set(
      event.clientY / window.innerHeight
    )
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  /* -------------------------------------------------------
     Entrance animation
  ------------------------------------------------------- */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
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

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050507]
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main ambient glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[62%]
          top-[42%]
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
        "
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom ambient glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[-20%]
          right-[-10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-500/[0.035]
          blur-[120px]

          md:h-[500px]
          md:w-[500px]
        "
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          min-h-screen
          max-w-[1440px]
          px-5

          sm:px-8
          md:px-12
          lg:px-16
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
  variants={stagger}
  initial="hidden"
  animate="visible"
  style={{
    x: contentX,
  }}
  className="
    relative
    z-20
    flex
    min-h-screen
    flex-col
    justify-center

    -translate-y-8

    pt-28
    pb-[48vh]

    sm:-translate-y-10
    sm:pt-32
    sm:pb-[48vh]

    md:-translate-y-12
    md:pb-[40vh]

    lg:w-[58%]
    lg:-translate-y-10
    lg:pt-0
    lg:pb-0
  "
>

          {/* -------------------------------------------------
              LABEL
          ------------------------------------------------- */}

          <motion.div
            variants={fadeUp}
            className="
              mb-7
              flex
              items-center
              gap-3

              sm:mb-8
            "
          >
            <span className="
              h-px
              w-8
              bg-white/25

              sm:w-12
            " />

            <span className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-500

              sm:text-[10px]
            ">
              Information Systems Student
            </span>
          </motion.div>

          {/* -------------------------------------------------
              NAME
          ------------------------------------------------- */}

          <motion.h1
            variants={fadeUp}
            className="
              select-none
              text-[19vw]
              font-black
              leading-[0.78]
              tracking-[-0.075em]

              sm:text-[7.5rem]
              md:text-[9rem]
              lg:text-[10rem]
              xl:text-[11.5rem]
            "
          >
            <span className="block text-white">
              Afdal
            </span>

            <span className="
              block
              text-white/[0.22]
              transition-colors
              duration-700
              hover:text-white/[0.38]
            ">
              Indra<span className="text-white/80">.</span>
            </span>
          </motion.h1>

          {/* -------------------------------------------------
              CURRENT ROLE
          ------------------------------------------------- */}

          <motion.div
            variants={fadeUp}
            className="
              mt-7
              flex
              min-h-[22px]
              items-center
              gap-3

              sm:mt-8
            "
          >
            <span className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-600

              sm:text-[10px]
            ">
              Currently
            </span>

            <span className="
              font-mono
              text-xs

              sm:text-sm
            ">
              <RoleTyper />
            </span>
          </motion.div>

          {/* -------------------------------------------------
              DESCRIPTION
          ------------------------------------------------- */}

          <motion.p
            variants={fadeUp}
            className="
              mt-6
              max-w-[330px]
              text-sm
              leading-[1.8]
              text-gray-500

              sm:mt-8
              sm:max-w-md
              sm:text-base

              md:text-[17px]
            "
          >
            I explore the intersection of{' '}
            <span className="text-gray-300">
              technology
            </span>
            ,{' '}
            <span className="text-gray-300">
              creativity
            </span>
            , and{' '}
            <span className="text-gray-300">
              digital experiences
            </span>
            .
          </motion.p>

          {/* -------------------------------------------------
              CTA
          ------------------------------------------------- */}

          <motion.div
            variants={fadeUp}
            className="
              mt-8
              flex
              flex-wrap
              gap-3

              sm:mt-10
              sm:gap-4
            "
          >

            {/* Primary */}
            

            {/* Secondary */}
            <motion.a
              href="#about"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/15
                px-5
                py-3
                text-xs
                text-gray-400
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.03]
                hover:text-white

                sm:px-7
                sm:py-3.5
                sm:text-sm
              "
            >
              About me
            </motion.a>

          </motion.div>

        </motion.div>

        {/* ===================================================
            PORTRAIT
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            z-10

            h-[52vh]
            w-[115%]
            -translate-x-1/2

            sm:h-[58vh]
            sm:w-[105%]

            md:h-[72vh]
            md:w-[75%]

            lg:left-auto
            lg:right-[-2%]
            lg:h-[102vh]
            lg:w-[51%]
            lg:translate-x-0

            xl:right-0
            xl:h-[104vh]
            xl:w-[49%]
          "
        >

          {/* -------------------------------------------------
              ORBIT
          ------------------------------------------------- */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[35%]
              h-[230px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[-18deg]
              rounded-[50%]
              border
              border-white/[0.065]

              sm:h-[270px]
              sm:w-[470px]

              md:h-[310px]
              md:w-[540px]

              lg:h-[340px]
              lg:w-[600px]
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div
            className="
              absolute
              left-1/2
              top-[35%]
              h-[230px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[18deg]
              rounded-[50%]
              border
              border-white/[0.035]

              sm:h-[270px]
              sm:w-[470px]

              md:h-[310px]
              md:w-[540px]

              lg:h-[340px]
              lg:w-[600px]
            "
            animate={{
              rotate: [18, -342],
            }}
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* -------------------------------------------------
              PORTRAIT GLOW
          ------------------------------------------------- */}

          <motion.div
            className="
              absolute
              bottom-[4%]
              left-1/2
              h-[65%]
              w-[70%]
              -translate-x-1/2
              rounded-full
              bg-blue-400/[0.055]
              blur-[80px]

              sm:blur-[100px]

              md:blur-[120px]
            "
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* -------------------------------------------------
              DECORATIVE DOTS
          ------------------------------------------------- */}

          <motion.span
            className="
              absolute
              left-[14%]
              top-[28%]
              h-1.5
              w-1.5
              rounded-full
              bg-blue-300
              shadow-[0_0_16px_rgba(147,197,253,0.8)]
            "
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.span
            className="
              absolute
              right-[16%]
              top-[24%]
              h-1
              w-1
              rounded-full
              bg-white
              shadow-[0_0_14px_rgba(255,255,255,0.8)]
            "
            animate={{
              y: [0, 7, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          />

          {/* -------------------------------------------------
              PERSON
          ------------------------------------------------- */}

          <motion.div
            className="
              absolute
              bottom-0
              left-1/2
              h-full
              w-[94%]
              -translate-x-1/2

              sm:w-[90%]

              md:w-[94%]

              lg:w-[91%]

              xl:w-[88%]
            "
            style={{
              x: portraitX,
              y: portraitY,
            }}
          >

            <motion.img
              src="/afdal.png"
              alt="Afdal Indra Maulana"
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
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

                drop-shadow-[0_25px_70px_rgba(0,0,0,0.9)]
              "
            />

          </motion.div>

          {/* -------------------------------------------------
              BOTTOM LIGHT
          ------------------------------------------------- */}

          <motion.div
            className="
              absolute
              bottom-[5%]
              left-1/2
              h-px
              w-[62%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-200/15
              to-transparent
            "
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scaleX: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

        </div>

        {/* ===================================================
            BOTTOM LEFT — SOCIAL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="
            absolute
            bottom-7
            left-5
            z-30

            sm:left-8

            md:left-12

            lg:left-16
          "
        >

          <p className="
            mb-3
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-gray-700

            sm:text-[9px]
          ">
            Find me on
          </p>

          <div className="
            flex
            gap-5
            text-xs
            text-gray-600
          ">

            <a
              href="https://www.linkedin.com/in/afdal-indra-maulana-7103b5359?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/afdalim"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/afdalim_18"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Instagram
            </a>

          </div>

        </motion.div>

        {/* ===================================================
            BOTTOM CENTER — SCROLL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="
            pointer-events-none
            absolute
            bottom-6
            left-1/2
            z-30
            hidden
            -translate-x-1/2
            flex-col
            items-center

            md:flex
          "
        >

          <span className="
            mb-3
            text-[8px]
            uppercase
            tracking-[0.45em]
            text-gray-600
          ">
            Scroll
          </span>

          <div className="
            relative
            h-12
            w-px
            overflow-hidden
            bg-white/[0.08]
          ">

            <motion.span
              className="
                absolute
                left-0
                top-0
                h-5
                w-px
                bg-gradient-to-b
                from-transparent
                via-white/70
                to-transparent
              "
              animate={{
                y: [-20, 50],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

          </div>

        </motion.div>

        {/* ===================================================
            BOTTOM RIGHT — LOCATION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.15,
          }}
          className="
            absolute
            bottom-7
            right-5
            z-30
            hidden

            md:right-12
            md:block

            lg:right-16
          "
        >

          <div className="
            flex
            items-center
            gap-3
          ">

            <motion.span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-blue-300
                shadow-[0_0_10px_rgba(147,197,253,0.8)]
              "
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.15, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div>
              <p className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-gray-700
              ">
                Based in
              </p>

              <p className="
                mt-0.5
                text-xs
                text-gray-500
              ">
                Purwokerto, Indonesia
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero