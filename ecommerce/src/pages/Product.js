import React from 'react';
import './Product.css';
const Product = () => {
  return (
    <div className="small-container">
      <div className="row">
        <div className="col-4">
          <div className="list">
            <a href="#wsection">WOMEN'S FASHION</a>
            <ul>
              <li><a href="#w1">Women's Clothing</a></li>
              <li><a href="#w2">Cosmetics</a></li>
              <li><a href="#w3">Women's Watches</a></li>
              <li><a href="#w4">Women's Sunglasses</a></li>
              <li><a href="#w5">Handbags & Clutches</a></li>
              <li><a href="#w6">Slippers</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="list">
            <a href="#msection">MEN'S FASHION</a>
            <ul>
              <li><a href="#m1">Men's Clothing</a></li>
              <li><a href="#m2">Men's Belts</a></li>
              <li><a href="#m3">Men's Watches</a></li>
              <li><a href="#m4">Men's Sunglasses</a></li>
              <li><a href="#m5">Men's Wallets</a></li>
              <li><a href="#m6">Men's Shoes</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="list">
            <a href="#ksection">KIDS FASHION</a>
            <ul>
              <li><a href="#k1">Boys Clothing</a></li>
              <li><a href="#k2">Girls Clothing</a></li>
              <li><a href="#k3">Baby Clothing</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="list">
            <a href="#csection">COSMETICS</a>
            <ul>
              <li><a href="#c1">Eyeliner & Eyeshadow</a></li>
              <li><a href="#c2">Lipstick & Lipliners</a></li>
              <li><a href="#c3">Foundation & Concealers</a></li>
              <li><a href="#c4">Jewelry</a></li>
              <li><a href="#c5">Accessories</a></li>
              <li><a href="#c6">Nail Accessories</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="list">
            <a href="#hsection">HOME & LIVING</a>
            <ul>
              <li><a href="#h1">Artificial Flowers</a></li>
              <li><a href="#h2">Wall Tapestries</a></li>
              <li><a href="#h3">Wall Stickers</a></li>
              <li><a href="#h4">Dreamcatchers</a></li>
              <li><a href="#h5">Wall Clocks</a></li>
              <li><a href="#h6">Wall Shelves</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="list">
            <a href="#gsection">THE GIFT CORNER</a>
            <ul>
              <li><a href="#g1">Cards</a></li>
              <li><a href="#g2">Exclusive Gift Ideas</a></li>
              <li><a href="#g3">Gift Vouchers</a></li>
              <li><a href="#g4">Snowglobe</a></li>
              <li><a href="#g5">Teddy Bears</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
