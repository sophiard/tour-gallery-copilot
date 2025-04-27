// Task 3: Implement Gallery component that displays list of tours

// Create a gallery that maps over the tours array and renders TourCard for each

import React from "react";
import TourCard from "./TourCard"; 
// imports the TourCard component 

const Gallery = ({ tours, onRemove }) => {
  return (
    <section className="gallery">
      {/* Go through all tours and show a TourCard for each one */}
      {tours.map((tour) => (
        <TourCard 
          key={tour.id} 
          {...tour} 
          onRemove={onRemove} 
        />
      ))}
    </section>
  );
};

export default Gallery;