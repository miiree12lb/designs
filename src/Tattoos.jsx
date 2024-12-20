import React from "react";
import { useNavigate } from "react-router-dom";
import enjoyImg from "./assets/images/tattoos/enjoy.png";
import enjoyImg2 from "./assets/images/tattoos/enjoy2.png";
import enjoyImg3 from "./assets/images/tattoos/enjoy3.png";
import ItemDisplayer from "./ItemDisplayer";

export default function Tattoos() {
    const navigate = useNavigate();

    const tattoos = [
        {title: "enjoy being while becoming", imgs: [enjoyImg, enjoyImg2, enjoyImg3]}
    ];

    const openSlider = (tattoo) => {
        navigate("/designs/slider", {state: {images: tattoo.imgs, title: tattoo.title}});
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