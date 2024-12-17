import React from 'react';
import { createRoot } from "react-dom/client";

function Root() {
    return (
        <div>
            <h1>Welcome to the React App!</h1>
            <p>This is a simple React app.</p>
        </div>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}