import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const data = [];
const NavBar = () => {
  const [filter, setfilter]=useState([])
  useEffect(() => {
  const getProducts=async()=>{
    const response=  await axios.get('https://fakestoreapi.com/products')
    setfilter(response.data);
    const data = response.data
  }
    
    getProducts();
  }, [])


  return (
<div class="container-fluid">
<div><nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-bold ">
          <li className="nav-item">
            <a className="nav-link active ms-5 ps-5" aria-current="page" href="#">Men</a>
          </li>
          <li className="nav-item">
          </li>
            <a className="nav-link ms-5" href="#">Women</a>
          <li className="nav-item">
            <a className="nav-link ms-5" href="#">Kids</a>
          </li> <li className="nav-item">
            <a className="nav-link ms-5" href="#">Shoes</a>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filter} onChange={(e)=>setfilter(e.target.value)}/>
          {data.filter(data=> (data.title.toLowerCase().includes(filter))).map(data=>{

            return(
              <li key={data.id} > {data.title}</li>
            )
          })}
        </form>
        <i class="fa-solid fa-heart ms-4"></i>
        <i class="fa-solid fa-user ms-4"></i>

      <NavLink to="/Cart">  <i class="fa-solid fa-cart-shopping ms-4"></i></NavLink>
      </div>
    </div>
  </nav></div>
</div>
  )
}

export default NavBar