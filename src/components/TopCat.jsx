import React from 'react'
import ".//TopCat.css";
import Products from './Products';
import 'typeface-montserrat';
import { allProducts } from '../otherPages/allData.js';

export default function TopCat() {
    
      const product=allProducts.map(e=>(
        <Products url={e.url} name={e.name} width={e.width} price={e.price} descp={e.descp} />
      ));
    return (
        <div >
            <h2 className='title' id='top_pro'>Top Products</h2>
                <div className='card_grid'>
                    {product}
                </div>
        </div>
    )
}
