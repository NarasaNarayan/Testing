import React from 'react'

const Cart = ({ cart,handleAddtocart }) => {
    return (
        <div><center>
            {cart.length === 0 && (
                <div> No items Added to the cart</div>)}
          </center>
            <div>
                {cart.map((item)=>(
                    <div key={item.id}>
                    <img src={item.image} alt="something"/>
                    <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart