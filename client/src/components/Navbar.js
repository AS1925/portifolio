import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">ANITHA</div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-secondary hover:bg-dark-tertiary transition"
              aria-label="Toggle theme"
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;