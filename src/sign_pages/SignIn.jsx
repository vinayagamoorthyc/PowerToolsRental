import React, { useEffect, useState } from 'react'
import './/SignIn.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from 'react-router-dom';
import 'typeface-montserrat';
import Aos from 'aos';
import axios from 'axios';

export default function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3002/login", {email, password})
    .then((res)=>{window.localStorage.setItem("IsLogedIn", true);
    window.localStorage.setItem("userid", res.data.id);
    window.localStorage.setItem("token", res.data.tok);
      if(res.data.Status === "success"){
        if(res.data.role === "admin"){
          navigate("/AdminPortal");
        }else{
          navigate("/");
        }
      }else{
        alert("error")
      }
    }).catch(err=>console.log(err))
  }

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
      <form class="content__form" onSubmit={handleSubmit}>
        <div class="content__inputs">
          <label>
            <input required={true} type="text" onChange={e=>setEmail(e.target.value)}/>
            <span>Enter your Email</span>
          </label>
          <label>
            <input required={true} type="password" onChange={e=>setPassword(e.target.value)}/>
            <span>Password</span>
          </label>
        </div>
        <div className='login_btn'><button type='submit'>Log In</button></div>
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
