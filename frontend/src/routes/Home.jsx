import Slongan from "../components/Slongan";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Slongan />
      <div className="our-team">
        <h2>Welcome to Parkify! Your Smart Parking Solution!</h2>
        <p>
          Our team is made up of dedicated professionals passionate about
          technology and customer satisfaction. We are committed to delivering a
          seamless and efficient parking experience tailored to your needs.
        </p>
        <p>
          With Parkify, you can find a parking spot quickly, manage your stays
          effortlessly, and handle payments with just a few clicks. Innovation
          and convenience are at the heart of everything we do, ensuring you
          have more time to focus on what matters most.
        </p>
        <p>
          To start enjoying all the features of our system, please log in. If
          you already have an account, simply sign in with your credentials. New
          here? Sign up today and discover how easy parking can be with Parkify!
        </p>
        <p>
          Our team is here to support you every step of the way. Park with ease,
          park with Parkify!
        </p>
        <div className="team-achievements">
          <h3>Our Achievements</h3>
          <div className="achievements-list">
            <div className="achievement-item">
              <i className="fas fa-award"></i>
              <p>
                Awarded <strong>"Startup of the Year"</strong> in 2023
              </p>
            </div>
            <div className="achievement-item">
              <i className="fas fa-users"></i>
              <p>
                Over <strong>1M customers</strong> served globally
              </p>
            </div>
            <div className="achievement-item">
              <i className="fas fa-parking"></i>
              <p>
                Implemented <strong>10+ successful parking solutions</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
