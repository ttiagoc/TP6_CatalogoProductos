import React, { useState, useEffect , useContext} from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import { CarritoContext } from '../context/CarritoContext'
function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {AddProduct} = useContext(CarritoContext)

    useEffect(() => {
        const getProduct = async () => {
            
            setLoading(true);
           
            axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((result) => {
      
              const response = result.data
              setProduct(response);
              setLoading(false);
      
            }).catch((error) => {
              console.log(error);
            });

           
        }
        getProduct();
    }, [id]);

   
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
    }else{

    return (
        <>
            <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>

            <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <i className="fa fa-long-arrow-left"></i>
                                <span className="ml-1">&nbsp;Back</span>
                            </div>
                        </NavLink>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                         <div className="text-center p-4">
                                            <img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + id + '/1.jpg'} width="250" height="auto" />
                                        </div> 
                                       
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">

                                        <span className="text-muted text-capitalize"> in {product.category}</span>

                                            <h5 className="text-uppercase">
                                                {product.title}
                                            </h5>

                                            Rating {product.rating}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${product.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{product.description}</p>
                                        <div className="cart mt-4 align-items-center"> <button className="btn btn-outline-dark text-uppercase mr-2 px-4" onClick={() => AddProduct(product)}>Buy</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}

export default ProductDetail