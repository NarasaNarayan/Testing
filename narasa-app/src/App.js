
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from "./components1/Home";
import Login from "./components1/Login";
import Navbar from "./components1/Navbar";
import SignUp from "./components1/SignUp";
import Footer from "./components1/Footer";
import Products from "./components1/Products";
import Product from "./components1/Product";
import axios from 'axios';
import Filter from "./components1/Filter";
import Cart from "./components1/Cart";







function App() {
  const [product, setproduct] = useState([])
  const [cart, setCart]=useState([])

  useEffect(() => {
    console.log("runn");
  const getProducts=async()=>{
    const response=  await axios.get('https://fakestoreapi.com/products')
    setproduct(response.data);
    console.log(response)
  }
    
    getProducts();
  }, [])

  const handleAddtocart=()=>{
    const productExist=cart.find((item)=> item.id === product.id);
    if(productExist){
      setCart(
        cart.map((item)=>item.id === product.id ?
        {...productExist,quantity: productExist.quantity +1} : item
        )
      );
    }
    else{
      setCart([...cart,{...product,quantity:1}])
    }
  }

  return (


    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Products" element={<Products product={product} handleAddtocart={handleAddtocart}/>}/>
          <Route path="/Product/:id" element={<Product />}/>
          <Route path="/Filter" element={<Filter />}/>
        <Route path="/Cart" element={<Cart cart={cart} handleAddtocart={handleAddtocart } />}/>







          
        </Routes>
<Footer/>
      </BrowserRouter>

    </>



  );
}

export default App;
