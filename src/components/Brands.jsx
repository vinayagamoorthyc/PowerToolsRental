import 'typeface-montserrat';
import './/Brands.css';
import Aos from 'aos';
import { useEffect } from 'react';

function Brands() {
  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);
  return (
   <div>
    <h2 className='topic' style={{textAlign: "center",marginTop: "20px", fontFamily:"Montserrat, sans-serif"}}>Power Tool Brands</h2>
      <center>
      <div className='brands' data-aos="zoom-in">
        
          <div class="brand-details">
            <a href="https://www.boschtools.com/us/en/">
            <img src="data:image/png;base64,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" alt=""width={150} />
            </a>
          </div>
        
          <div class="brand-details">
            <a href="https://www.kelch.de/en/products/tool-presetters/premium-line/kenova-set-line-v6xx/">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfb1LtALzHNIU4vuhF-0BksWfkv6YCZfbtA&usqp=CAU' width={150} alt="My Image"/>
            </a>          
          </div>

          <div class="brand-details">
            <a href="https://www.tritontools.com/en-US">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfqcSRqRci7OnkMZouXux1uDlZ9UNAfh5kg&usqp=CAU" width={150} alt="" />
            </a>
          </div>
        
          <div class="brand-details">
            <a href="https://www.milwaukeetool.com/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWj7llHxGaaJJ1JSFc-mxn4ThYi5EjXUQITphZSXB1lSPbKZFiE-ja28PLF3XPu35mDQ&usqp=CAU" alt="" width={150} />
            </a>
          </div>
        
          <div class="brand-details">
            <a href="https://www.dewalt.com/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuN566HO-hU42wZeuYmOd5_ZliyotjUkKkA&usqp=CAU" alt="" width={150}/>
            </a>
          </div>

          <div class="brand-details">
            <a href="https://www.husky.com/">
            <img src="https://www.husky.com/wp-content/uploads/2020/12/HUSKY-header-logo.svg" alt="" width={150}/>
            </a>
          </div>
      </div>
      </center>
      </div>
      
  );
}
export function HorLine(){
    return(
        <><hr style={{color: "gray"}}/></>
    );
}
export default Brands;