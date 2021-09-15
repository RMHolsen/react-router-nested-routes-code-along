// yeah you know what this is meant to do
import React from 'react';

const MovieShow = ({match, movies}) => {
    return (
        <div>
            {/* OLD AND BUESTED: <h3>Movies Show Page</h3> */}
            <h3>{movies[match.params.movieId].title}</h3>
            // i.e. take the movies[number that matches the movie id in the params] and take the title from that movie object
        </div>
    );
};

export default MovieShow;