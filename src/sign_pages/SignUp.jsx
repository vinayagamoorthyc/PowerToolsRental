import React, { useEffect, useState } from 'react';
import './/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function SignUp() {

  const [username, setUsername]=useState();
  const [email, setEmail]=useState();
  const [phone, setPhone]=useState();
  const [password, setPassword]=useState();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [load,setLoad] = useState(true);

  const handleSubmit=(e)=>{
    setLoad(false);
    e.preventDefault();
    axios.post("https://powerlendbackend.onrender.com/register", {username, email, phone, password})
    .then((e)=>{
      handleShow();
      setLoad(true);
    }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    Aos.init({duration: 1500});
    }, []);
  return (
    <div>
      <div className='SignUp_page'>
      <div class="holder">
        <div class="news">
        Welcome to Power Lend!, your trusted partner in power tools rental!
        Your satisfaction is our priority.
        </div>
      </div>
      <div className='SignUp_Welcome'>
      <button class="ui3-btn">
      <span className='signUp_word'>
        Sign Up
      </span>
      </button>
    </div>
    <div>
    <div class="signUp_container" data-aos="zoom-in">
    <div class="signUp_content">
    <img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" width={140} alt="" />
      <form class="signUp_content__form" onSubmit={handleSubmit}>
        <div class="signUp_content__inputs">
          <label>
            <input required={true} type="text" onChange={(e)=>setUsername(e.target.value)}/>
            <span>Username</span>
          </label>
          <label>
            <input required={true} type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <span>Email</span>
          </label>
          <label>
            <input required={true} type="number" onChange={(e)=>setPhone(e.target.value)}/>
            <span>Phone number</span>
          </label>
          <label>
            <input required={true} type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <span>Password</span>
          </label>
        </div>
        <center>
          <button className='register' type='submit' hidden={!load}>Register</button>
          <div class="loader" hidden={load}></div>
        </center>
      </form>
      <div class="signUp_content__forgot-buttons">
        <button>
          <span><Link to="/SignIn" style={{textDecoration: 'none', color: 'black'}}>Already have an Account!</Link></span>
        </button>
        <div class="signUp_content__or-text">
        <span></span>
        <span>Contact</span>
        <span></span>
        </div>
        <button>
          <span className='signUp_contact'>
            <a style={{color:"black"}} href="https://www.instagram.com/_.kolaru.__/"><i class="bi bi-instagram"></i></a>&nbsp;&nbsp;&nbsp;
            <a style={{color:"black"}} href="https://github.com/vinayagamoorthyc?tab=repositories/"><i class="bi bi-github"></i></a>&nbsp;&nbsp;&nbsp;
            <a style={{color:"black"}} href="https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/"><i class="bi bi-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
            <a style={{color:"black"}} href="https://www.facebook.com/profile.php?id=100037768420533"><i class="bi bi-facebook"></i></a>
          </span>
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
    <Modal show={show} onHide={handleClose} backdrop="static" contentClassName='modal-bg'>
                    <Modal.Header>
                      <Modal.Title>Registered Successfully!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You created an account successfully and now you can login with your Email and Password.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="warning" onClick={()=>navigate("/SignIn")}>
                        Ok
                      </Button>
                    </Modal.Footer>
                  </Modal>
    </div>
  )
}
