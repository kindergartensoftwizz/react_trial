import React from "react";

import pic1 from '../images/kids_clothes.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from "./AuthProvider";

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Controller, Zoom, Autoplay, Mousewheel } from 'swiper/modules';
// JSX syntax

function Heading(props)
{
  return(
    <div className='col-lg-4'>
    <img src={pic1} height={200} width={200} className='rounded-circle' />
    <h2>{props.title}</h2>
    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
    <button className='btn btn-secondary'>View Details</button>
  </div>
  )
}
export default function Home()
{
  
    return(
        <>

        

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Zoom, Autoplay, Mousewheel, Controller]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      mousewheel={{invert:true}}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      
    >
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
      <SwiperSlide><img src={pic1} class="d-block w-100" alt="..." /></SwiperSlide>
    
    </Swiper>
<br/>


<div class="container">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored">
			<i class="fa fa-thumbs-o-up"></i>
			<span class="counter">2147</span>
			<p>Happy Customers</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-group"></i>
			<span class="counter">3275</span>
			<p>Registered Members</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa  fa-shopping-cart"></i>
			<span class="counter">289</span>
			<p>Available Products</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa  fa-user"></i>
			<span class="counter">1563</span>
			<p>Saved Trees</p>
		</div>
	</div>
  </div>	
</div>


        <div className='row' id='slider'>
  <div className='col-lg-12'>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block text-start">
        <h5 className='fs-1'>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-primary'>Click </button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block text-center">
        <h5 className='display-1'>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block text-end">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div>
{/* row end */}

<div className='row text-center p-5' id='threedivs'>
  <Heading title="Heading1"/>
  <Heading title="Heading2"/>
  <Heading title="Heading3"/>
  
</div>
{/* row end */}
<div className='row p-3'>
  <hr/>
</div>
{/* row end      pt, pb, ps, pe, py-, px */}
</>
    )
}