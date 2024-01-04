import React from 'react'
import ".//MainImage.css";
import image from '../asset/tools2.png';
import 'typeface-montserrat';

export default function MainImage() {
  return (
        <div className='MainImage'>
          <div>
              <img src={image} width={400} alt="" />
          </div>
          <div className='mainimage_details-view'>
            <div><img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" width={150} alt="" /></div>
            &nbsp;
            <div style={{fontWeight:"bolder",fontSize:"25px"}}>With Power Lend, renting tools is a breeze!</div>
            &nbsp;
            <div>Welcome to Power Lend, your trusted partner in power tools rental! At Power Lend, we understand the importance of having the right tools for the job, and we're here to provide a convenient and cost-effective solution for all your project needs. At the heart of Power Lend is a commitment to empowering individuals and businesses by providing access to high-quality power tools without the burden of ownership. We strive to be the go-to destination for reliable and efficient tools that enhance productivity and make every project a success.  Whether you need a tool for a day, a week, or an extended period, we offer flexible rental plans to suit your schedule and budget.
            Your satisfaction is our priority. Our knowledgeable and friendly staff are here to assist you in selecting the right tools for your specific project. We value transparency and integrity in all our interactions.
            </div>
            &nbsp;
          </div>
        </div>
  );
}
