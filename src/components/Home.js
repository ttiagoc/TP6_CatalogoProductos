import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'

export default function Home() {
    return (
        <>

            <header>
                <h1>E-Commerce</h1>
                <nav>
            
                    <Link to="/home">Home</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>

                </nav>
            </header>
            <main>
                <h1 className='titulo'>BIENVENIDOS</h1>
                <section class="products">

                    <ul>
                        <li>

                            <img src="https://www.uomax.com.ar/11276-large_default/desodorante-rexona-men-xtracool-x-90-gr.jpg" alt="Product 1" />
                            <p>This is a product description.</p>
                        </li>
                        <li>

                            <img src="https://www.uomax.com.ar/11276-large_default/desodorante-rexona-men-xtracool-x-90-gr.jpg" alt="Product 2" />
                            <p>This is a product description.</p>
                        </li>
                        <li>

                            <img src="https://www.uomax.com.ar/11276-large_default/desodorante-rexona-men-xtracool-x-90-gr.jpg" alt="Product 3" />
                            <p>This is a product description.</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>Copyright &copy; 2023 E-Commerce Website</p>
            </footer>
        </>
    )
}
