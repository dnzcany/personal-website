import {
  SiPython, SiTypescript, SiJavascript, SiKotlin,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFastapi, SiAndroid, SiFirebase, SiElectron,
  SiDocker, SiGithub, SiPostgresql, SiMysql, SiMongodb,
  SiOpenai
} from 'react-icons/si'
import { TbApi, TbDatabase, TbBrain, TbCloudComputing } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Tools = () => {
  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      skills: [
        { name: "Python", icon: SiPython, desc: "Backend & AI/ML development", color: "text-blue-500" },
        { name: "TypeScript", icon: SiTypescript, desc: "Type-safe JavaScript for scalable apps", color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, desc: "Full-stack web development", color: "text-yellow-500" },
        { name: "Java", icon: FaJava, desc: "Enterprise applications", color: "text-red-600" },
        { name: "Kotlin", icon: SiKotlin, desc: "Android development", color: "text-purple-600" },
        { name: "SQL", icon: TbDatabase, desc: "Database queries & management", color: "text-blue-700" },
      ]
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      skills: [
        { name: "React", icon: SiReact, desc: "Building interactive UIs", color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, desc: "React framework for production", color: "text-black" },
        { name: "Node.js", icon: SiNodedotjs, desc: "JavaScript runtime for servers", color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, desc: "Fast Node.js web framework", color: "text-gray-700" },
        { name: "FastAPI", icon: SiFastapi, desc: "Modern Python web framework", color: "text-teal-600" },
        { name: "Android SDK", icon: SiAndroid, desc: "Native Android development", color: "text-green-500" },
        { name: "Firebase", icon: SiFirebase, desc: "Backend-as-a-Service platform", color: "text-yellow-600" },
        { name: "Electron", icon: SiElectron, desc: "Cross-platform desktop apps", color: "text-cyan-600" },
      ]
    },
    {
      title: "TOOLS & PLATFORMS",
      skills: [
        { name: "Docker", icon: SiDocker, desc: "Containerization platform", color: "text-blue-500" },
        { name: "Git & GitHub", icon: SiGithub, desc: "Version control & collaboration", color: "text-gray-800" },
        { name: "PostgreSQL", icon: SiPostgresql, desc: "Relational database system", color: "text-blue-700" },
        { name: "MySQL", icon: SiMysql, desc: "Popular relational database", color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, desc: "NoSQL database", color: "text-green-600" },
        { name: "REST APIs", icon: TbApi, desc: "RESTful API design & development", color: "text-indigo-600" },
        { name: "OpenAI API", icon: SiOpenai, desc: "AI/LLM integration", color: "text-green-500" },
        { name: "CI/CD", icon: TbCloudComputing, desc: "Continuous integration & deployment", color: "text-purple-600" },
      ]
    },
    {
      title: "EXPERTISE",
      skills: [
        { name: "API Design", icon: TbApi, desc: "RESTful & GraphQL architecture", color: "text-indigo-600" },
        { name: "Database Design", icon: TbDatabase, desc: "Schema design & optimization", color: "text-blue-600" },
        { name: "AI/LLM Integration", icon: TbBrain, desc: "OpenAI, Gemini & local LLMs", color: "text-violet-600" },
        { name: "Offline-First Systems", icon: TbCloudComputing, desc: "Sync & conflict resolution", color: "text-gray-700" },
      ]
    }
  ]

  return (
    <section id="tools" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wider">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I Use
          </h2>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xs font-bold text-gray-500 mb-8 tracking-wider">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-200
                                 hover:border-gray-300 hover:shadow-md transition-all duration-300
                                 cursor-pointer hover:-translate-y-1"
                    >
                      <div className={`p-3 rounded-xl bg-gray-50 ${skill.color}
                                      group-hover:bg-gray-100 transition-colors duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {skill.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Tools
