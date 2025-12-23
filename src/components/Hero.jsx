import Me from "../assets/me1.png"

const Hero = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="relative lg:left-[-40px]">

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 text-hero-shadow animate-[fadeIn_0.8s_ease-out]">
              Deniz Can YILDIZ
            </h1>

            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 text-subtle-shadow animate-[fadeIn_0.8s_ease-out_0.2s_both]">
              Full Stack Developer
            </p>

            <p className="mt-10 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 animate-[fadeIn_1.2s_ease-out_0.4s_both]">
              I am a developer who brings products to life by combining strong engineering fundamentals with today's most advanced tools. I focus on designing clean, scalable, and maintainable software architectures that transform ideas into real, reliable, and user-focused products.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
              <a
                href="#tools"
                className="inline-flex items-center justify-center rounded-full
                           bg-black px-7 py-3 text-sm font-medium text-white
                           hover:bg-gray-800 hover:scale-105 transition-all duration-300
                           shadow-md hover:shadow-lg"
              >
                Tools I Use
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full
                           border border-gray-300 px-7 py-3 text-sm font-medium
                           text-gray-800 hover:border-gray-500 hover:scale-105
                           transition-all duration-300 hover:shadow-md"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-black
                           transition-all duration-300 hover:translate-x-1"
              >
                Get in touch →
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-[fadeIn_0.8s_ease-out_0.3s_both]">

            <div className="absolute w-[340px] h-[340px] rounded-full bg-gray-100 blur-3xl opacity-60" />

            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] group cursor-pointer">
              <img
                src={Me}
                alt="Deniz Can Yildiz"
                className="w-full h-full object-cover rounded-full
                           border-2 border-gray-200
                           shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]
                           transition-all duration-500 ease-out
                           group-hover:scale-105
                           group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]
                           group-hover:border-gray-300"
              />

              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  Available
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
