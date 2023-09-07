import React, { useState, useEffect, useContext } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import FilterOption from '../components/FilterOption';
import axios from 'axios'
import {ProductsContext}  from '../context/ProductosContext';
import {CategoriesContext} from '../context/CategoriasContext';

function Products() {

    const { products } = useContext(ProductsContext);
    const { categories } = useContext(CategoriesContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);

        useEffect(() =>
        { 
            setLoading(true)
            const getProducts = () =>{
            if (products !== null || products !== undefined) {
                setLoading(false);
                setData(products);
                setFilter(products);
            }else{
                getProducts()
            }

        }
            getProducts()
        }, [])
            
   
    const Loading = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                  <div className="position-sticky" style={{ top: "100px" }}>
                        <FilterOption onClickFunction={() => setFilter(data)} text="All"/>
                        <FilterOption onClickFunction={() => filterProduct("fragrances")} text="fragrances"/>
                        <FilterOption onClickFunction={() => filterProduct("laptops")} text="laptops"/>
                        <FilterOption onClickFunction={() => filterProduct("smartphones")} text="smartphones"/>
                        <FilterOption onClickFunction={() => filterProduct("skincare")} text="skincare"/>
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>  
                    </div>

                </div>


            </>
        )
    }

    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList);
    }

    const filterByName = () => {
        let name = document.querySelector('#inputFiltro').value
    
        // setFilter(updatedList);
         axios
        .get("https://dummyjson.com/products/search?q=" + name)
        .then((result) => {

            console.log("https://dummyjson.com/products/search?q=" + name)
            console.log("funcion: " + result.data.products)
            //setFilter(result.data.products)

        })

    }

    const ShowProducts = () => {
        return (
            <>
                <div className='mt-5 pt-5'></div>
                <div className="col-md-3 my-3">

                     <div className="position-sticky" style={{ top: "100px" }}>
                        
                        <FilterOption onClickFunction={() => setFilter(data)} text="All"/>
                        <FilterOption onClickFunction={() => filterProduct("fragrances")} text="fragrances"/>
                        <FilterOption onClickFunction={() => filterProduct("laptops")} text="laptops"/>
                        <FilterOption onClickFunction={() => filterProduct("smartphones")} text="smartphones"/>
                        <FilterOption onClickFunction={() => filterProduct("skincare")} text="skincare"/>

                        {categories.map((categoria) => {
                            {console.log(categoria)}
                            <FilterOption onClickFunction={() => filterProduct({categoria})} text={categoria}/>

                        })}
                        
                        <input onChange={() => filterByName()} id="inputFiltro" type='text' ></input>
                    </div>

                </div>
              {console.log(filter)}
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


            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products