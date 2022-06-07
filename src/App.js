import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// API Key = 12aee098

const API_URL = 'https://www.omdbapi.com?apikey=12aee098';

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                 placeholder='Search for movies'
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                 src={SearchIcon}
                 alt='search'
                 onClick={() => searchMovie(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className = 'container'>
                        {movies.map((movie, index) => (
                            <MovieCard key={index} movie ={movie} />
                        ))}
                    </div>
                ) : (
                    <div className = 'empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>
    )
}

export default App;