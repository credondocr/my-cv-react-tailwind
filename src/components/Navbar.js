const Navbar = () => (
  <div className="max-w mx-auto sticky bg-primary  top-0 z-50">
    <header className="lg:px-16 px-6 color-white flex flex-wrap items-center lg:py-0 py-2 sticky  top-0 z-50">
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full mx-auto" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-white font-lato uppercase font-bold text-xs pt-4 lg:pt-0">
            <li>
              <a
                className="lg:p-4 py-4 px-0 block border-b-2 border-transparent text-primary hover:bg-dark-title hover:text-secondary lg:mb-0 mb-2"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-4 px-0 block border-b-2 border-transparent text-primary hover:bg-dark-title hover:text-secondary lg:mb-0 mb-2"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-4 px-0 block border-b-2 border-transparent text-primary hover:bg-dark-title hover:text-secondary lg:mb-0 mb-2"
                href="#tech-stack"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-4 px-0 block border-b-2 border-transparent text-primary hover:bg-dark-title hover:text-secondary lg:mb-0 mb-2"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-4 px-0 block border-b-2 border-transparent text-primary hover:bg-dark-title hover:text-secondary lg:mb-0 mb-2"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default Navbar;