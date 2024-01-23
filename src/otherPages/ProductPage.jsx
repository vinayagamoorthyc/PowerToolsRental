import React, { useEffect, useState } from 'react'
import './/ProductPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../components/Footer';
import 'typeface-montserrat';
import Aos from 'aos';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage() {
  const {id} = useParams();
  const [proname,setProname]=useState();
    const [prorate,setProrate]=useState();
    const [desc,setDesc]=useState();
    const [overview,setOverview]=useState();
    const [avail,setAvail]=useState();
    const [category,setCategory]=useState();
    const [imgurl,setImgurl]=useState();

  console.log(id)
  useEffect(()=>{
    axios.get("http://localhost:3002/getUp/"+id)
      .then(e=>{ console.log(e)
        setProname(e.data.proname)
        setProrate(e.data.prorate)  
        setDesc(e.data.desc)    
        setOverview(e.data.overview)
        setAvail(e.data.avail)
        setCategory(e.data.category)
        setImgurl(e.data.imgurl)
      })
      .catch(err=>console.log(err))
    Aos.init({duration: 1500});
    }, []);
  return (
    <div>
      <div style={{background:"black", padding:"5px",position:"fixed",width:"100%",zIndex:"1"}} className='blacknav'>
        <a href='/'><button class="Back_Btn">
          <a href='/' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						  </svg></a>
          <a href='/' class="back_text">Home</a>
        </button></a>
        </div>
        <div className='pro_view'>
          <div  data-aos="zoom-in">
            <img className='pro_img' src={imgurl} width={350} alt="" />
          </div>
          <div className='pro_details_view'>
            <div>
              <h4>{proname}</h4>
            </div>
            <form action="">
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
              <h4 style={{color:"#ffc506"}}>₹ {prorate}.00</h4>
            </div>
            <div>
              <div>
                {desc}
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
                <button type='submit' class="cssbuttons-io-button">
                  Get now
                  <div class="icon">
                    <i class="bi bi-cart"></i>
                  </div>
                </button>
              </p>
            </div>
            </form>
            <div style={{fontWeight:"bold"}}>
              Availability: &nbsp;{avail} products in stock
            </div>
            <div style={{fontWeight:"bold"}}>
              Category:&nbsp;&nbsp;{category}
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
              {overview}
            </Tab>
          </Tabs>
        </div>&nbsp;
        <Footer/>
    </div>
  )
}
