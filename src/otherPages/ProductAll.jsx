import React, { useEffect } from 'react'
import "./ProductAll.css";
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';

export default function ProductAll(props) {
    useEffect(()=>{
        Aos.init({duration: 800});
        }, []);
  return (
    <div className='all_cart_view' data-aos="zoom-in">
        <div>
            <img src={props.url} width={150} alt="" />
        </div>
        <div className='all_cart_details'>
            <div style={{fontWeight:"500",textAlign:"center"}}>{props.name}</div>
            <div style={{fontWeight:"bolder"}}>₹ <u>{props.rate}.00</u> /day</div>
            <div style={{fontWeight:"bolder"}}>Available: {props.avail} left</div>
            <div><Link to={`/ProductPage/${props._id}`}><button class="but" onClick={()=>window.scrollTo(0,0)}>
                    <span class="but_lg">
                    <span class="but_sl"></span>
                    <span class="but_text">View Tool</span>
                    </span>
                </button></Link>
            </div>
        </div>
    </div>
      )
}
