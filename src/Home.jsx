import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import tshirtCover from "./assets/images/covers/t-shirt-business-name-ideas.png";
import tattooCover from "./assets/images/covers/tattoos.png";
import insta from "./assets/images/covers/insta.png"

export default function Home() {
    const parallax_contents = [
        { title: "T-shirts", img: tshirtCover, link: "/tshirts" },
        { title: "Tattoos", img: tattooCover, link: "/tattoos" },
        { title: "Insta Covers", img: insta, link: "/insta" },
    ];

    return (
        <>
            {parallax_contents.map((p) => (
                <div className='parallax'
                style={{
                    backgroundImage: `url(${p.img})`
                }}
            >
                <Link to={p.link}>
                    <button>{p.title}</button>
                </Link>
            </div>
            ))}
        </>
    );
}
