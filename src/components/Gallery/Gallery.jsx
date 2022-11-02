import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "redux/movies/moviesOperations";
import { getAllMovies, getMoviesByGenres } from "redux/movies/moviesSelectors";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { setGenre } from "redux/movies/moviesSlice";

export default function Gallery() {
    const dispatch = useDispatch();
    const movies = useSelector(getAllMovies);
    const moviesByGenre = useSelector(getMoviesByGenres);
    console.log(movies);
    const genresInfo = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

    useEffect(() => {
        
        dispatch(getMovies());
        
        // (async () => {
        //     const res = await getTrendMovie();
        //     console.log(res);
        // })();

    }, [dispatch])
    

  return (
      <>
          <select onChange={(e)=>{dispatch(setGenre(Number(e.target.value)))}} defaultValue={0}>
              <option value={0}>All</option>
              {genresInfo.map((genre) => {
              return <option key={genre.id} value={genre.id}>{genre.name}</option>
          })}
          </select>
          <ul style = {{display:"flex", flexWrap:"wrap", width:"100vw", gap:"20px", listStyle:'none'}}>
                {moviesByGenre.map(movie => {
                    return <li key = {movie.id}>
                        <Card style={{ width: '20rem', height: '22rem'}}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text style={{ height: '2rem', whiteSpace: "pre", overflow: "hidden", textOverflow: "ellipsis", fontSize: "14px" }}>
                                    {movie.overview}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </li>
                })}
            </ul>
      </>
  )
}


