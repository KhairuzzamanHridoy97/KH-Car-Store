import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner 1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';


const Banner = () => {
    return (
        <div>
            <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h2>WELLCOME TO CAR STORE</h2>
      <p>Find Your Favourite Car In Our Store</p>
     <button className='btn btn-danger m-2'>Learn More</button> 
     <button className='btn btn-outline-info'>Getting Started</button> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2>BEST STORE IN THIS TOWN</h2>
      <p>The Best Place To Buy A Car Of Your Choice </p>
      <button className='btn btn-danger m-2'>Learn More</button> 
     <button className='btn btn-outline-info'>Getting Started</button> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>KH CAR STORE AT YOUR SERVICE</h2>
      <p>You Can Buy The Latest Car In Our Store.</p>
      <button className='btn btn-danger m-2'>Learn More</button> 
     <button className='btn btn-outline-info'>Getting Started</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </>
        </div>
    );
};

export default Banner;