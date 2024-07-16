import React from "react";
import { Header } from "../components/header/Header";
import Registro from "../components/registro/Registro";
import '../index.css';

const Login = () => {
    return (
        <>
            <Header />
            <div className="formbody">
            <Registro />
            </div>

        </>
    );
}

export default Login;
