import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = (props) => {
    const {id} =useParams();
    const [product, setproduct] = useState({})
    useEffect(() => {
        console.log("running");
        const getProduct=async()=>{
            const response=  await axios.get(`https://fakestoreapi.com/products/${id}`)
            setproduct(response.data);
            console.log(response.data                                       );
        }
        getProduct()
    }, [])
    
  return (
    <div>
        <div class="container">
        {id}
            <div class="row">
                <div class="col-8">
            <img src={product.image} style={{width:'50%'}}/>
                    
                </div>
                <div class="col-4 text-center mx-auto my-auto">
                    <span className='fs-5'>{product.catagory}</span> <br/>
                    <span>{product.title}</span><br/>
                    {/* <span>{product.rating.rate}</span> */}
                    <span>${product.price}</span><br/>
                    <span>{product.discription}</span>
                    <button className='btn btn-primary m-4 text-center'>Add to cart</button>





                </div>

            </div>
        </div>
    </div>
  )
}

export default Product