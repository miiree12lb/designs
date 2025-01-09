import React from "react";
import miiree12lbImg from "./assets/images/tshirts/miiree12lb.png";
import miiree12lbImg2 from "./assets/images/tshirts/miiree12lb2.png";

import scienceImg from "./assets/images/tshirts/science.png";
import scienceImg2 from "./assets/images/tshirts/science2.png";
import scienceImg3 from "./assets/images/tshirts/science3.png";
import scienceImg4 from "./assets/images/tshirts/science4.png";

import route66 from "./assets/images/tshirts/route66.png";

import bcn from "./assets/images/tshirts/BCN.png";
import bcn2 from './assets/images/tshirts/BCN2.png';
import bcn3 from './assets/images/tshirts/BCN3.png';

import nyc from "./assets/images/tshirts/nyc.png";
import nyc2 from './assets/images/tshirts/nyc2.png';
import nyc3 from './assets/images/tshirts/nyc3.png';

import gaudi from "./assets/images/tshirts/gaudi.png";
import gaudi2 from "./assets/images/tshirts/gaudi2.png";
import gaudi3 from "./assets/images/tshirts/gaudi3.png";

import adventure from "./assets/images/tshirts/adventure.png";
import adventure2 from "./assets/images/tshirts/adventure2.png";
import adventure3 from "./assets/images/tshirts/adventure3.png";

import kiss from "./assets/images/tshirts/kiss.png";
import kiss2 from "./assets/images/tshirts/kiss2.png";
import kiss3 from "./assets/images/tshirts/kiss3.png";

import wander from "./assets/images/tshirts/wander.png";
import wander2 from "./assets/images/tshirts/wander2.png";
import wander3 from "./assets/images/tshirts/wander3.png";

import mountain from "./assets/images/tshirts/mountain.png";
import mountain2 from "./assets/images/tshirts/mountain2.png";

import ItemDisplayer from "./ItemDisplayer.jsx";
import { useNavigate } from "react-router-dom";

export default function Tshirts() {
    const navigate = useNavigate();

    const tshirts = [
        { title: "Bar Cel Ona", imgs: [bcn, bcn2, bcn3] },
        { title: "NYC", imgs: [nyc, nyc2, nyc3] },
        { title: "Keep it simple", imgs: [kiss, kiss2, kiss3]},
        { title: "Science Fellows", imgs: [scienceImg, scienceImg2, scienceImg3, scienceImg4] },
        { title: "Adventure", imgs: [adventure, adventure2, adventure3] },
        { title: "Not all who wander are lost", imgs: [wander, wander2, wander3]},
        { title: "Route 66", imgs: [route66] },
        { title: "Mountain", imgs: [mountain, mountain2]},
        { title: "BCN - Gaudí", imgs: [gaudi, gaudi2, gaudi3] },
        { title: "miiree12lb", imgs: [miiree12lbImg, miiree12lbImg2] },
    ];

    const openSlider = (tshirt) => {
        navigate("/slider", { state: { images: tshirt.imgs, title: tshirt.title } });
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
