import React from "react";
import miiree12lbImg from "./assets/images/tshirts/miiree12lb.png";
import miiree12lbImg2 from "./assets/images/tshirts/miiree12lb2.png";

import scienceImg from "./assets/images/tshirts/science.png";
import scienceImg2 from "./assets/images/tshirts/science2.png";
import scienceImg3 from "./assets/images/tshirts/science3.png";
import scienceImg4 from "./assets/images/tshirts/science4.png";

import route66 from "./assets/images/tshirts/route66.png";

import ItemDisplayer from "./ItemDisplayer.jsx";
import { useNavigate } from "react-router-dom";

export default function Tshirts() {
    const navigate = useNavigate();

    const tshirts = [
        { title: "miiree12lb", imgs: [miiree12lbImg, miiree12lbImg2] },
        { title: "Science Fellows", imgs: [scienceImg, scienceImg2, scienceImg3, scienceImg4] },
        { title: "Route 66", imgs: [route66] },
    ];

    const openSlider = (tshirt) => {
        navigate("/designs/slider", { state: { images: tshirt.imgs, title: tshirt.title } });
    };

    return (
        <div>
            <h2>T-Shirts</h2>
            <div className="item-displayer">
                {tshirts.map((tshirt, index) => (
                    <ItemDisplayer
                        key={index}
                        title={tshirt.title}
                        img={tshirt.imgs[0]}
                        onClick={() => openSlider(tshirt)}
                    />
                ))}
            </div>
        </div>
    );
}
