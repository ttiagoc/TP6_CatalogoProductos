import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';

export default function Contacto() {
    return (
        <>

            <header>
                <h1>E-Commerce</h1>
                <nav>

                    <Link to="/">Home</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>

                </nav>
            </header>

            <section class="contact">
                <h2>Contact Us</h2>
                <p>
                    We would love to hear from you! If you have any questions, comments, or suggestions, please feel free to contact us.
                </p>
                <p>
                    You can reach us by phone, email, or through our contact form.
                </p>
                <div class="contact-info">
                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>
                    <h3>Email</h3>
                    <p>info@example.com</p>
                    <h3>Contact Form</h3>
                    <a href="#">Contact Us</a>
                </div>
            </section>
        </>
    )
}
