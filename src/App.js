import React from 'react';
import './App.css';
import it from 'C:/Users/user/makeup/src/it.jpg';
import iii from 'C:/Users/user/makeup/src/iii.jpg';
import vv from 'C:/Users/user/makeup/src/vv.jpg';
import tt from 'C:/Users/user/makeup/src/tt.jpg';
import cc from 'C:/Users/user/makeup/src/cc.jpg';
import bb from 'C:/Users/user/makeup/src/bb.jpg';
import like1 from 'C:/Users/user/makeup/src/like1.png'
import khsara from 'C:/Users/user/makeup/src/khsara.jpg'
import udzi from 'C:/Users/user/makeup/src/udzi.jpg'
import www from 'C:/Users/user/makeup/src/www.jpg'
import tttt from 'C:/Users/user/makeup/src/tttt.jpg'

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={it} alt="Luna Makeup Store Logo" />
          </div>
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Luna Makeup Store</h1>
          <p>Your journey towards beauty begins here.</p>
        </div>
      </div>

      <div className="offer-section">
        <h2>WHAT WE OFFER</h2>
        <div className="offer-boxes">
          <div className="offer-box">
            <img src={vv} alt="Nails" />
            <h3>Nails</h3>
          </div>
          <div className="offer-box">
            <img src={cc} alt="Facials" />
            <h3>Facials</h3>
          </div>
          <div className="offer-box">
            <img src={iii} alt="Eye Lashes" />
            <h3>Eye Lashes</h3>
          </div>
          <div className="offer-box">
            <img src={tt} alt="Hair Coloring" />
            <h3>Hair Coloring</h3>
          </div>
        </div>
      </div>

      <div className="prices-section">
        <h2>PRICES</h2>
        <div className="prices-image-container">
          <img src={bb} alt="Prices Background" className="prices-bg-image" />
          <div className="prices-content">
            <div className="price-box">
              <h3>Service 1</h3>
              <p>Details about service 1 and its pricing.</p>
            </div>
            <div className="price-box">
              <h3>Service 2</h3>
              <p>Details about service 2 and its pricing.</p>
            </div>
            <div className="price-box">
              <h3>Service 3</h3>
              <p>Details about service 3 and its pricing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <h2>OUR PRODUCTS</h2>
        <div className="product-boxes">
          <div className="product-box">
            <img src={udzi} alt="Product 1" />
            <h3>Foundation</h3>
            <p>$48</p>
            <button className="heart-button"><img src={like1} alt="Like" /></button>
          </div>
          <div className="product-box">
            <img src={khsara} alt="Product 2" />
            <h3>Sunscreen</h3>
            <p>$12</p>
            <button className="heart-button"><img src={like1} alt="Like" /></button>
          </div>
          <div className="product-box">
            <img src={tttt} alt="Product 3" />
            <h3>Moisturizer</h3>
            <p>$21</p>
            <button className="heart-button"><img src={like1} alt="Like" /></button>
          </div>
          <div className="product-box">
            <img src={www} alt="Product 4" />
            <h3>Skin Toner</h3>
            <p>$18</p>
            <button className="heart-button"><img src={like1} alt="Like" /></button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: support@lunamakeup.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Beauty Lane, Glamour City, USA</p>
        </div>
        <div className="footer-socials">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;