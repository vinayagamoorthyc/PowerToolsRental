import React, { useEffect } from 'react'
import About_Nav from './About_Nav'
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


export default function ProfilePage() {
  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);
  
  return (
    <div>
      <About_Nav/>
      <div>
      <section style={{backgroundColor:"#eee"}}>
      <MDBContainer className="py-5">
      <MDBRow>
          <MDBCol>
              <center>
                <div className='welcome_profile'><strong>Welcome</strong> Vinayaga Moorthy C!</div>
              </center>
          </MDBCol>
        </MDBRow>
        
        <MDBRow style={{}} data-aos="zoom-in">
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{width:"100%",height:"100%",padding:"55px"}}>
              <MDBCardBody className="text-center">
              <div className="image-preview" style={{ backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp)` }} />
                <p style={{fontWeight:"bolder",marginTop:"10px",fontFamily:"Montserrat, sans-serif"}} className="text-muted mb-1">Vinayaga Moorthy c</p>
                <div style={{marginTop:"10px"}} className="d-flex justify-content-center mb-2">
                  <Link to="/EditProfile" style={{textDecoration:"none"}}><button class="edit">Edit Profile</button></Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4" style={{width:"100%",height:"100%",fontFamily:"Montserrat, sans-serif"}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Vinayaga Moorthy C</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">sanjaiiti2709@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">+91 9360810429</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'> Delivery Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">No.7, Karpaga Vinayagar Nagar,Bus Stop, Othakalmandapam, Coimbatore</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText className='detail_head'>Orders Placed</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">10</MDBCardText>
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
