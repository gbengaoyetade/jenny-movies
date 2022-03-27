export function getWatchedMovies() {
  const movies = localStorage.getItem("movies-watched");

  if (!movies) {
    return [];
  }

  return JSON.parse(movies);
}

export function getAllMovies() {
  const movies = localStorage.getItem("movies-all");

  if (!movies) {
    return [
      {
        title: "The Avengers",
        image:
          "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
        comment: "New York blows up in this!",
      },
      {
        title: "Dark City",
        image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
        comment: "This looks mysterious. Cool!",
      },
      {
        title: "Hot Tub Time Machine",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg",
        comment: "Someone said this was fun. Maybe!",
      },
    ];
  }
  try {
    return JSON.parse(movies);
  } catch (error) {
    // add error handler
  }
}
