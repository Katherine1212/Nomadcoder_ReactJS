import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '../style/Detail.module.css';

const GetDetail = ({ coverImg, title, year, runtime, rating, summary, genres }) => {
    return (
        <div className={styled.container}>
            <button className={styled.btn}><Link to="/" className={styled.a_href}>Go Back</Link></button>
            <div className={styled.wrapper}>
                <div className={styled.img_div}>
                    <img src={coverImg} />
                </div>
                <div className={styled.text_div}>
                    <h2 className={styled.contents}>{title} ({year})</h2>
                    <h3 className={styled.contents}>Runtime: {runtime} hours</h3>
                    <h3 className={styled.contents}>Rating: {rating} per 10.0</h3>
                    <h3 className={styled.contents}>Summary</h3>
                    <p className={styled.contents}>{summary}</p>
                    <h3 className={styled.contents}>genres</h3>
                    <ul className={styled.ul}>
                        {genres.map((g) => (
                            <li key={g}>{g}&nbsp;</li>
                        ))}
                    </ul>
                </div>
            </div>
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

/*

<div className={styled.container}>
            <button className={styled.btn}><Link to="/" className={styled.a_href}>Go Back</Link></button>
            <div className={styled.wrapper}>
                <div className={styled.img_div}>
                    <img src={coverImg} />
                </div>
                <div className={styled.text_div}>
                    <h2>{title} ({year})</h2>
                    <h3>Runtime: {runtime} hours</h3>
                    <h3>Rating: {rating} per 10.0</h3>
                    <p>{summary}</p>
                    <ul>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
*/