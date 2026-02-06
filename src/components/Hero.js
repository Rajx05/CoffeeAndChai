import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 1,
    title: "Freshly Roasted",
    description: "Roasted every week to lock in aroma and flavor.",
    image: "/highlightsImages/freshlyRoasted.jpeg",
  },
  {
    id: 2,
    title: "Ethically Sourced",
    description: "Beans sourced directly from responsible farms.",
    image: "/highlightsImages/ethicallySourced.png",
  },
  {
    id: 3,
    title: "Crafted with Care",
    description: "Every cup brewed with precision and passion.",
    image: "/highlightsImages/CraftedWithCare.jpeg",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[700px] md:h-[500px] w-full overflow-hidden bg-espresso">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-start pt-24 md:justify-center md:pt-0 px-6 md:px-20 gap-8"
        >
          <div className="flex-1 w-full flex items-center justify-center m-4">
            <motion.img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full max-w-xs h-[250px] md:h-[350px] md:max-w-md object-cover rounded-2xl shadow-2xl border-4 border-mocha"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </div>
          <div className="flex-1 text-center md:text-left z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-pacifico text-caramel mb-4"
            >
              {slides[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cream text-lg md:text-xl max-w-lg mx-auto md:mx-0"
            >
              {slides[currentIndex].description}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-caramel text-espresso px-8 py-3 rounded-full font-bold hover:bg-darkCaramel transition-colors"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-caramel" : "bg-cream/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
