function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-dark-bg border-t border-dark-tertiary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © {currentYear} Anitha. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Crafted with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;