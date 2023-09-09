import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import FilterOption from '../components/FilterOption';
import axios from 'axios'
import { ProductsContext } from '../context/ProductosContext';
import { CategoriasContext } from '../context/CategoriasContext';
import { ColorRing } from 'react-loader-spinner'
import '../index.css'

function Products() {

    const { products } = useContext(ProductsContext);
    const { categories } = useContext(CategoriasContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState([]);


    useEffect(() => {
        setLoading(true)

        if (products !== null || products !== undefined) {
            setLoading(false);
            setData(products);
            setFilter(products);
        }

    }, [products])


    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList);
    }

    const filterByName = (e) => {

        axios
            .get("https://dummyjson.com/products/search?q=" + e.target.value)
            .then((result) => {

                setFilter(result.data.products)

            })

    }

    if (loading) {
        return (
            <div className='container'>
                <div className='row'>
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
            </div>

        )
    } else {

        return (

            <div className="container">
                <div className="row">


                    <div className='mt-5 pt-5'></div>
                    <div className="col-md-3 my-3">



                        <div className="position-sticky" style={{ top: "100px" }}>

                            <div>
                                <input onChange={(e) => filterByName(e)} id="inputFiltro" type='text' placeholder='search...' autoComplete='off' className='searchBar' />
                            </div>

                            <FilterOption onClickFunction={() => setFilter(data)} text="All" />

                            {categories.map((categoria, index) => {

                                return (
                                    <>

                                        <FilterOption onClickFunction={() => filterProduct(categoria)} text={categoria} key={index} />

                                    </>)

                            })}


                        </div>

                    </div>
                    <div className="col-md-9 py-md-3">
                        <div className="row">
                            {filter.map((product) => {
                                return (
                                    <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                        <div className="card h-100">
                                            <img src={product.images[0]} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                            <div className="m-3 mb-0">
                                                <small className="card-title">{product.title.substring(0, 50)}...</small>
                                            </div>
                                            <div style={{ marginTop: "auto" }}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="m-3"><b>${product.price}</b></div>
                                                    <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                        <button className="btn btn-sm m-3 border-primary">
                                                            <i className="fa fa-arrow-right text-muted"></i>
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Products