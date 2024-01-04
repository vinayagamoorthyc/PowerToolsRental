import React from 'react';
import 'typeface-montserrat';
import "../otherPages/EditProfile.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function EditProfile() {
    const [image, setImage] = useState("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp");

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <center>
      <div class="form-container2">
                <div className='edit_image'>
                    {image && (
                    <div className="image-preview" style={{ backgroundImage: `url(${image})` }} />
                    )}
                    <div className="custom-upload">
                        <label className='uploader' htmlFor="custom-image-upload">Upload Profile Image</label>
                        <input
                        type="file"
                        id="custom-image-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        />
                        </div>
              </div>
              <form class="form2">
                <div class="form-group2">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required=""/>
                </div>
                <div class="form-group2">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required=""/>
                </div>
                <div class="form-group2">
                  <label for="phone">Mobile Number</label>
                  <input type="number" id="phone" name="phone" placeholder="Enter Mobile number" required=""/>
                </div>
                <div class="form-group2">
                  <label for="address">Delivery Address</label>
                  <input type="text" id="address" name="address" placeholder="Enter your address" required=""/>
                </div>

                <Link to="/ProfilePage" style={{textDecoration:"none"}}><button class="form-submit-btn" type="submit">Save Changes</button></Link>
              </form>

      </div>
    </center>
  )
}
