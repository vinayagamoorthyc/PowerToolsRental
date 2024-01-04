import React from 'react'
import 'typeface-montserrat';
import "./AdminPortal.css";
import { useState } from 'react';
import upimg from "../asset/uploader.jpg";
import Table from 'react-bootstrap/Table';
import "../components/AppBar.jsx";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AdminPortal() {
    const [image, setImage] = useState(upimg);

  return (
    <div>
        <div>

        <div style={{padding:"5px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <button class="Back_Btn">
          <a href='/SignIn' class="back_icon"><svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left svg-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                    </svg></a>
          <a href='/SignIn' class="back_text">Logout</a>
        </button>
        
        <NavDropdown title="Others" id="navbarScrollingDropdown" 
        style={{
            fontFamily:"Montserrat, sans-serif",fontWeight:"800",border:"0.7px solid #969699",padding:"2px",borderRadius:"10px"
            }}>
              <NavDropdown.Item href="/Track">Orders Track</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Reports">
                User Reports</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="/Experience">
                User Experience</NavDropdown.Item>
        </NavDropdown>

        </div>
        </div>
        <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder",marginTop:"-42px"}}>Admin Portal</h3>
        <hr style={{marginTop:"-2px"}} />
        <div className='admin_view'>
        <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
            <div class="form-container__block">
                <div class="form-container__header">
                <p style={{fontWeight:"700"}}>Create or Update your products</p>    
                <form class="form-container__form">
                    <input placeholder="Product Name" type="text"/>
                    <input placeholder="Product ID *" type="number"/>
                    <input placeholder="Product rate" type="number"/>
                    <textarea placeholder='Describe your product'></textarea>
                    <textarea placeholder='Product Overview'></textarea>
                    <input placeholder="Product Availability" type="number"/>
                    <input placeholder="Product Category" type="text"/>
                    <input placeholder="Image Url" type="text" onChange={e=>setImage(e.target.value)}/>
                    <div class="error">
                    <div class="error__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                        &nbsp;If you want to update any product details, the product ID should be correct!</div>
                    </div>
                    <div class="form-container__register-buttons">
                    <button class="form-container__sign">Create</button>
                    <button class="form-container__sign">Update</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div className='admin_view2'>
            <div>
            <div className='edit_image2'>
                    {image && (
                    <div className="image-preview2" style={{ backgroundImage: `url(${image})` }} />
                    )}
                </div>
            </div>
            <div className='form-container2'>
            <div class="error">
                    <div class="error__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                        &nbsp;If you want to find any product ID for Update, you have to press ctrl+F and then you can find any product by their name!</div>
                    </div>
            </div>
            <div class="form-container2" style={{backgroundColor:"#ffc400"}} tabindex="0">
                <div class="form-container__block">
                    <div class="form-container__header">
                    <p style={{fontWeight:"700"}}>Remove or Delete your products</p>
                    <form class="form-container__form">
                        <input placeholder="Product Name" type="text"/>
                        <input placeholder="Product ID" type="number"/>
                        <div class="error">
                        <div class="error__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                            &nbsp;If you want to remove any product, the product name or product ID should be correct!</div>
                        </div>
                        <div class="form-container__register-buttons">
                        <button class="form-container__sign">Remove</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <hr />
        <hr />
        <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder"}}>Products Catalog</h3>
        <hr />
        <div>
        <center>
            <Table striped bordered hover variant="light" style={{width:"90%",fontFamily:'Montserrat, sans-serif'}}>
            <thead>
                <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Rate</th>
                <th>Product Availability</th>
                <th>Product Category</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pin Nailer</td>
                <td>Tool-free jam release and tool-free depth adjust</td>
                <td>21.00</td>
                <td>7</td>
                <td>Triller</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Pin Nailer</td>
                <td>Tool-free jam release and tool-free depth adjust</td>
                <td>21.00</td>
                <td>7</td>
                <td>Triller</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Pin Nailer</td>
                <td>Tool-free jam release and tool-free depth adjust</td>
                <td>21.00</td>
                <td>7</td>
                <td>Triller</td>
              </tr>
            </tbody>    
            </Table>
            </center>
        </div>
    </div>
  )
}
