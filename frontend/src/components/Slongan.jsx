import Car from "../assets/11314859.png";

import "./Slogan.css";

const Slongan = () => {
  return (
    <div className="slogan">
      <div className="car"> <img src={Car} alt="car photo" /></div>
      <div className="info">
        <h2>Arrive, park, enjoy.</h2>
        <h1>We’ve got the rest covered.</h1>
      </div>
    </div>
  );
};

export default Slongan;
