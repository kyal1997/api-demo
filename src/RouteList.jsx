import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Contacts, Home, Products, Whoops404 } from "./Pages";

function RouteList() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}
export default RouteList;