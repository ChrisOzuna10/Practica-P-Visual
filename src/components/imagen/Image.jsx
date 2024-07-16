import React from "react";

const Image = (props) => {
    return (
        <>
            <img id={props.identificator}
                src={props.link}
            />
        </>
    );
};

export default Image;
