import React from "react";

export default function ItemDisplayer({ title, img, onClick }) {
    return (
        <div className={`item ${onClick !== null ? "" : "no-opener"}`} onClick={onClick}>
            <h3>{title}</h3>
            <img src={img} alt={title} />
        </div>
    );
}
