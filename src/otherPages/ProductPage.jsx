import React from 'react'
import './/ProductPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import pro_image from "../asset/product1.jpg"
import Footer from '../components/Footer';
import 'typeface-montserrat';

export default function ProductPage() {
  return (
    <div>
      <div style={{background:"black", padding:"5px"}}>
        <button class="Back_Btn">
          <a href='/' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						  </svg></a>
          <a href='/' class="back_text">Back</a>
        </button>
        </div>
        <div className='pro_view'>
          <div>
            <img className='pro_img' src={pro_image} width={459} alt="" />
          </div>
          <div className='pro_details_view'>
            <div>
              <h4>Double-Bevel Sliding Compound Miter Saw</h4>
            </div>
            <div>
              <div class="rating">
                <input value="5" name="rating" id="star5" type="radio"/>
                <label for="star5"></label>
                <input value="4" name="rating" id="star4" type="radio"/>
                <label for="star4"></label>
                <input value="3" name="rating" id="star3" type="radio"/>
                <label for="star3"></label>
                <input value="2" name="rating" id="star2" type="radio"/>
                <label for="star2"></label>
                <input value="1" name="rating" id="star1" type="radio"/>
                <label for="star1"></label>
              </div>
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
              <h4 style={{color:"#ffc506"}}>$41.00</h4>
            </div>
            <div>
              <div>
              Stainless steel miter detent plate with 10 positive stops. Precise miter system and machined base fence support Precise miter system and machined base fence support Cam-lock miter handle with detent override delivers quick and accurate miter angles.
              </div>
            </div>
            &nbsp;
            <div style={{display:"flex", flexDirection:"column"}}>
              <h5>How many days?</h5>
              <input type="number" style={{border:"1.9px solid rgba(0, 0, 0, 0.707)", width:"73%"}}/>
            </div>
            &nbsp;
            <div>
              <p>
                <button class="cssbuttons-io-button">
                  Get now
                  <div class="icon">
                    <i class="bi bi-cart"></i>
                  </div>
                </button>
              </p>
            </div>
            <div style={{fontWeight:"bold"}}>
              Availability: 10 products in stock.
            </div>
          </div>
        </div>
        <div className='overview'>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{fontSize:"20px",fontWeight:"bold"}}
          >
            <Tab eventKey="home" title="Overview">
            The DEWALT DWS779 sliding compound miter saw is precision at it's toughest, delivering accuracy and capacity for everyday jobsite use.. This miter saw is designed with a powerful 15 Amp, 3800 RPM motor that delivers extended power and durability. Tall sliding fences support 7-1/2 in. of crown nested and up to 2x14 dimensional lumbers at 90° and 2x10 at 45°. A cam lock miter handle with detent override delivers quick and accurate miter angles.
            </Tab>
          </Tabs>
        </div>&nbsp;
        <Footer/>
    </div>
  )
}
