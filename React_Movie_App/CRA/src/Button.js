import PropTypes from 'prop-types';
import styled from './Button.module.css';
import { useState } from "react";
function Button({ text }) {
    const [counter, setValue] = useState(0);
    console.log("render");
    const onClick = () => setValue((prev) => prev + 1);
    return (
        <button className={styled.btn} onClick={onClick} >
            {text}
        </button>
    );
}

// 타입 지정
Button.prototype = {
    text: PropTypes.string.isRequired
}
export default Button;