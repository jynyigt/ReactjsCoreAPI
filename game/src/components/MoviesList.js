import React from 'react';
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import {Grid} from 'semantic-ui-react';
import {HashLoader} from 'react-spinners';
const MoviesList =({movies})=> {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );
    const moviesList = (
        <div>
            <HashLoader
             size={40}
            color={'#36bdb3'}
            loading={movies.fetching}
            />
            {
                movies.error.response
                    ? <h3>Hata var</h3>
                    :
                    <Grid stackable columns={2}>
                        {
                            movies.movies.map(movie => <MovieCard key={movie.movieId} movie={movie}/>)
                        }
                    </Grid>
                //movies.movies.map(movie=><div key={movie.movieId}>{movie.name}</div>)
            }
        </div>
    );
    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );

};
 MoviesList.propTypes={
 movies:PropTypes.shape({
     movies:PropTypes.array.isRequired
 }).isRequired
 }

export default MoviesList;