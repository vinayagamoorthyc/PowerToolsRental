import React, { useEffect } from 'react'
import "./ProductAll.css";
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';

export default function ProductAll(props) {
    useEffect(()=>{
        Aos.init({duration: 2000});
        }, []);
  return (
    <div className='all_cart_view' data-aos="zoom-in">
        <div>
            <img src={props.url} width={130} alt="" />
        </div>
        <div className='all_cart_details'>
            <div style={{fontWeight:"bolder"}}>{props.name}</div>
            <div style={{textAlign:'center'}}>{props.desc}</div>
            <div style={{fontWeight:"bolder"}}>${props.rate}.00</div>
            <div style={{fontWeight:"bold"}}>Available: {props.avail} left</div>
            <div><Link to="/ProductPage"><button class="but">
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
