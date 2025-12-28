import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'

const HowtoReach = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Email client ile aç
    const mailtoLink = `mailto:dnzcany@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wider">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Sol taraf - İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:dnzcany@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <HiMail className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">EMAIL</h4>
                  <p className="text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                    dnzcany@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/dnzcany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <SiGithub className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">GITHUB</h4>
                  <p className="text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                    @dnzcany
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dnzcany/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <SiLinkedin className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">LINKEDIN</h4>
                  <p className="text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                    Deniz Can YILDIZ
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <HiLocationMarker className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h4>
                  <p className="text-gray-900 font-medium">Texas, USA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sağ taraf - İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Deniz Can YILDIZ. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dnzcany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dnzcany/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HowtoReach
