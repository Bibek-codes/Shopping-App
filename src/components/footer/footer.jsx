import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot-panel1">
        <p>Super Market Pvt. Ltd.</p>
      </div>
      <div className="foot-panel2">
        <ul>
          <li>
            <p>Get to know Us</p>
          </li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Super Market</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Other Devices</a></li>
        </ul>
        <ul>
          <li>
            <p>Make Money with Us</p>
          </li>
          <li><a href="#">Sell on Super Market</a></li>
          <li><a href="#">Sell on Super Market Handmade</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Self-Publish with Us</a></li>
        </ul>
        <ul>
          <li>
            <p>Other Payment Products</p>
          </li>
          <li><a href="#">Business Card</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Reload Your Balance</a></li>
          <li><a href="#">Currency Converter</a></li>
        </ul>
        <ul>
          <li>
            <p>Let Us Help You</p>
          </li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">Shipping Rates & Policies</a></li>
          <li><a href="#">Returns & Replacements</a></li>
          <li><a href="#">Manage Your Content and Devices</a></li>
          <li><a href="#">Market Assistant</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
