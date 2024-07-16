import React from "react";
import Game from "../ofertas/Game";
import minecraft from '../../assets/cuadrosMinecraft.png'
import dungeons from '../../assets/MinecraftDungeons.png'
import legends from '../../assets/MinecraftLegends.png'
const Content2 = () => {
    return (
        <>
            <div className="content2">

                <h1>Ahorra hasta 50% en juegos de Minecraft</h1>
                <h3 id="offert">Los descuentos pueden variar según la región. Promoción por tiempo limitado; la disponibilidad
                    varía según la plataforma.</h3>

                <div className="game-offers">
                    <Game image={minecraft} name='Minecraft' price='359.99$' link='https://www.minecraft.net/es-es/about-minecraft' text='50% de descuento'></Game>
                    <Game ide='fondo2' name='Minecraft Dungeons'image={dungeons} price='359.99$' link='https://www.minecraft.net/es-es/about-dungeons' text='50% de descuento'></Game>
                    <Game ide='fondo3' name='Minecraft Legends'image={legends} price='359.99$' link='https://www.minecraft.net/es-es/about-legends' text='50% de descuento'></Game>
                </div>
            </div>

        </>
    )
}
export default Content2