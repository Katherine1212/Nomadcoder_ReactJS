import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from '../style/Movie.module.css';
const Header = () => {
    return (
        <div className={styled.headerContainer}>
            <Link to={`/`} className={styled.link}>
                <h2 className={styled.header}>Moive Ranker 🎬</h2>
            </Link>
        </div>
    );
}

export default Header;