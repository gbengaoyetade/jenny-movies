import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

// using css modules will help here so we have less css bugs
import "./App.css";

import { getWatchedMovies, getAllMovies } from "./utils/appUtils";

function App() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [comment, setComment] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const movies = getAllMovies();
    setMovies(movies);
  }, []);

  useEffect(() => {
    const watchedMovies = getWatchedMovies();
    setWatchedMovies(watchedMovies);
  }, []);

  // update movie list
  useEffect(() => {
    if (movies.length) {
      localStorage.setItem("movies-all", JSON.stringify(movies));
    }
  }, [movies]);

  useEffect(() => {
    if (watchedMovies.length) {
      localStorage.setItem("movies-watched", JSON.stringify(watchedMovies));
    }
  }, [watchedMovies]);

  function add(title, description, image) {
    const newMovie = { title, description, image };
    setMovies([...movies, newMovie]);
  }

  function addWatchedMovie(title, description, image) {
    const newMovie = { title, description, image };
    setWatchedMovies([...watchedMovies, newMovie]);
    const filteredMovies = movies.filter((movie) => movie.title !== title);
    setMovies(filteredMovies);
  }

  function removeWatchedMovie(title) {
    const filteredMovies = watchedMovies.filter(
      (movie) => movie.title !== title
    );
    setWatchedMovies(filteredMovies);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    add(title, imageURL, comment);
    setTitle("");
    setComment("");
    setImageURL("");
  };

  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <form onSubmit={handleSubmit}>
        <b>
          TITLE:
          <br />
          <input
            type="text"
            onChange={function (e) {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </b>
        <br />
        <b>
          IMAGE URL:
          <br />
          <input
            type="text"
            onChange={function (e) {
              setImageURL(e.target.value);
            }}
            value={imageURL}
          />
        </b>
        <br />
        <b>
          COMMENT:
          <br />
          <input
            type="text"
            onChange={function (e) {
              setComment(e.target.value);
            }}
            value={comment}
          />
        </b>
        <br />
        <input type="submit" value="ADD MOVIE" />
      </form>

      <h1>Watch list:</h1>
      <MovieList onAddWatchedMovie={addWatchedMovie} movies={movies} />
      <h1>Already watched:</h1>
      <MovieList
        movies={watchedMovies}
        onRemoveWatchedMovie={removeWatchedMovie}
      />
    </div>
  );
}

export default App;
