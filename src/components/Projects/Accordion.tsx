"use client";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 border border-gray-200 rounded-lg overflow-hidden">
      {/* Header / Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">What is a Hydration Error?</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content Body */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
            It occurs when the rendered HTML from the server doesn't match the 
            first render in the browser. Often caused by extensions like ColorZilla!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;