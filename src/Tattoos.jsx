import React from "react";
import { useNavigate } from "react-router-dom";

import enjoyImg from "./assets/images/tattoos/enjoy.png";
import enjoyImg2 from "./assets/images/tattoos/enjoy2.png";
import enjoyImg3 from "./assets/images/tattoos/enjoy3.png";

import route66 from './assets/images/tattoos/route66.png';

import lionking from "./assets/images/tattoos/lionking.png";

import toyStory from "./assets/images/tattoos/toyStory.png";

import frog from "./assets/images/tattoos/frog.png";

import ItemDisplayer from "./ItemDisplayer";

export default function Tattoos() {
    const navigate = useNavigate();

    const tattoos = [
        {title: "enjoy being while becoming", imgs: [enjoyImg, enjoyImg2, enjoyImg3]},
        {title: "Route 66", imgs: [route66]},
        {title: "Lion King", imgs: [lionking]},
        {title: "Toy Story", imgs: [toyStory]},
        {title: "Jumping Frog", imgs: [frog]}
    ];

    const openSlider = (tattoo) => {
        navigate("/slider", {state: {images: tattoo.imgs, title: tattoo.title}});
    }

    return (
        <div>
            <h2>Tattoos</h2>
            <div className="item-displayer">
                {tattoos.map((tattoo, index) => (
                    <ItemDisplayer
                        key={index}
                        title={tattoo.title}
                        img={tattoo.imgs[0]}
                        onClick={() => openSlider(tattoo)}
                    />
                ))}
            </div>
        </div>
    );
}