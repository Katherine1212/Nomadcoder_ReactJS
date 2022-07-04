import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styled from '../style/Home.module.css';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);

  const getMovies = async () => {
    const json = await ((await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json());
    setMovie(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  /* 
    useEffect(() => {
      fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        .then((res) => res.json())
        .then((json) => {
          setMovie(json.data.movies);
          setLoading(false);
        });
    }, []);
 
      await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    .then((res) => res.json())
    .then((json) => {
      setMovie(json.data.movies);
      setLoading(false);
      */

  return (
    <div className={styled.wrapper}>
      {loading ? <h1>Loading...</h1> : (
        <div className={styled.container}>
          <ul className={styled.ul}>
            {movies.map((movie) => (<li className={styled.li} key={movie.id}>
              <Movie id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} /></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
