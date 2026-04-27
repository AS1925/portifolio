function Skills() {
  const skillCategories = [
    {
      category: "Programming Langauge",
      skills: ["Python", "Java"],
    },
    {
      category: "Frontend",
      skills: ["React", "HTML/CSS", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "SQL", "Data Modeling"],
    },
    {
      category: "Tools",
      skills: ["Git", "Postman", "VS Code",'Google Antigravity','Google stitch','Google AI Studio'],
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Teamwork", "Problem Solving",'Leadership','Time Management','Adaptability','Critical Thinking','Creativity','Decision Making'],
    },
  ];

  return (
    <section className="py-20 dark:bg-dark-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-xl bg-dark-bg border border-dark-tertiary hover:border-purple-500/50"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-dark-tertiary text-gray-300 text-sm border border-purple-500/20 hover:border-purple-500/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;