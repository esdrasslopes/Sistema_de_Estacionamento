import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>About Parkify</h3>
          <p>
            Parkify is your go-to solution for smart and efficient parking.
            Founded in 2020, we are dedicated to making parking stress-free,
            combining technology with customer-centric services.
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@parkify.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Innovation Drive, Tech City, TX</li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><Link to="#">Facebook</Link></li>
            <li>
            <Link to="#">Instagram</Link>
            </li>
            <li>
            <Link to="#">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Parkify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
