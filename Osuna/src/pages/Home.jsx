import React from "react";
import { Header } from "../components/header/Header";
import { Content1 } from "../components/contenido/Content1";
import Content2 from "../components/contenido/Content2";
import listaUsuarios from "../scripts";
import '../index.css'
const Home = () => {
    return (
        <>
            <Header />
            <div className="todo">
                <Content1 />
                <Content2 />
            </div>
            <script src={listaUsuarios}></script>
        </>
    );
};

export default Home;

