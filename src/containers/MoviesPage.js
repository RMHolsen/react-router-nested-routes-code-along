// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* Adding code to show something if no movie is selected, i.e. in the /movies path */}
    <Route exact path={match.url} render={() => <h3>Please choose a movie from the list.</h3>}/>

    {/* Adding the Route component renders the MovieShow when a movie is selected */}
    <Route path={`${match.url}/:movieId`} render={(routerProps) => <MovieShow {...routerProps} movies={movies} />} />

    {/* match.url comes from this.props via routerProps, hence 'match, movies' 
    passing in the movies={movies}, i.e. the bunch of movies objects, gives it the data 
    in order to pass the movie show page the correct URL to bring up the correct movie we have to change it from
    <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} /> } /> 
    to the above listed, i.e. using the render command*/}

  </div>
)

export default MoviesPage
