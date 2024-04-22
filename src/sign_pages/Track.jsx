import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Track() {
  const [hide,setHide]=useState(true);
  const token = window.localStorage.getItem("token");

  useEffect(()=>{
    if(token!=null){
      setHide(false);
    }else{
      setHide(true);
    }
  })
  return (
    <div hidden={hide}>
        <div style={{padding:"5px"}}>
            <Link to="/AdminPortal"><button class="Back_Btn">
            <Link to='/AdminPortal' class="back_icon"><svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                            </svg></Link>
            <Link to='/AdminPortal' class="back_text">Back</Link>
            </button></Link>
            <h3 style={{textAlign:"center",fontFamily:'Montserrat, sans-serif',fontWeight:"bolder",marginTop:"-40px"}}>Orders Tracking</h3>
            <hr />
        </div>
        <div>
          <div className="container mt-4" ><center>
          <Table striped bordered hover variant="light" style={{width:"90%",fontFamily:'Montserrat, sans-serif',textAlign:"center"}}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>User Name</th>
                  <th>Rental Status</th>
                  <th>Remove(If Returned)</th>
                </tr>
              </thead>
              <tbody>
                  <tr key=''>
                    <td>154</td>
                    <td>Circular Saw</td>
                    <td>Randip Leon</td>
                    <td>Not Returned</td>
                    <td><button class="btn btn-warning" hidden={true}>Remove</button></td>
                  </tr>
                  <tr key=''>
                    <td>159</td>
                    <td>Vending cleaner</td>
                    <td>Jeberson vedha Singh</td>
                    <td>Returned</td>
                    <td><button class="btn btn-warning">Remove</button></td>
                  </tr>
                  <tr key=''>
                    <td>167</td>
                    <td>Static Saw</td>
                    <td>Sanjay</td>
                    <td>Not Returned</td>
                    <td><button class="btn btn-warning" hidden={true}>Remove</button></td>
                  </tr>
              </tbody>
            </Table>
            </center>
          </div>
        </div>
    </div>
  )
}
