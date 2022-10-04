import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="products">Products </Link>
                <Link to="contacts">Contacts </Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    );
}

export function Contacts() {
    return (
        <div>
            <h1>[Contacts]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    );
}