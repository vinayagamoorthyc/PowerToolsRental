import React, { useEffect, useState } from 'react'
import ".//TopCat.css";
import Products from './Products';
import 'typeface-montserrat';
import { allProducts } from '../otherPages/allData.js';
import axios from 'axios';

export default function TopCat() {

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3002/getProduct')
        .then(e =>setProducts(e.data))
        .catch(err=>console.log(err));
        }, []);

    const product=allProducts.map(e=>(
        <Products url={e.url} name={e.name} id={e._id} rate={e.rate}/>
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