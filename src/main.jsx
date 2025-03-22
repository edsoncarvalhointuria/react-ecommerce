import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./main.scss";
import ContextProviderCart from "./contexts/contextCart";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ContextProviderCart>
                <App />
            </ContextProviderCart>
        </BrowserRouter>
    </StrictMode>
);
