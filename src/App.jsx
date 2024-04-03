// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const API_KEY = '755fcabf67msh6d0692b58149d5cp114384jsn553a1a9781e6'; // Your RapidAPI key
const API_URL = 'https://imdb8.p.rapidapi.com/auto-complete';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: 'game'
          },
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
          }
        });
        setMovies(response.data.d);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMovies([]);
        setLoading(false);
        setError('An error occurred while fetching data.');
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <div className="element">
      {movies.map((movie, index) =>{
        return(
          <div key={index} className="element-div">
          <img src={movie.i.imageUrl} alt="" />
          <p>{movie.l}</p>
          <p>{movie.y}</p>
          <p>{movie.s}</p>
          </div>
        )
      })}


      {/* <div>
        <h1>Movie List</h1>
        <div>
          {movies.map((movie, index) => (
            <Movie key={index} 
                title={movie.l}
                year={movie.y}
                image={movie.i.imageUrl} />
          ))}
        </div> */}


    </div>
  );
}

export default App;
