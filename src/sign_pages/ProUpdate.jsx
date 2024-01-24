import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProUpdate() {

  const {id} = useParams();
    const [proname,setProname]=useState();
    const [prorate,setProrate]=useState();
    const [desc,setDesc]=useState();
    const [overview,setOverview]=useState();
    const [avail,setAvail]=useState();
    const [category,setCategory]=useState();
    const [imgurl,setImgurl]=useState();
    const navigate = useNavigate();
    
    useEffect(()=>{
      axios.get("https://powerlendbackend.onrender.com/getUp/"+id)
      .then(e=>{ console.log(e)
        setProname(e.data.proname)
        setProrate(e.data.prorate)  
        setDesc(e.data.desc)    
        setOverview(e.data.overview)
        setAvail(e.data.avail)
        setCategory(e.data.category)
        setImgurl(e.data.imgurl)
      })
      .catch(err=>console.log(err))
    }, [])
    const UpPro=(e)=>{
      e.preventDefault();
      axios.put("https://powerlendbackend.onrender.com/updateProduct/"+id, {proname, prorate, desc, overview, avail, category, imgurl})
      .then(()=>{
        navigate("/AdminPortal")
      }).catch(err=>console.log(err))
    }
    return (
      <center style={{marginTop:"70px"}}>
        <div className='admin_view'>
          <div class="form-container2" style={{backgroundColor:"#ffc400",marginTop:"-5px",width:"550px"}} tabindex="0">
              <div class="form-container__block">
                  <div class="form-container__header">
                    <p style={{fontWeight:"700"}}>Update your product Details</p>    
                    <form class="form-container__form" onSubmit={UpPro}>
                        <input placeholder="Product Name" type="text" required={true} value={proname} onChange={(e)=>setProname(e.target.value)}/>
                        <input placeholder="Product rate" type="number" required={true} onChange={(e)=>setProrate(e.target.value)} value={prorate}/>
                        <textarea placeholder='Describe your product' required={true} onChange={(e)=>setDesc(e.target.value)} value={desc}></textarea>
                        <textarea placeholder='Product Overview' required={true} onChange={(e)=>setOverview(e.target.value)} value={overview}></textarea>
                        <input placeholder="Product Availability" type="number" required={true} onChange={(e)=>setAvail(e.target.value)} value={avail}/>
                        <input placeholder="Product Category" type="text" required={true} onChange={(e)=>setCategory(e.target.value)} value={category}/>
                        <input placeholder="Image Url" type="text" required={true} value={imgurl} onChange={(e)=>setImgurl(e.target.value)}/>
                        <div class="error">
                        <div class="error__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                            &nbsp;If you want to Update any product in inventory, Details should be valid!</div>
                        </div>
                        <div class="form-container__register-buttons">
                        <input type='submit' class="form-container__sign" value="Update Product Details"/>
                        </div>
                    </form>
                  </div>
              </div>
          </div>
          <div>
            <div className='edit_image2'>
                    <strong>Image Preview</strong>
                    {imgurl && (
                    <div className="image-preview2" style={{ backgroundImage: `url(${imgurl})` }} />
                    )}
                </div>
            </div>
        </div>
      </center>
    );
  }