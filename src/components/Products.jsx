import React, { useEffect } from 'react';
import ".//TopCat.css";
import 'typeface-montserrat';
import Aos from 'aos';

export default function Products(props) {

  return (
        <>
        
    <div class="card">
      <div class="">
        <img src={props.url} alt="" width={props.width}/>
      </div>
      <div class="text">
        <p class="h3">{props.name}</p>

        <a href="/ProductPage"  style={{textDecoration:"none"}}><button class="ui-btn">
              <span>View Tool</span>
            </button></a>
      </div>
    </div>

        </>
  )
}

