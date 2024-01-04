import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import 'typeface-montserrat';

export default function Footer() {
  return (
    <MDBFooter style={{fontFamily:"Montserrat, sans-serif"}} className='text-center' id='footer' color='warning' bgColor='black'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='https://www.google.com/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='review'>
          <form action='#'>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Review your Experience</strong>
                </p>
              </MDBCol>

              <MDBCol md='2' start>
                <MDBInput contrast type='text' placeholder='Name' className='mb-4' />
              </MDBCol>
              <MDBCol md='4' start>
                <MDBInput contrast type='text' placeholder='Experienced Content' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='warning' type='submit' className='mb-4'>
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='report'>
          <form action='#'>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Report any Error</strong>
                </p>
              </MDBCol>

              <MDBCol md='2' start>
                <MDBInput contrast type='text' placeholder='Name' className='mb-4' />
              </MDBCol>
              <MDBCol md='4' start>
                <MDBInput contrast type='text' placeholder='Experienced Error' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='warning' type='submit' className='mb-4'>
                  Report
                </MDBBtn>
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
          <MDBBtn outline color="warning" floating className='m-1' href='/' role='button'>
            Home
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='/About' role='button'>
            About
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='/AllProducts' role='button'>
            Products
          </MDBBtn>
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
          PowerLend.com
        </a>
      </div>
    </MDBFooter>
  );
}