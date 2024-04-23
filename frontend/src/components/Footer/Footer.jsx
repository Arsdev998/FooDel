import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            eligendi accusamus blanditiis expedita, in totam error. Facere
            dolorum modi repellat, necessitatibus repudiandae hic, officiis at
            earum reprehenderit voluptates, dolore exercitationem.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Police</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62-822-5286-2796</li>
                <li>contact_arsdev998@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 &copy; Arsdev</p>
    </div>
  );
};

export default Footer;
