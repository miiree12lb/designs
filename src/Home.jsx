import React from 'react';
//@ts-ignore
import tshirtCover from "./assets/images/covers/t-shirt-business-name-ideas.png"
import tattooCover from "./assets/images/covers/tattoos.png";

export default function Home() {
    return (
        <>
            <div className='parallax'
                style={{
                    backgroundImage: `url(${tshirtCover})`
                }}
            >
                <button>T-shirts</button>
            </div>

            <div className='parallax'
                style={{
                    backgroundImage: `url(${tattooCover})`
                }}
            >
            <button>Tattoos</button>
        </div>
        </>


    );
}