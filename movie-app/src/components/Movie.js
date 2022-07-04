import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '../style/Movie.module.css';
const Movie = ({ id, coverImg, title, summary, genres }) => {
    return (
        <div className={styled.container}>
            <Link to={`/movie/${id}`} className={styled.link}>
                <div className={styled.img}>
                    <img src={coverImg} />
                </div>
                <div className={styled.contents}>
                    <h2 className={styled.title}>{title}</h2>
                </div>
                <div className={styled.btn}>show more info ➡️</div>
            </Link>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;