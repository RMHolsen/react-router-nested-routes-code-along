import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
    // movies prop passed in from MoviesPage.js
    const renderMovies = Object.keys(movies).map((movieID) => (
        <Link key={movieID} to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
    ));

    return <div>{renderMovies}</div>
};

// this creates a page at the path /movies that includes a list of available movies, with links to their individual pages
// each page at the path /movies/movie-id-here, eg /movies/1, /movies/2, etc

export default MoviesList;