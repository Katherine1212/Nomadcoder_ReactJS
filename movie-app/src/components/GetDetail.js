import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '../style/Detail.css';

const GetDetail = ({ coverImg, title, year, runtime, rating, summary, genres }) => {
    return (
        <div>
            <span>
                <img src={coverImg} />
            </span>
            <span className={styled.text_span}>
                <h2>{title} Release: {year}</h2>
                <h3>runtime: {runtime} hours</h3>
                <h3>rating: {rating} per 10.0</h3>
                <p>{summary}</p>
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                <button ><Link to="/">Go Back</Link></button>
            </span>
        </div>
    );
}

GetDetail.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default GetDetail;