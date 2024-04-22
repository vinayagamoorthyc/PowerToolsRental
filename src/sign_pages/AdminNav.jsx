import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function AdminNav() {
    const navigate = useNavigate();
    const Logout=()=>{
        window.localStorage.clear();
        navigate("/");
      }
  return (
    <div>
      <div fluid className='appbar' id='topview' >
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow-lg p-2 mb-1 bg-body navbar">
        <Navbar.Brand>
          <img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" alt="" width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px'}}
          >
            <Nav.Link href="/Track" style={{fontWeight:"500"}}>Track</Nav.Link>
            <Nav.Link href="/Reports" style={{fontWeight:"500"}}>Reports</Nav.Link>
            <Nav.Link href="/Experience" style={{fontWeight:"500"}}>Experience</Nav.Link>
            <Nav.Link href="/Users" style={{fontWeight:"500"}}>Users</Nav.Link>
          </Nav>
          <Nav>
          <button class="ui-btn" onClick={()=>Logout()}>
              <span>LogOut</span>
            </button>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
          </div>
    </div>
  )
}
