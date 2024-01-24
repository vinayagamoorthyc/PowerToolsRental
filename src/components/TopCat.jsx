import React, { useEffect, useState } from 'react'
import ".//TopCat.css";
import Products from './Products';
import 'typeface-montserrat';
import { allProducts } from '../otherPages/allData.js';
import axios from 'axios';

export default function TopCat() {

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://powerlendbackend.onrender.com/getProduct')
        .then(e =>setProducts(e.data))
        .catch(err=>console.log(err));
        }, []);

    const product=products.map(e=>(
        <Products url={e.imgurl} name={e.proname} id={e._id} rate={e.prorate}/>
    ));
    return (
        <div>
            <h2 className='title' id='top_pro'>Our Products</h2>
            <center>
                <div className='card_grid'>
                    {product}
                </div>
                </center>
        </div>
    )
}
