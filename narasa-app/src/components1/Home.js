import React from 'react'
import SliderImage1 from '../Assets/SliderImage1.jpg'
import SliderImage2 from '../Assets/SliderImage2.gif'
import SliderImage3 from '../Assets/SliderImage3.jpg'



const Home = () => {
  return (
    <div><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src={SliderImage1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
              <img src={SliderImage2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={SliderImage3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Home