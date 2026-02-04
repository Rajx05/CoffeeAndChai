import { useEffect, useState } from "react";

const highlights = [
  {
    id: 1,
    title: "Freshly Roasted",
    description: "Roasted every week to lock in aroma and flavor.",
  },
  {
    id: 2,
    title: "Ethically Sourced",
    description: "Beans sourced directly from responsible farms.",
  },
  {
    id: 3,
    title: "Crafted with Care",
    description: "Every cup brewed with precision and passion.",
  },
];

export default function Highlights() {
  // index = currently visible item
  const [index, setIndex] = useState(0);
  // prevIndex = item that just exited
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-roast text-cream py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why You'll Love Us</h2>

        <div className="relative h-32 flex items-center justify-center overflow-hidden">
          {highlights.map((item, i) => (
            <div
              key={item.id}
              className={`absolute transition-all duration-700 ease-in-out ${
                i === index
                  ? "opacity-100 translate-x-0"
                  : i === prevIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src="/highlightsImages/CraftedWithCare.jpeg"
                alt="coffee"
                className="h-40 w-40"
              ></img>
              <h3 className="text-xl font-semibold text-caramel">
                {item.title}
              </h3>
              <p className="text-latte mt-2 max-w-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
