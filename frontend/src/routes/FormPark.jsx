import Slongan from "../components/Slongan";

import Form from "../components/Form";

import { useContext, useEffect } from "react";

import { ParkContext } from "../context/park";

import { useNavigate } from "react-router-dom";

const FormPark = () => {
  const { user } = useContext(ParkContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <Slongan />
      <Form />
    </div>
  );
};

export default FormPark;
