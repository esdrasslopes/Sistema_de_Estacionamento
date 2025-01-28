import { Link } from 'react-router-dom';

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>How can you contact us?</h1>
      
      <p className='information'>If you have any questions or need support, feel free to reach out to us:</p>

      <div className="contact-info">
        <h2>Email</h2>
        <p>support@fakestore.com</p>
      </div>

      <div className="contact-info">
        <h2>Phone</h2>
        <p>+1 (555) 123-4567</p>
      </div>

      <div className="contact-info">
        <h2>Address</h2>
        <p>123 Fake Street, Imaginary City, Fictionland, 12345</p>
      </div>

      <div className="contact-info">
        <h2>Social Media</h2>
        <p>Follow us on our social media platforms:</p>
        <ul>
          <li><Link to="https://www.facebook.com/fakestore" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
          <li><Link to="https://www.twitter.com/fakestore" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
          <li><Link to="https://www.instagram.com/fakestore" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
