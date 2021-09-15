import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    // normally this would be a fetch call and some json converted to objects? I think converted to objects.
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
          {/* When the path is loaded, the Route will call the function inside render and pass in the current information available about the route 
          including the URL path that caused the Route to render. 
          This is not possible with the regular component prop on Routes we've seen before. 
          IOW, the component MoviesPage receives information from the route (path), as well as the more conventional props (this.state.movies) 
           Using the spread operator will result in the creation of props for each key present inside the routerProps object*/}
        </div>
      </Router>
    );
  }
}

export default App;
