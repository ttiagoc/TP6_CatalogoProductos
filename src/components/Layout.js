import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav>

                <Link to="/home">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>

            </nav>
            <Outlet />
        </>
    )
}
