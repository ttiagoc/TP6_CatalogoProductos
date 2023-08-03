import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';
export default function Productos() {
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


            <div class="product-carousel">
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 4" />
                    <h3>Product 4</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 5" />
                    <h3>Product 5</h3>
                    <p>This is a product description.</p>
                </div>
            </div>
            <div class="product-carousel">
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 1" />
                    <h3>Product 6</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 2" />
                    <h3>Product 7</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 3" />
                    <h3>Product 8</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 4" />
                    <h3>Product 9</h3>
                    <p>This is a product description.</p>
                </div>
                <div class="product">
                    <img src="https://farmaciafilgueira.com.ar/wp-content/uploads/2021/07/210035_desodorante-antitranspirante-rexona-clinical-men-clean-en-areasol-x-110-ml_imagen-1.jpg" alt="Product 5" />
                    <h3>Product 10</h3>
                    <p>This is a product description.</p>
                </div>
            </div>
        </>





    )
}
