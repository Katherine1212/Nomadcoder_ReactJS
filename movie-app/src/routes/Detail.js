import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetDetail from '../components/GetDetail';
const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    // <GetDetail coverImg={movie.large_cover_image} title={movie.title} year={movie.year} runtime={movie.runtime} rating={movie.rating} summary={movie.summary} genres={movie.genres} />
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>
                {<GetDetail coverImg={details.large_cover_image} title={details.title} year={details.year} runtime={details.runtime} rating={details.rating} summary={details.summary} genres={details.genres} />}</div>}
        </div>
    );
}
export default Detail;
