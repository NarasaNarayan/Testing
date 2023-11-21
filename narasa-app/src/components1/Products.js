import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Products = ({handleAddtocart,product}) => {

    return (
        <div>
            <div className="container-fluid modifyy"  >
                {product.map((product) => {
                    return <div className=' ' >  <NavLink to={`/Product/${product.id}`}> <div className="card " style={{ width: '13rem' }}>
                        <img src={product.image} className="card-img-top p-4 " alt="..." style={{ height: '200px',border:'2px solid black',margin:'2px' }} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                            <p className="card-text"></p>
                        </div>

                        <span>${product.price}</span>
                        <span>      {product.rating.rate}<i class="fa-solid fa-star"></i>
                        </span></div>
                    </NavLink>
                        <div className="card-body">
                            <button className='btn btn-primary'onClick={()=>handleAddtocart} >Add to cart</button>
                        </div>
                    </div>

                })}
            </div>


        </div>
    )
}

export default Products
