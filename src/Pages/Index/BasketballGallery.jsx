// SwipeGallery.jsx
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

export default function SwipeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="text-white px-4 py-2 bg-gray-700 rounded-lg">←</button>
        <button onClick={handleNext} className="text-white px-4 py-2 bg-gray-700 rounded-lg">→</button>
      </div>

      <motion.div
        className="flex gap-4"
        ref={containerRef}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 px-2"
            style={{ width: `${100 / images.length}%` }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
