import Reveal from './Reveal'

const skills = [
  {
    category: 'Development',
    items: ['Vue.js', 'Laravel', 'React', 'HTML', 'JavaScript'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'Laragon', 'Database Management'],
  },
  {
    category: 'Design',
    items: ['Canva', 'CapCut', 'Figma'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman']},
]

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500">
              03 — Skills
            </p>

            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              Technology I
              <br />
              <span className="text-gray-500">
                work with.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Skills */}
        <div className="border-t border-white/10">

          {skills.map((skill, index) => (
            <Reveal
              key={skill.category}
              delay={index * 0.1}
            >
              <div className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[240px_1fr] md:items-start">

                {/* Category */}
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
                    {skill.category}
                  </span>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-400 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Bottom statement */}
        <Reveal delay={0.3}>
          <div className="mt-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-500">
              I’m continuously learning and experimenting with new
              technologies, while focusing on building useful and
              meaningful digital experiences.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Skills