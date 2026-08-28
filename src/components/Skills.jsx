import Reveal from './Reveal'

const skills = [
  {
    category: 'Development',
    items: [
      {
        name: 'Vue.js',
        url: 'https://project-ecommerce-frontend.vercel.app/',
      },
      {
        name: 'Laravel',
        url: '',
      },
      {
        name: 'React',
        url: '',
      },
      {
        name: 'HTML',
        url: '',
      },
      {
        name: 'JavaScript',
        url: 'https://personalbudgeting-umber.vercel.app/login',
      },
    ],
  },
  {
    category: 'Database',
    items: [
      {
        name: 'MySQL',
        url: '',
      },
      {
        name: 'Laragon',
        url: '',
      },
      {
        name: 'Database Management',
        url: '',
      },
    ],
  },
  {
    category: 'Design',
    items: [
      {
        name: 'Canva',
        url: 'https://drive.google.com/drive/folders/1x0HPUMTPiRQOIjgWpEZm6pnktbVjoIVk?usp=sharing',
      },
      {
        name: 'CapCut',
        url: 'https://drive.google.com/drive/folders/1x0HPUMTPiRQOIjgWpEZm6pnktbVjoIVk?usp=sharing',
      },
      {
        name: 'Figma',
        url: 'https://www.figma.com/design/GOwJb0cRmZXICq8HNHifsf/Prototype-IMK---APK-Catatan-Android?m=auto&t=TwpMmeQmIwFWAZqP-1',
      },
    ],
  },
  {
    category: 'Tools',
    items: [
      {
        name: 'Git',
        url: '',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/afdalim',
      },
      {
        name: 'VS Code',
        url: '',
      },
      {
        name: 'Postman',
        url: '',
      },
    ],
  },
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

                  {skill.items.map((item) => {

                    const hasLink =
                      item.url &&
                      item.url.trim() !== ''

                    if (hasLink) {
                      return (
                        <a
                          key={item.name}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            px-5
                            py-3
                            text-sm
                            text-gray-400
                            transition-all
                            duration-300
                            hover:border-white/30
                            hover:bg-white/[0.04]
                            hover:text-white
                            hover:-translate-y-0.5
                          "
                        >
                          <span>
                            {item.name}
                          </span>

                          <span
                            className="
                              text-xs
                              text-gray-600
                              opacity-0
                              -translate-x-1
                              transition-all
                              duration-300
                              group-hover:translate-x-0
                              group-hover:text-white
                              group-hover:opacity-100
                            "
                          >
                            ↗
                          </span>
                        </a>
                      )
                    }

                    return (
                      <span
                        key={item.name}
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-white/10
                          px-5
                          py-3
                          text-sm
                          text-gray-400
                          transition-all
                          duration-300
                          hover:border-white/30
                          hover:bg-white/[0.04]
                          hover:text-white
                        "
                      >
                        {item.name}
                      </span>
                    )
                  })}

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