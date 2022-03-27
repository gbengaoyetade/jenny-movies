import React from "react";

const MovieList = ({ onAddWatchedMovie, onRemoveWatchedMovie, movies }) => {
  const handleClick = onAddWatchedMovie || onRemoveWatchedMovie;

  return movies.map(({ image, title, comment }, index) => (
    <div
      className={onRemoveWatchedMovie ? "watched" : "all"}
      key={`${index}_${title}`}
    >
      <div>
        <img src={image} alt={title} height="100px" />
      </div>

      <button
        className="movie-watched"
        onClick={function () {
          handleClick(title, comment, image);
        }}
      >
        {title}
      </button>

      <br />
      <p>{comment}</p>
      <br />
      <br />
    </div>
  ));
};

export default MovieList;
