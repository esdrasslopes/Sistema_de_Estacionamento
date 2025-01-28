import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
