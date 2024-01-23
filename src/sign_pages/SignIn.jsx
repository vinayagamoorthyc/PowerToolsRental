import React, { useEffect } from 'react'
import './/SignIn.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';

export default function SignIn() {
  useEffect(()=>{
    Aos.init({duration: 1500});
    }, []);
  return (
    <div className='SignIn_page'>
      <div class="holder">
        <div class="news">
        Welcome to Power Lend!, your trusted partner in power tools rental!
        Your satisfaction is our priority.
        </div>
      </div>
      <div className='SignIn_Welcome'>
      <button class="ui2-btn">
      <span className='signIn_word'>
        Sign In 
      </span>
      </button>
    </div>
    <div>
    <div class="signIn_container" data-aos="zoom-in">
    <div class="content">
    <img src="https://i.postimg.cc/ZKR8bvHf/Power-Tools.png" width={140} alt="" />
      <form class="content__form">
        <div class="content__inputs">
          <label>
            <input required="" type="text"/>
            <span>Phone number or email</span>
          </label>
          <label>
            <input required="" type="password"/>
            <span>Password</span>
          </label>
        </div>
        <Link className='login_btn' to='/'><button>Log In</button></Link>
        <Link to="/AdminPortal" style={{color: 'black',fontSize:"13px",fontWeight:"600"}}>Temporary AdminPortal</Link>
      </form>
      <div class="content__or-text">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>
      <div class="content__forgot-buttons">
        <button>
          <span><Link to="/SignUp" style={{textDecoration: 'none', color: 'black'}}>Don't have an Account!</Link></span>
        </button>
        <div class="content__or-text">
        <span></span>
        <span>Contact</span>
        <span></span>
        </div>
        <button>
          <span className='signIn_contact'>
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
  )
}
