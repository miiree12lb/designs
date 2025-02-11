import React from 'react';
import { useNavigate } from "react-router-dom";
import ItemDisplayer from './ItemDisplayer';
import nasa from "./assets/images/caps/nasa.png";
import noot from "./assets/images/caps/noot.png";
import travel from "./assets/images/caps/travel.png";
import route from "./assets/images/caps/route.png";
import astronaut from "./assets/images/caps/astronaut.png";
import beach from "./assets/images/caps/beach.png";
import wave from "./assets/images/caps/wave.png";
import explorer from "./assets/images/caps/explorer.png";

export default function Caps() {
    const navigate = useNavigate();
    
    const caps = [
        { title: "NASA", imgs: [nasa] },
        { title: "Noot Noot", imgs: [noot]},
        { title: "Travel", imgs: [travel] },
        { title: "Astronaut", imgs: [astronaut] },
        { title: "Beach", imgs: [beach] },
        { title: "Wave", imgs: [wave] },
        { title: "Explorer", imgs: [explorer] },
        { title: "Route 66", imgs: [route] },
    ];

    const openSlider = (cap) => {
        navigate("/slider", { state: { images: cap.imgs, title: cap.title } });
    };

    return (
        <div>
            <h2>Caps</h2>
            <div className="item-displayer">
                {caps.map((tshirt, index) => (
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