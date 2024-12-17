import React from 'react';
import { createRoot } from "react-dom/client";
import Footer from './Footer.jsx';
import Home from './Home.jsx';
//@ts-ignore
import "./css/root.css";
import { BrowserRouter } from 'react-router-dom';

function Root() {
    return (
        <BrowserRouter>
            <Home/>

            <div id="footer">
                <Footer/>
            </div>
            
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}