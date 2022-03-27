import React from 'react';

// using css modules will help here so we have less css bugs
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

// ideally, this should be a movies component as opposed to a function within this file.
const getMoviesComponents = (movies) => {
  // we can do without this variable by using a 'map' instead of a 'forEach'
  var components = [];

  // use map instead since we need to return a value on every iteration
  movies.forEach(function(movie) {
    components.push(
      // React needs a key prop so it can internally handle the elements in the list correctly
      <div className="all"> 
        <div>
          {/* every img element should have a "alt" to help describe the image being rendered*/}
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* a button element would do a better job here since we are not really navigating anywhere */}
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

// this code and the one in getMoviesComponents function are identical with very little changes
function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

// unused variable props
function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      {/* Input tags should be in a form element */}
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

// mixture of "const" and "var" in this file. It's always better to use "const" and "let" for consistency.
var title = '';
var image = '';
var comment = '';

export default App;
