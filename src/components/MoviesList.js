import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  const movies = props.movies.map(movie => 
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
  
  return (
    <div>
      <div className='col-md-4'>
        <ul>
          {movies}
        </ul>
      </div>
    </div>
  );
};
