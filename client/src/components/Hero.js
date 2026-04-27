function Hero() {
  return (
    <section id="home" className="min-h-screen dark:bg-dark-bg pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Anitha</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Full Stack Developer & Web Enthusiast
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            I build modern, scalable web applications with beautiful interfaces and robust backends. Passionate about clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#projects" className="btn-primary text-center">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary text-center">
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-secondary hover:bg-dark-tertiary flex items-center justify-center transition text-xl">
              🐙
            </a>
            <a href="https://linkedin.com/in/anitha-j-b38523329/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-secondary hover:bg-dark-tertiary flex items-center justify-center transition text-xl">
              💼
            </a>
            <a href="mailto:anithajayavel2005@gmail.com" className="w-12 h-12 rounded-full bg-dark-secondary hover:bg-dark-tertiary flex items-center justify-center transition text-xl">
              ✉️
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;