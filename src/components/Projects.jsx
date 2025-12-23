import { SiGithub, SiGoogleplay } from 'react-icons/si'
import { HiExternalLink } from 'react-icons/hi'
import project1 from '../assets/project1.png'
import project22 from '../assets/project22.png'
import project3 from '../assets/project3.png'

const Projects = () => {
  const projects = [
    {
      title: "Resume AI",
      description: "An open-source AI resume evaluation system that provides personalized feedback across multiple resume quality dimensions. Built with privacy-first approach, it offers both online and offline capabilities with support for multiple AI providers.",
      image: project1,
      github: "https://github.com/dnzcany/resume-ai",
      liveUrl: "https://github.com/dnzcany/resume-ai/blob/main/public/Animation11.gif",
      tags: ["Python", "Next.js", "React", "FastAPI", "Docker", "Electron", "LLMs"]
    },
    {
      title: "My Notes App",
      description: "Designed, developed, and published an Android notes application on Google Play, achieving 100+ downloads, 30+ reviews, and a 5 star average rating, and open-sourced the codebase",
      image: project22,
      github: "https://github.com/dnzcany/MyNotesApp",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.denobaba.mynotes",
      tags: ["Kotlin", "Java", "MVVM", "RoomDatabase", "Coroutines"]
    },
    {
      title: "PDF AI Chat",
      description: "A local, privacy-first PDF chat assistant that lets you query and interact with your documents using AI. Built with Retrieval-Augmented Generation (RAG), it works completely offline with no external data sharing.",
      image: project3,
      github: "https://github.com/dnzcany/PDFAi-Rag-PdfChatBot",
      liveUrl: null,
      tags: ["Python", "LangChain", "FAISS", "HuggingFace", "Ollama"]
    }
  ]

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wider">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills in full-stack development and AI integration.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`relative group ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-3/2 border border-gray-300 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <SiGithub className="w-6 h-6 text-gray-900" />
                    </a>
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View on Google Play"
                      >
                        <SiGoogleplay className="w-6 h-6 text-gray-900" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View Live Demo"
                      >
                        <HiExternalLink className="w-6 h-6 text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <SiGithub className="w-5 h-5" />
                    View Code
                  </a>

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <SiGoogleplay className="w-5 h-5" />
                      Google Play
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <HiExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
