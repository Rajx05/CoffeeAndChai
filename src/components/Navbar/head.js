function Head({ children }) {
  return (
    <div>
      <nav className="bg-espresso p-4 shadow-lg lg:h-20 ">
        <div className="flex items-center justify-between md:flex md:justify-between md:items-center  max-w-7xl  ">
          {children}
        </div>
      </nav>
    </div>
  );
}

export default Head;
