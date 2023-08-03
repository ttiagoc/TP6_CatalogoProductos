import React from 'react'
import { Link , Outlet} from "react-router-dom";
import '../index.css'

export default function Home() {
    return (
        <>
     
            <header>
                <h1>E-Commerce</h1>
                
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
