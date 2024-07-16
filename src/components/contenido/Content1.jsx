import React from "react";
import Image from "../imagen/Image";
import minecraft from '../../assets/cuadrosMinecraft.png'
import minecraftAniversay from '../../assets/quince.avif'
import '../../index.css'

export const Content1 = () => {
    return (
        <>
            <div className="content1">
                <div className="image-wrapper">
                    <Image identificator='imagen1' link={minecraft}></Image>
                </div>
                <div className="image-wrapper">
                    <Image identificator='imagen2' link={minecraftAniversay}></Image>
                </div>
            </div>
        </>
    )
}