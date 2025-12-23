import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

const HowtoReach = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12 relative z-10">
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wider">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's Work Together
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">

          <a
            href="mailto:dnzcany@gmail.com"
            className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-300 shadow-sm">
                <HiMail className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-xs">dnzcany@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/dnzcany"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors duration-300 shadow-sm">
                <SiGithub className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">GitHub</h3>
              <p className="text-gray-600 text-xs">@dnzcany</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dnzcany/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                <SiLinkedin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-gray-600 text-xs">Deniz Can YILDIZ</p>
            </div>
          </a>

        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 font-light">
            Deniz Can YILDIZ
          </p>
        </div>

      </div>
    </section>
  )
}

export default HowtoReach
