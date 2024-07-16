import React from "react";
import Image from "../imagen/Image";
import Button from "../button/Button";
const Game = (props) => {
    return (
        <>
            <div className="game">
                <Image identificator={props.ide} link={props.image}></Image>
                <h2>{props.name}</h2>
                <div className="price-offert">
                    <h3>{props.price}</h3>
                    <Button link={props.link} text={props.text}></Button>
                </div>
            </div>
        </>
    )
}
export default Game
