import { useNavigate } from "react-router-dom";

import useToast from "../hooks/useToast";

import { useLogin } from "../hooks/useLogin";

import { useContext, useState, useEffect } from "react";

import { ParkContext } from "../context/park";

import Password from "../components/Password";

import "./SignIn.css";

const SignIn = () => {
  const { data, setData } = useContext(ParkContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: loginData, error, httpRequest } = useLogin();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      useToast("Fill in all the fields", "error");
      return;
    }

    const user = {
      email,
      password,
    };

    httpRequest(user);
  };

  useEffect(() => {
    if (loginData) {
      useToast("Login successful! Enjoy your experience.");

      setData((prev) => ({ ...prev, email, password, login: true }));

      navigate("/park/form");
    }

    if (error) {
      useToast(error, "error");
    }
  }, [loginData, error]);

  return (
    <div className="singin-container">
      <h1>Get in and park with ease</h1>
      <form onSubmit={handleLogin}>
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
          text="Your password"
          password={password}
          setPassword={setPassword}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
