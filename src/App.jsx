// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
//import Gallery component

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Setup the tour info

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      } // Get tour data when app starts
    };

    fetchTours();
  }, []);

  // If loading is true, display "Loading..."
  // If error, display an error message
  // Else, render Gallery with tour data
  if (loading) {
    return <h2>Loading...</h2>;
  } //shows if it is still loading

  if (error) {
    return <h2>Error: {error}</h2>;
  }   // show an error if there is error

  // If no tours are left, show a "Refresh" button to refetch the data
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2> {/* shows a message if no tours left */}
        <button onClick={() => window.location.reload()}>
          Refresh Tours
        </button> {/* button that reloads page */}
      </div>
    );
  }

  return (
    <div>
      <h1>Tours</h1>
      {/* Show Gallery and pass tours data */}
      <Gallery 
        tours={tours} 
        onRemove={(id) => {
          // created function to remove a tour
          const newTours = tours.filter(tour => tour.id !== id);
          setTours(newTours);
        }} 
      />
    </div>
  ); //Show all of the tours
};

export default App;
