function Head({ handleInputChange, needSearch, search }) {
  const searchPlaceholders = [
    "What are you craving?",
    "Coffee or chai?",
    "Type your mood…",
  ];

  return (
    <div className="navbar">
      <nav className="bg-espresso p-4 shadow-lg ">
        <div className="flex items-center justify-between md:flex md:justify-between md:items-center  max-w-7xl mx-auto ">
          {/* Title */}
          <h1 className="text-cream text-2xl font-pacifico md:text-4xl ">
            Coffee & Chai
          </h1>

          {/* Search Bar */}

          {needSearch && (
            <div className="hidden md:block relative border border-cream rounded-3xl bg-mocha p-3 pl-10 transition-transform duration-300 hover:scale-110 w-1/4 lg:w-auto ">
              <input
                type="text"
                placeholder={
                  searchPlaceholders[
                    Math.floor(Math.random() * searchPlaceholders.length)
                  ]
                }
                value={search}
                onChange={handleInputChange}
                className="bg-mocha text-cream placeholder-cream w-full outline-none"
              ></input>
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cream pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          )}

          {/* Nav Links */}
          <ul className="hidden md:flex md:gap-6">
            <li>
              <a
                href="/"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="md:hidden text-cream hover:text-caramel transition-colors duration-300">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Head;
