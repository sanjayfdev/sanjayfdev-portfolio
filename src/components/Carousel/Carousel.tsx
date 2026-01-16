"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or use SVG icons

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Featured Cards</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
      >
        {cards.map((card) => (
          <div 
            key={card}
            className="min-w-[280px] md:min-w-[350px] aspect-[3/4] bg-slate-800 rounded-2xl snap-start flex flex-col justify-end p-6 text-white"
          >
            <span className="text-sm font-semibold text-blue-400">Category {card}</span>
            <h3 className="text-xl font-bold">Card Title {card}</h3>
            <p className="text-gray-400 text-sm mt-2">Description for card number {card} goes here.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;