import { useState } from "react";

const searchPlaceholders = [
  "What are you craving?",
  "Coffee or chai?",
  "Type your mood…",
];

export default function SearchBar({
  setFilteredItems,
  needSearch,
  coffeeData,
}) {
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredProducts = coffeeData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredItems(filteredProducts);
    console.log(filteredProducts);
  };

  return (
    <>
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
    </>
  );
}
