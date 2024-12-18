import React from 'react';
import ItemDisplayer from "./ItemDisplayer.jsx";
import insta1 from './assets/images/insta/WI_cover.png';
import insta2 from './assets/images/insta/berlin_cover.png';
import insta3 from './assets/images/insta/c_cover.png';
import insta4 from './assets/images/insta/coding_cover.png';
import insta5 from './assets/images/insta/earth.png';
import insta6 from './assets/images/insta/escala_cover.png';
import insta7 from './assets/images/insta/essyi_cover.png';
import insta8 from './assets/images/insta/fcb.png';
import insta9 from './assets/images/insta/guitar_cover.png';
import insta10 from './assets/images/insta/gym_cover.png';
import insta11 from './assets/images/insta/irl_cover.png';
import insta12 from './assets/images/insta/lmh_cover.png';
import insta13 from './assets/images/insta/madrid_cover.png';
import insta14 from './assets/images/insta/me_cover.png';
import insta15 from './assets/images/insta/mountain_cover.png';
import insta16 from './assets/images/insta/nl_cover.png';
import insta17 from './assets/images/insta/nyc_cover.png';
import insta18 from './assets/images/insta/route66_cover.png';
import insta19 from './assets/images/insta/tat_cover.png';
import insta20 from './assets/images/insta/travel_cover.png';
import insta21 from './assets/images/insta/twente.png';
import insta22 from './assets/images/insta/uk_cover.png';
import insta23 from './assets/images/insta/video_editing_cover.png';

export default function InstaCovers() {
    const covers = [
        {title: "Route 66", imgs: [insta18]},
        {title: "FC Barcelona", imgs: [insta8]},
        {title: "Cornell", imgs: [insta3]},
        {title: "Me", imgs: [insta14]},
        {title: "Travel", imgs: [insta20]},

        {title: "FC Twente", imgs: [insta21]},
        {title: "UK", imgs: [insta22]},

        
        {title: "Wisconsin", imgs: [insta1]},
        {title: "Berlin", imgs: [insta2]},
        {title: "Computer Science", imgs: [insta4]},
        {title: "Earth", imgs: [insta5]},
        {title: "L'Escala", imgs: [insta6]},

        {title: "ESSYI", imgs: [insta7]},
        {title: "Guitar", imgs: [insta9]},
        {title: "Gym", imgs: [insta10]},
        {title: "Ireland", imgs: [insta11]},
        {title: "LMH", imgs: [insta12]},

        {title: "Madrid", imgs: [insta13]},
        {title: "Mountain", imgs: [insta15]},
        {title: "Netherlands", imgs: [insta16]},
        {title: "NYC", imgs: [insta17]},
        {title: "Tattoo", imgs: [insta19]},

        {title:"Video Editing", imgs: [insta23]}
        
    ];
    return (
        <div className="insta-covers">
            <h2>Insta Covers</h2>
            <div className='item-displayer'>
                {covers.map((tshirt, index) => (
                    <ItemDisplayer
                        key={index}
                        title={tshirt.title}
                        img={tshirt.imgs[0]}
                        onClick={null}
                    />
                ))}
            </div>
        </div>
    );
}