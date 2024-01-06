import React, { useEffect } from 'react'
import ".//MainImage.css";
import image from '../asset/tools2.png';
import image2 from '../asset/mainImage2.png';
import 'typeface-montserrat';
import Aos from 'aos';


export default function MainImage() {
  useEffect(()=>{
  Aos.init({duration: 2700});
  }, []);
  return (
    <div>
        <div className='MainImage'>
          <div>
              <img src={image} width={360} alt="" />
          </div>
          <div className='mainimage_details-view' data-aos="fade-up">
            <div><img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" width={150} alt="" /></div>
            &nbsp;
            <div style={{fontWeight:"bolder",fontSize:"25px"}}>With Power Lend, renting tools is a breeze!</div>
            &nbsp;
            <div>Welcome to Power Lend, your trusted partner in power tools rental! At Power Lend, we understand the importance of having the right tools for the job, and we're here to provide a convenient and cost-effective solution for all your project needs. At the heart of Power Lend is a commitment to empowering individuals and businesses by providing access to high-quality power tools without the burden of ownership. We strive to be the go-to destination for reliable and efficient tools that enhance productivity and make every project a success.  Whether you need a tool for a day, a week, or an extended period, we offer flexible rental plans to suit your schedule and budget.
            Your satisfaction is our priority.
            </div>
          </div>
        </div>
        <div className='MainImage'>
        <div className='mainimage_details-view' data-aos="fade-up">
          <div style={{fontWeight:"bolder",fontSize:"25px"}}>Simplifies the tool rental process!</div>
          &nbsp;
          <div>
          Discover a curated selection of top-notch tools, from drills and saws to sanders and beyond. Our user-friendly interface allows you to effortlessly browse, reserve, and schedule tool rentals. With a robust scheduling system, secure payment options, and a seamless user experience, This page is designed to empower your projects, making them more efficient and enjoyable.
          </div>
          &nbsp;
        </div>
        <div>
            <img src={image2} width={259} alt="" />
        </div>
      </div>
    </div>
  );
}
