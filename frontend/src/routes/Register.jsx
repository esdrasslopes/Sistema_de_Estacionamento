import Password from "../components/Password";

import useToast from "../hooks/useToast";

import { ParkContext } from "../context/park";

import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { data: dataContext, setData } = useContext(ParkContext);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const { data, httpConfig, error } = useFetch("/user");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      useToast("Fill in all the fields", "error");
      return;
    }

    if (password !== confirmPassword) {
      useToast(
        "The password and the confirm password must be the same password",
        "error"
      );
      return;
    }

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    httpConfig("POST", user);

    setData((prev) => ({
      ...prev,
      email: user.email,
      password: user.password,
    }));
  };

  useEffect(() => {
    if (data) {
      setData((prev) => ({ ...prev, login: true }));

      useToast("User registered successfully!");

      setName("");

      setEmail("");

      setPassword("");

      setConfirmPassword("");

      navigate("/park/form");
    }

    if (error) {
      useToast(error, "error");
    }
  }, [data, error]);

  return (
    <div className="register-container">
      <h1>
        Create your account and take the first step toward a personalized and
        exclusive experience!
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Your name: <span className="mandatory">*</span>
          </p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>
            Your email: <span className="mandatory">*</span>
          </p>
          <input
            type="email"
            placeholder="Your email adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <Password
          text="Your Password"
          password={password}
          setPassword={setPassword}
        />
        <Password
          text="Confirm your Password"
          password={confirmPassword}
          setPassword={setConfirmPassword}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
