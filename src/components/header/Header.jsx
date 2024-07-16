import React from "react";
import logo from '../../assets/minecraft.webp';
import Button from "../button/Button";
import { Link } from "react-router-dom";
import listaUsuarios from "../../scripts/index.js";
import '../../index.css';

export const Header = () => {
    return (
        <>
            <div className="basicpage">
                <div className="content">
                    <Link to={'/'} > <img id="logo" src={logo} alt="" /> </Link>
                    <nav>
                        <div className="buttons">
                            <Button link='https://www.minecraft.net/es-es/download' text='JUEGOS ❰V❱'></Button>
                            <Button link='https://www.minecraft.net/es-es/catalog' text='TIENDA ❰V❱'></Button>
                            <Button link='https://www.minecraft.net/es-es/community' text='COMUNIDAD ❰V❱'></Button>
                            <Button link='https://help.minecraft.net/hc/en-us/categories/12617435230477' text='SOPORTE TECNICO ❰V❱'></Button>
                        </div>
                    </nav>
                    <div>
                        <Button ide='Bsecion' link='/signin' text='🔓CUENTA'></Button>
                    </div>
                </div>
            </div>
            <script type="module" src={listaUsuarios}></script>
        </>
    );
};
