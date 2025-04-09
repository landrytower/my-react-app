
import React from "react";

const NavigationButtons = ({ onNext, onPrevious }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.5rem" }}>
      <button
        onClick={onPrevious}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
