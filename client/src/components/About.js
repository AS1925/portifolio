function About() {
  return (
    <section id="about" className="py-20 dark:bg-dark-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slide-up">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with a love for building beautiful, functional web applications. With expertise in modern JavaScript frameworks and backend technologies, I transform ideas into reality.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the dev community. I believe in continuous learning and staying updated with the latest industry trends.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              My mission is to create web solutions that are not only technologically sound but also provide exceptional user experiences.
            </p>

            <div className="pt-4">
              <a href="#" className="btn-primary inline-block">
                Download Resume
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;