import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const ROLES = ['Information Systems', 'Creative Thinker', 'Digital Builder', 'Tech Enthusiast']

const SCAN_LINES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: `${12 + i * 14}%`,
  delay: i * 0.4,
  dur: 3 + i * 0.3,
}))

/* ─────────────────────────────────────────
   ROLE TYPER
───────────────────────────────────────── */
function RoleTyper() {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = ROLES[idx]
    let timeout
    if (phase === 'typing') {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setPhase('holding'), 1600)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('erasing'), 500)
    } else if (phase === 'erasing') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 35)
      } else {
        setIdx((prev) => (prev + 1) % ROLES.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [display, phase, idx])

  return (
    <span className="inline-flex items-center gap-[2px]">
      <span className="text-blue-300">{display}</span>
      <motion.span
        className="inline-block h-[1.1em] w-[2px] bg-blue-300 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  )
}

/* ─────────────────────────────────────────
   GLITCH NAME
───────────────────────────────────────── */
function GlitchName({ children }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const run = () => {
      const wait = 3000 + Math.random() * 5000
      setTimeout(() => {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 300)
        run()
      }, wait)
    }
    run()
  }, [])

  return (
    <span className="relative inline-block">
      {children}
      {glitch && (
        <>
          <span
            className="pointer-events-none absolute inset-0 text-red-400/60"
            style={{ clipPath: 'inset(30% 0 50% 0)', transform: 'translateX(-3px)' }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="pointer-events-none absolute inset-0 text-cyan-400/60"
            style={{ clipPath: 'inset(50% 0 20% 0)', transform: 'translateX(3px)' }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
    </span>
  )
}

/* ─────────────────────────────────────────
   FUI CORNER BRACKETS
───────────────────────────────────────── */
function CornerBrackets() {
  const c = 'absolute w-4 h-4 border-white/25'
  return (
    <div className="pointer-events-none absolute inset-0">
      <span className={`${c} top-0 left-0 border-t border-l`} />
      <span className={`${c} top-0 right-0 border-t border-r`} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} />
    </div>
  )
}

/* ─────────────────────────────────────────
   STAT CHIP
───────────────────────────────────────── */
function StatChip({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <span className="text-xl font-bold leading-none text-white sm:text-2xl">{value}</span>
      <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500">{label}</span>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   CSS 3D WIREFRAME SPHERE
   Rendered with transform-style: preserve-3d
   6 meridian rings + 3 latitude rings = sphere
───────────────────────────────────────── */
function Scene3D({ springX, springY }) {
  const SIZE = 280

  /* Mouse-driven tilt on top of auto-rotation */
  const tiltX = useTransform(springY, [0, 1], [-18, 18])
  const tiltY = useTransform(springX, [0, 1], [18, -18])

  const meridians = [0, 30, 60, 90, 120, 150]
  const latitudes = [90, 45, 0]

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ width: SIZE, height: SIZE, perspective: `${SIZE * 2.6}px` }}
    >
      {/* Outer: mouse tilt */}
      <motion.div
        style={{
          width: SIZE,
          height: SIZE,
          position: 'relative',
          transformStyle: 'preserve-3d',
          rotateX: tiltX,
          rotateY: tiltY,
        }}
      >
        {/* Inner: continuous tumble rotation */}
        <motion.div
          style={{
            width: SIZE,
            height: SIZE,
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            rotateX: { duration: 52, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 34, repeat: Infinity, ease: 'linear' },
          }}
        >
          {/* Meridian rings (longitude lines) */}
          {meridians.map((angle, i) => (
            <div
              key={`m${i}`}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: `1px solid rgba(147,197,253,${0.06 + (i % 3) * 0.015})`,
                transform: `rotateY(${angle}deg)`,
                boxShadow: i === 0 ? '0 0 8px rgba(147,197,253,0.05)' : 'none',
              }}
            />
          ))}

          {/* Latitude rings (equator + parallels) */}
          {latitudes.map((angle, i) => (
            <div
              key={`l${i}`}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: `1px solid rgba(147,197,253,${0.04 + i * 0.02})`,
                transform: `rotateX(${angle}deg)`,
              }}
            />
          ))}

          {/* Glow dot at "north pole" */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 4,
              height: 4,
              marginTop: -2,
              marginLeft: -2,
              borderRadius: '50%',
              background: 'rgba(147,197,253,0.6)',
              boxShadow: '0 0 12px rgba(147,197,253,0.8)',
              transform: `translateZ(${SIZE / 2}px)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  /* ── MOUSE TRACKING ── */
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 18, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18, mass: 0.6 })

  /* Right panel 3D tilt */
  const panelRotateY = useTransform(springX, [0, 1], [7, -7])
  const panelRotateX = useTransform(springY, [0, 1], [-5, 5])

  /* Atmospheric glow parallax */
  const glow1X = useTransform(springX, [0, 1], [-35, 35])
  const glow1Y = useTransform(springY, [0, 1], [-22, 22])
  const glow2X = useTransform(springX, [0, 1], [22, -22])
  const glow2Y = useTransform(springY, [0, 1], [16, -16])

  /* Left text subtle counter-drift */
  const textX = useTransform(springX, [0, 1], [8, -8])
  const textY = useTransform(springY, [0, 1], [5, -5])

  function handleMouseMove(e) {
    mouseX.set(e.clientX / window.innerWidth)
    mouseY.set(e.clientY / window.innerHeight)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050508]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── NOISE TEXTURE ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── ATMOSPHERIC GLOWS — parallax on mouse ── */}
      <motion.div
        className="pointer-events-none absolute left-[55%] top-[40%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[140px] sm:h-[700px] sm:w-[700px]"
        style={{ x: glow1X, y: glow1Y }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-700/[0.05] blur-[130px] sm:h-[580px] sm:w-[580px]"
        style={{ x: glow2X, y: glow2Y }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute -left-20 top-[-5%] h-[350px] w-[350px] rounded-full bg-violet-800/[0.04] blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── GRID ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── DIAGONAL DIVIDER (desktop) ── */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <line
            x1="620" y1="0" x2="540" y2="900"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ════════════════════════════════════════
          MAIN WRAPPER
      ════════════════════════════════════════ */}
      <div className="relative mx-auto min-h-screen max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">

        {/* ══════════════════════════
            LEFT PANEL
        ══════════════════════════ */}
        <motion.div
          className="
            relative z-30
            flex flex-col
            pt-28 pb-8
            sm:pt-32 sm:pb-10
            md:pt-36 md:pb-12
            lg:w-[52%] lg:min-h-screen lg:justify-center lg:pt-0 lg:pb-0
          "
          style={{ x: textX, y: textY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* STATUS BADGE */}
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3 sm:mb-10">
            <span className="h-px w-8 bg-white/20 sm:w-12" />
            <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 sm:text-[11px]">
                Available for Collaboration
              </span>
            </div>
          </motion.div>

          {/* NAME */}
          <motion.h1
            variants={fadeUp}
            className="
              text-[17vw] font-black leading-[0.82] tracking-[-0.06em] text-white
              sm:text-[7.5rem] md:text-[9rem] lg:text-[10.5rem] xl:text-[12rem]
            "
          >
            <GlitchName>Afdal</GlitchName>
            <br />
            <span className="text-white/25">
              Indra<span className="text-white/80">.</span>
            </span>
          </motion.h1>

          {/* ROLE TYPER */}
          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3 sm:mt-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
              Student of
            </span>
            <span className="font-mono text-xs sm:text-sm">
              <RoleTyper />
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="
              mt-6 max-w-[300px] text-sm leading-relaxed text-gray-500
              sm:mt-8 sm:max-w-sm sm:text-base md:max-w-md
            "
          >
            I explore the intersection of{' '}
            <span className="text-gray-300">technology</span>,{' '}
            <span className="text-gray-300">creativity</span>,{' '}
            <span className="text-gray-300">organization</span>, and{' '}
            <span className="text-gray-300">digital experiences</span>.
          </motion.p>

          {/* STATS ROW */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-8 sm:mt-10">
            <StatChip value="3+" label="Projects" delay={1.2} />
            <span className="h-8 w-px bg-white/10" />
            <StatChip value="2+" label="Years Learning" delay={1.35} />
            <span className="h-8 w-px bg-white/10" />
            <StatChip value="∞" label="Curiosity" delay={1.5} />
          </motion.div>

          {/* CTA ROW */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            {/* Primary */}
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative flex items-center gap-3 overflow-hidden
                rounded-full bg-white px-6 py-3 text-xs font-semibold text-black
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                sm:px-8 sm:py-3.5 sm:text-sm
              "
            >
              <span className="relative z-10">About me</span>
              <span className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
              <motion.span
                className="absolute inset-0 bg-blue-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-2
                rounded-full border border-white/15 px-6 py-3 text-xs text-gray-400
                transition-all duration-300 hover:border-white/30 hover:text-white
                sm:px-8 sm:py-3.5 sm:text-sm
              "
            >
              Let&apos;s talk
            </motion.a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
            <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-gray-700">Find me on</p>
            <div className="flex gap-5 text-xs text-gray-600">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/afdal-indra-maulana-7103b5359?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                },
                { label: 'GitHub', href: 'https://github.com/afdalim' },
                { label: 'Instagram', href: 'https://www.instagram.com/afdalim_18' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LOCATION CARD — mobile & tablet (flows inline) */}
          <motion.div variants={fadeUp} className="mt-8 lg:hidden">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-3.5 backdrop-blur-md">
              <motion.span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]"
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-gray-600">Based in</p>
                <p className="mt-0.5 text-xs text-gray-300">Purwokerto, Indonesia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════
            RIGHT VISUAL PANEL
            Perspective wrapper (no motion — just positioning)
        ══════════════════════════ */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-1/2 z-10
            h-[56vh] w-[120%] -translate-x-1/2

            sm:h-[62vh] sm:w-[108%]
            md:h-[78vh] md:w-[68%]
            lg:left-auto lg:right-[-2%] lg:h-screen lg:w-[52%] lg:translate-x-0
            xl:right-0 xl:w-[50%]
          "
          style={{ perspective: '1100px' }}
        >
          {/* 3D tilt + entry animation */}
          <motion.div
            className="relative h-full w-full origin-center"
            style={{
              rotateX: panelRotateX,
              rotateY: panelRotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* PORTRAIT GLOW */}
            <motion.div
              className="
                absolute bottom-[5%] left-1/2 h-[60%] w-[70%]
                -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[90px] md:blur-[120px]
              "
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ★ CSS 3D WIREFRAME SPHERE ★ */}
            <Scene3D springX={springX} springY={springY} />

            {/* FUI SCAN LINES */}
            <div className="absolute inset-0 hidden overflow-hidden md:block">
              {SCAN_LINES.map((ln) => (
                <motion.div
                  key={ln.id}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
                  style={{ top: ln.top }}
                  animate={{ opacity: [0, 0.7, 0], scaleX: [0.3, 1, 0.3] }}
                  transition={{
                    duration: ln.dur,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: ln.delay,
                  }}
                />
              ))}
            </div>

            {/* ORBIT RINGS */}
            {[
              { w: 390, h: 230, rot: -18, dir: 1, dur: 9 },
              { w: 390, h: 230, rot: 18, dir: -1, dur: 11 },
              { w: 520, h: 330, rot: 72, dir: 1, dur: 16 },
            ].map((o, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.07]"
                style={{ width: o.w, height: o.h }}
                animate={{ rotate: [o.rot, o.rot + 8 * o.dir, o.rot] }}
                transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
            ))}

            {/* ORBITING DOTS */}
            {[
              { x: '18%', y: '27%', color: 'bg-blue-300', glow: 'rgba(147,197,253,0.9)', dur: 2.5, delay: 0 },
              { x: '82%', y: '30%', color: 'bg-white', glow: 'rgba(255,255,255,0.8)', dur: 3, delay: 0.7 },
              { x: '68%', y: '65%', color: 'bg-blue-300', glow: 'rgba(147,197,253,0.8)', dur: 2.8, delay: 1 },
            ].map((d, i) => (
              <motion.div
                key={i}
                className={`absolute h-1.5 w-1.5 rounded-full ${d.color}`}
                style={{ left: d.x, top: d.y, boxShadow: `0 0 18px ${d.glow}` }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
              />
            ))}

            {/* FUI LABELS */}
            {[
              { text: 'Technology', cls: 'left-[4%] top-[27%] flex-row', lineCls: 'w-10 h-px' },
              { text: 'Creative', cls: 'right-[18%] top-[10%] flex-col items-center', lineCls: 'w-px h-8' },
              { text: 'Organization', cls: 'bottom-[28%] left-[2%] flex-col', lineCls: 'w-px h-8' },
            ].map((lbl, i) => (
              <motion.div
                key={i}
                className={`absolute hidden items-center gap-2 md:flex ${lbl.cls}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.15 }}
              >
                <span className={`${lbl.lineCls} shrink-0 bg-white/[0.12]`} />
                <span className="text-[7px] uppercase tracking-[0.35em] text-gray-600">{lbl.text}</span>
              </motion.div>
            ))}

            {/* Digital Experience label */}
            <motion.div
              className="absolute right-[1%] top-[46%] hidden flex-col items-end gap-2 md:flex"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.65 }}
            >
              <span className="h-px w-10 bg-white/[0.1]" />
              <span className="max-w-[90px] text-right text-[7px] uppercase leading-relaxed tracking-[0.3em] text-gray-600">
                Digital Experience
              </span>
            </motion.div>

            {/* PORTRAIT */}
            <motion.div
              className="absolute bottom-0 left-1/2 h-full w-[88%] -translate-x-1/2 sm:w-[80%] md:w-[88%] lg:w-[82%] xl:w-[78%]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/afdal.png"
                alt="Afdal Indra Maulana"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_70px_rgba(0,0,0,0.95)]"
              />
            </motion.div>

            {/* FOREGROUND LIGHT */}
            <motion.div
              className="absolute bottom-[10%] left-1/2 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent blur-[1px]"
              animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.9, 1, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* FUI CORNER OVERLAY */}
            <div className="pointer-events-none absolute inset-4 hidden md:block">
              <CornerBrackets />
            </div>

            {/* HUD DATA CHIP */}
            <motion.div
              className="absolute right-4 top-6 hidden flex-col items-end gap-1 md:flex"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              <span className="text-[7px] uppercase tracking-[0.3em] text-blue-400/60">SYS.ONLINE</span>
              <div className="flex items-center gap-1.5">
                <motion.span
                  className="h-1 w-1 rounded-full bg-blue-400"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="font-mono text-[8px] text-blue-300/50">ID:AFIM-2026</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR — desktop only, non-blocking */}
        <motion.div
          className="pointer-events-none absolute bottom-8 left-16 z-20 hidden flex-col items-center gap-3 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <span className="text-[9px] uppercase tracking-[0.45em] text-gray-600">Scroll</span>
          <div className="relative h-14 w-px overflow-hidden bg-white/[0.08]">
            <motion.div
              className="absolute left-0 top-0 h-5 w-px bg-gradient-to-b from-transparent via-white/70 to-transparent"
              animate={{ y: [-20, 56] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* LOCATION CARD — desktop only, non-blocking */}
        <motion.div
          className="pointer-events-none absolute bottom-8 right-16 z-20 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-3.5 backdrop-blur-md">
            <motion.span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-gray-600">Based in</p>
              <p className="mt-0.5 text-xs text-gray-300">Purwokerto, Indonesia</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
