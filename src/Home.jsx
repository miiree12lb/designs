import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import tshirtCover from "./assets/images/covers/t-shirt-business-name-ideas.png";
import tattooCover from "./assets/images/covers/tattoos.png";

export default function Home() {
    return (
        <>
            <div className='parallax'
                style={{
                    backgroundImage: `url(${tshirtCover})`
                }}
            >
                <Link to="/tshirts">
                    <button>T-shirts</button>
                </Link>
            </div>

            <div className='parallax'
                style={{
                    backgroundImage: `url(${tattooCover})`
                }}
            >
                <Link to="/tattoos">
                    <button>Tattoos</button>
                </Link>
            </div>
        </>
    );
}
