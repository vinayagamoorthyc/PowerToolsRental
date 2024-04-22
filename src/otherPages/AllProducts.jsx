import React, { useEffect } from 'react';
import ProductAll from './ProductAll';
import "./AllProducts.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import 'typeface-montserrat';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [products,setProducts]=useState([]);
  const [load,setLoad] = useState(false);

  useEffect(()=>{
    axios.get('https://powerlendbackend.onrender.com/getProduct')
    .then(e =>{
      setProducts(e.data);
      setLoad(true);
    })
    .catch(err=>console.log(err));
    }, []);

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter( (item)=> {

    const categoryMatch = filter === 'all' || item.category === filter;

    const searchMatch = item.proname.toLowerCase().includes(search.toLowerCase());

    return categoryMatch&searchMatch;
  });

  return (
    <div>
      <div style={{
        background:"black", display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingLeft:"7px"
        }} className='blacknav'>
        <Link to='/'><button class="Back_Btn">
          <Link to='/' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						  </svg></Link>
          <Link to='/' class="back_text">Home</Link>
        </button></Link>

        <div style={{
          padding:"10px", display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"20px"
        }}>
            <NavDropdown
            title={`Filter by ${filter}`} 
            onSelect={handleFilterChange} style={{color:"#000",fontFamily:"  Montserrat, sans-serif"}}>
              <NavDropdown.Item eventKey="all">All</NavDropdown.Item>
              <NavDropdown.Item eventKey="Home Improvement">Home Improvement</NavDropdown.Item>
              <NavDropdown.Item eventKey="Building Supplies">Building Supplies</NavDropdown.Item>
              <NavDropdown.Item eventKey="Power Saws">Power Saws</NavDropdown.Item>
              <NavDropdown.Item eventKey="Welding">Welding</NavDropdown.Item>
              <NavDropdown.Item eventKey="Generator">Generator</NavDropdown.Item>
              <NavDropdown.Item eventKey="Compressor">Compressor</NavDropdown.Item>
            </NavDropdown>
            <div className="search">
                <Form className="d-flex">
                <input type="text" name="text" class="input" placeholder="Search here..." onChange={handleSearchChange}></input>
                <Button variant="warning" style={{borderRadius: '80px'}}><i class="bi bi-search"></i></Button>
              </Form>
            </div>
          </div>
        </div>
        <div className='all_view'>
        {filteredProducts?.map(e=>(
         <ProductAll url={e.imgurl} name={e.proname} rate={e.prorate} desc={e.desc} avail={e.avail} _id={e._id}/>
        ))}
         <div hidden={load} class="loader"></div>
        </div>
        <Footer/>
    </div>
  )
}
