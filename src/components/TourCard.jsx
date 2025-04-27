//Task 2: Create TourCard component with remove tour functionality

// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked


import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  // Show a tour card
  const [readMore, setReadMore] = useState(false); 
  // tracka to see if user wants to read more 
  const safeInfo = info || "No information available"; 
  // if no info is available 

  return (
    <article className="Tour-card">
      {/* tour image */}
      <img src={image} alt={name} className="Tour-image" />

      <div className="tour-content">
        <div className="tour-header">
          {/* tour name and price */}
          <h3>{name}</h3>
          <span className="price">${price}</span>
        </div>

        <p>
          {/* read more button */}
          {readMore ? safeInfo : `${safeInfo.substring(0, 100)}...`}
          <button 
            onClick={() => setReadMore(!readMore)}
            className="read-more-btn"
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        {/* Button remove the tour */}
        <button 
          className="remove-btn" 
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;

