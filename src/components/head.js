function Head({ search, setSearch }) {
  const searchPlaceholders = [
    "What are you craving?",
    "Coffee or chai?",
    "Type your mood…",
  ];

  console.log(search);
  return (
    <div className="navbar mb-20 sticky top-0">
      <nav className="bg-espresso p-4 shadow-lg ">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
          <h1 className="text-cream text-4xl font-pacifico ">
            Coffee and Chai
          </h1>

          <div className="relative border border-cream rounded-3xl bg-mocha p-3 pl-10 transition-transform duration-300 hover:scale-110 ">
            <input
              type="text"
              placeholder={
                searchPlaceholders[
                  Math.floor(Math.random() * searchPlaceholders.length)
                ]
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          <ul className="flex gap-6">
            <li>
              <a
                href="#home"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
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
                href="#contact"
                className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Head;
