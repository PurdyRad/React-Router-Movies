import React from 'react';
import {useHistory} from 'react-router-dom'

export default function MovieList(props) {
  // let history = useHistory();
  // let routeToDets = () => {
  //   history.push(`/movies/${id}`)
  // }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  let history = useHistory();
  let routeToDets = () => {
    history.push(`/movies/${id}`)
  }

  return (
    <div onClick={routeToDets} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
