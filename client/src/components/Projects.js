import { useEffect, useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      _id: "1",
      title: "Timetable management system",
      description: "An automated timetable scheduling system that efficiently assigns classes, teachers, and rooms while avoiding conflicts.",
      tech: ["HTML,CSS,Javascript", "MYSQL", "PHP", "Stripe"],
    },
    {
      _id: "2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Tailwind CSS",'Mongodb'],
      link1:"#",
      link: "https://github.com/AS1925/todolist.git",
    },
    {
      _id: "3",
      title: "Uniassist AI-Chatbot for university and library FAQ",
      description: "AI-powered chat application with natural language processing and user authentication.",
      tech: ["React", "Express", "OpenAI API", "Mongodb",'Node.js'],
      link1:"#",
      link: "https://github.com/AS1925/anipubot.git",
    },
    {
      _id: "4",
      title: "Mental Health Prediction Using Voice and text",
      description: "An AI-based system that analyzes user inputs and predicts mental health conditions using machine learning techniques.",
      tech: ["React", "Express", "OpenAI API", "Supabase",'Node.js'],    
    },
  ]);

  useEffect(() => {
    // Fetch from backend if needed
    // fetch("http://localhost:5000/api/projects")
    //   .then(res => res.json())
    //   .then(data => setProjects(data))
  }, []);

  return (
    <section id="projects" className="py-20 dark:bg-dark-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="card-hover group p-6 rounded-xl bg-dark-secondary border border-dark-tertiary hover:border-purple-500/50 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition">
                🚀
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-dark-bg text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 px-3 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-center text-sm font-semibold hover:bg-purple-500/40 transition"
                >
                  💻 Code 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;