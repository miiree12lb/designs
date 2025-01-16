import React from 'react';
import { createRoot } from "react-dom/client";
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Tshirts from './Tshirts.jsx';
import Tattoos from './Tattoos.jsx';
import SliderPage from './SliderPage.jsx';
import Insta from "./InstaCovers.jsx"
//@ts-ignore
import "./css/root.css";
import { HashRouter, Route, Routes, Outlet } from 'react-router-dom';
import Caps from './Caps.jsx';

function LayoutWithNav() {
    return (
        <>
            <Navbar />
            <div id="view">
                <Outlet />
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

function LayoutWithoutNav() {
    return (
        <>
            <Home />
            <div id="footer">
                <Footer />
            </div>
        </>
    );
}

function Root() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LayoutWithoutNav />} />
                <Route element={<LayoutWithNav />}>
                    <Route path="tshirts" element={<Tshirts />} />
                    <Route path="caps" element={<Caps />} />
                    <Route path="tattoos" element={<Tattoos />} />
                    <Route path="slider" element={<SliderPage />} />
                    <Route path="insta" element={<Insta />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}
