import React from 'react'
import "./ProductAll.css";
import { Link } from 'react-router-dom';
import 'typeface-montserrat';

export default function ProductAll(props) {
  return (
    <div className='all_cart_view'>
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
