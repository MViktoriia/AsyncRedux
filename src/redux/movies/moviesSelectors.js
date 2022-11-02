export const getAllMovies = state => state.movies.items;
export const getGenre = state => state.movies.genre;
export const getMoviesByGenres = state => {
    const movies = getAllMovies(state);
    const genre = getGenre(state);

    return genre ? movies.filter(movie => { return movie.genre_ids.includes(genre) }) : movies;

};
