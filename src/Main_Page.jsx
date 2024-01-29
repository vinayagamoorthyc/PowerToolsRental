import React from 'react'
import AppBar from './components/AppBar';
import Brands, { HorLine } from './components/Brands';
import Features from './components/Features';
import Footer from './components/Footer';
import MainImage from './components/MainImage';
import Reviews from './components/Reviews';
import TopCat from './components/TopCat';
import "./sign_pages/Main_Page.css";
import { useParams } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className='mainPage'>
      <AppBar/>
      <MainImage/>
      <HorLine/>
      <Brands/>
      <TopCat/>
      <Features/>
      <HorLine/>
      <Reviews/>
      <HorLine/>
      <Footer/>
    </div>
  )
}
