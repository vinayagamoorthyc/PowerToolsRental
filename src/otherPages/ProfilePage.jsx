import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import "../components/Search.css"; 
import "../otherPages/ProductPage.css";
import "../otherPages/ProfilePage.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'typeface-montserrat';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppBar from '../components/AppBar';


export default function ProfilePage() {

  const userid = window.localStorage.getItem("userid");
  const [username, setUsername]=useState("Nothing to show");
  const [email, setEmail]=useState("Nothing to show");
  const [phone, setPhone]=useState("0000000000");
  const [address, setAddress]=useState("Nothing to show");
  const [orders, setOrders]=useState("Nothing to show");


  useEffect(()=>{
    axios.get("https://powerlendbackend.onrender.com/getUser/"+userid)
    .then((e)=>{
      setUsername(e.data.username);
      setEmail(e.data.email);
      setPhone(e.data.phone);
      setAddress(e.data.address);
      setOrders(e.data.orders);
    }).catch(err=>console.log(err));
    Aos.init({duration: 2000});
    }, []);
  
  return (
    <div>
      <AppBar/>
      <div>
      <section style={{backgroundColor:"#eee"}}>
      <MDBContainer className="py-5">
      <MDBRow>
          <MDBCol>
              <center>
                <div className='welcome_profile'><strong>Welcome</strong> {username}!</div>
              </center>
          </MDBCol>
        </MDBRow>
        
        <MDBRow data-aos="zoom-in">
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{width:"100%",height:"100%",padding:"55px"}}>
              <MDBCardBody className="text-center">
              <div className="image-preview" style={{ backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp)` }} />
                <p style={{fontWeight:"bolder",marginTop:"10px",fontFamily:"Montserrat, sans-serif"}} className="text-muted mb-1">{username}</p>
                <div style={{marginTop:"10px"}} className="d-flex justify-content-center mb-2">
                  <Link to={`/EditProfile/${userid}`} style={{textDecoration:"none"}}><button class="edit">Edit Profile</button></Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4" style={{width:"100%",height:"100%",fontFamily:"Montserrat, sans-serif",textAlign:"left"}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="5">
                    <MDBCardText className='detail_head'>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{username}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="9">
                    <MDBCardText className='detail_head'>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">+91 {phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="9">
                    <MDBCardText className='detail_head'> Delivery Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText className='detail_head'>Orders Placed</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{orders}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
      </div>
      <Footer/>
    </div>
  )
}
