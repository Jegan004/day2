import React from 'react'
import img1 from "../Images/w1.webp";
import img2 from "../Images/w2.webp";
import img3 from "../Images/w3.webp"
import img4 from "../Images/w4.webp";
import img5 from "../Images/w5.webp"
import img6 from "../Images/w6.webp"
import img7 from "../Images/w7.webp"
import img8  from "../Images/w8.webp"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <center><h2>Neo Splash Blue Dial Stainless Steel Strap Watch</h2><br></br></center>
        <center><h2>Price : ₹6,995</h2><br></br></center>
      <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <center><h2>Titan Talk- Touch Screen Watch </h2><br></br><br></br></center>
        <center><h2>Price : ₹9,995</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <center><h2>Metal Mechanicals Blue Dial Stainless Steel Strap Watch</h2><br></br></center>
        <center> <h2>Price : ₹24,495</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <center><h2>Edge Mechanical Brown Color Strap</h2><br></br><br></br></center>
        <center><h2>Price : ₹2,12,520</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <center><h2>Metal Mechanics Blue Strap Watch</h2><br></br><br></br></center>
        <center><h2>Price : ₹25,955</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <center><h2>Infinity Display Silver Dial Leather Strap Watch</h2><br></br></center>
        <center><h2>Price : ₹8,995</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <center><h2>Infinity Display Silver Dial Leather Strap Watch</h2><br></br></center>
        <center><h2>Price : ₹8,995</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <center><h2>Rose Gold Dial  Stainless Steel Strap Watch</h2><br></br></center>
        <center><h2>Price : ₹11,820</h2><br></br></center>
        <center><a href='' className='btn'>Buy Now</a></center>
     </div>

    </div>
    </section>
  )
}
