import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import './/About.css';
import 'typeface-montserrat';
import Aos from 'aos';
import AppBar from '../components/AppBar';

export default function About() {

  useEffect(()=>{
    Aos.init({duration: 1000});
    }, []);
  return (
    <div>
      <AppBar/>
      <div className='about' >
      &nbsp;
      <div class="about_card" data-aos="fade-up">
        <div className='about_inner_text'>
          <p>About us</p>
        </div>
        <div class="about_textBox">
          <p class="about_text about_head">About Us</p>
          <span>Welcome to Power Lend, your trusted partner in power tools rental! At Power Lend, we understand the importance of having the right tools for the job, and we're here to provide a convenient and cost-effective solution for all your project needs.</span>
        </div>
      </div>
      &nbsp;
      <div class="about_card" data-aos="fade-up">
        <div className='about_inner_text'>
          <p>PowerLend Mission</p>
        </div>
        <div class="about_textBox">
          <p class="about_text about_head">Our Mission</p>
          <span>At the heart of Power Lend is a commitment to empowering individuals and businesses by providing access to high-quality power tools without the burden of ownership. We strive to be the go-to destination for reliable and efficient tools that enhance productivity and make every project a success.</span>
        </div>
      </div>
      &nbsp;
      <div class="about_card" data-aos="fade-up">
        <div className='about_inner_text'>
          <p>Quality Trust</p>
        </div>
        <div class="about_textBox">
          <p class="about_text about_head">Quality You Can Trust</p>
          <span>We take pride in offering a diverse range of top-notch power tools from leading brands. Our equipment is regularly maintained and thoroughly inspected to ensure optimal performance and safety.</span>
        </div>
      </div>
      &nbsp;
      <div class="about_card" data-aos="fade-up">
        <div className='about_inner_text'>
          <p>Flexible Rental Options</p>
        </div>
        <div class="about_textBox">
          <p class="about_text about_head">Flexible Rental Options</p>
          <span>With Power Lend, renting tools is a breeze. Our user-friendly online platform allows you to browse our inventory, check availability, and reserve equipment with just a few clicks. We also provide timely delivery and pickup services for added convenience.</span>
        </div>
      </div>
      &nbsp;
      </div>
      <Footer/>
    </div>
  )
}
