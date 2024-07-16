import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    const isExternal = props.link.startsWith('http');

    return (
        <>
            {isExternal ? (
                <a href={props.link}>
                    <button id={props.ide}>{props.text}</button>
                </a>
            ) : (
                <Link to={props.link}>
                    <button id={props.ide}>{props.text}</button>
                </Link>
            )}
        </>
    );
};

export default Button;
