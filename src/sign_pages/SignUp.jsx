import React, { useEffect } from 'react';
import './/SignUp.css';
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';

export default function SignUp() {
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
      <form class="signUp_content__form">
        <div class="signUp_content__inputs">
          <label>
            <input required="" type="text"/>
            <span>Username</span>
          </label>
          <label>
            <input required="" type="text"/>
            <span>Email</span>
          </label>
          <label>
            <input required="" type="number"/>
            <span>Phone number</span>
          </label>
          <label>
            <input required="" type="password"/>
            <span>Password</span>
          </label>
        </div>
        <Link to="/AdminPortal"><button>Register</button></Link>
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
    </div>
  )
}
