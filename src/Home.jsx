import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import tshirtCover from "./assets/images/covers/t-shirt-business-name-ideas.png";
import tattooCover from "./assets/images/covers/tattoos.png";
import insta from "./assets/images/covers/insta.png"
import capsCover from "./assets/images/covers/caps.png";

const isAppleDevice = () => {
    return /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent);
};


export default function Home() {
    const [isApple, setIsApple] = useState(false);

    useEffect(() => {
        setIsApple(isAppleDevice());
    }, []);

    const parallax_contents = [
        { title: "T-shirts", img: tshirtCover, link: "/tshirts" },
        { title: "Caps", img: capsCover, link: "/caps" },
        { title: "Tattoos", img: tattooCover, link: "/tattoos" },
        { title: "Insta Covers", img: insta, link: "/insta" },
    ];

    return (
        <>
            {parallax_contents.map((p) => (
                <div className={`parallax ${isApple ? 'apple' : ''}`}
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
