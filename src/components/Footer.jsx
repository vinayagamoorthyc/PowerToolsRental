import React, { useState } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import 'typeface-montserrat';
import axios from 'axios';

export default function Footer() {
  const [name, setName] = useState();
  const [experience, setExperience] = useState();
  const [repname, setRepname] = useState();
  const [report, setReport] = useState();

  const SubmitExp=(e)=>{
    axios.post("http://localhost:3002/createExperience", {name, experience})
    .then(res=> {console.log(res)
      alert("Thank you for submitted your experience!")
      window.location.reload()
    })
    .catch(err=>console.log(err))
  }
  const SubmitReport=(e)=>{
    axios.post("http://localhost:3002/createReport", {repname, report})
    .then(()=>{
      alert("Thank you for submitting your error Report to us!")
      window.location.reload()
    })
  }

  return (
    <MDBFooter style={{fontFamily:"Montserrat, sans-serif"}} className='text-center' id='footer' color='warning' bgColor='black'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a href="https://github.com/vinayagamoorthyc?tab=repositories/"><Button variant="outline-warning"><i class="bi bi-github"></i></Button></a>{' '}&nbsp;

          <a href="https://www.facebook.com/profile.php?id=100037768420533"><Button variant="outline-warning"><i class="bi bi-facebook"></i></Button></a>{' '}&nbsp;

          <a href="https://twitter.com/Vinayaga2709/"><Button variant="outline-warning"><i class="bi bi-twitter-x"></i></Button></a>{' '}&nbsp;

          <a href="https://www.instagram.com/_.kolaru.__/"><Button variant="outline-warning"><i class="bi bi-instagram"></i></Button></a>{' '}&nbsp;

          <a href="https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/"><Button variant="outline-warning"><i class="bi bi-linkedin"></i></Button></a>{' '}&nbsp;

          <a href="www.google.com"><Button variant="outline-warning"><i class="bi bi-google"></i></Button></a>{' '}
        </section>

        <section className='review'>
          <form onSubmit={SubmitExp}>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Review your Experience</strong>
                </p>
              </MDBCol>

              <MDBCol md='2' start>
                <MDBInput contrast type='text' placeholder='Name' className='mb-4'
                onChange={(e)=>setName(e.target.value)} required={true}/>
              </MDBCol>
              <MDBCol md='4' start>
                <MDBInput contrast type='text' placeholder='Experienced Content' className='mb-4' required={true}
                onChange={(e)=>setExperience(e.target.value)}/>
              </MDBCol>

              <MDBCol size="auto">
                <input type='Submit' class="btn btn-outline-warning"/>{' '}
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='report'>
          <form onSubmit={SubmitReport}>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Report any Error</strong>
                </p>
              </MDBCol>

              <MDBCol md='2' start>
                <MDBInput contrast type='text' placeholder='Name' className='mb-4' required={true}
                onChange={(e)=>setRepname(e.target.value)}/>
              </MDBCol>
              <MDBCol md='4' start>
                <MDBInput contrast type='text' placeholder='Experienced Error' className='mb-4' required={true}
                onChange={(e)=>setReport(e.target.value)}/>
              </MDBCol>

              <MDBCol size="auto">
              <input type='Submit' class="btn btn-outline-warning" value="Report"/>{' '}
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <h5>OUR MISSION</h5>
          <p>
          At the heart of Power Rend is a commitment to empowering individuals and businesses by providing access to high-quality power tools without the burden of ownership. We strive to be the go-to destination for reliable and efficient tools that enhance productivity and make every project a success.
          </p>
        </section>

        <section className='mb-4'>
          <a href="/ProfilePage"><Button variant="outline-warning">Profile</Button></a>{' '}&nbsp;

          <a href="/About"><Button variant="outline-warning">About</Button></a>{' '}&nbsp;

          <a href="/AllProducts"><Button variant="outline-warning">Products</Button></a>{' '}
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:&nbsp;
        <a className='text-white' href='/About'>
          PowerLend.com
        </a>
      </div>
    </MDBFooter>
  );
}