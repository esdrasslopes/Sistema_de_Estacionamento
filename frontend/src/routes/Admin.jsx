import { useState, useEffect, useContext } from "react";

import { useParams, NavLink, useNavigate } from "react-router-dom";

import { parkFetch } from "../axios/config";

import useToast from "../hooks/useToast";

import { ParkContext } from "../context/park";

import "./Admin.css";

const Admin = () => {
  const { id } = useParams();

  const [myParks, setMyParks] = useState([]);

  const { user } = useContext(ParkContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  async function handlePark() {
    const res = await parkFetch.get("/park");

    const parks = res.data.response;

    const myParks = parks.filter((park) => park.userID === id);

    console.log(myParks);

    setMyParks(myParks);
  }

  async function deletePark(id) {
    try {
      await parkFetch.delete(`/park/${id}`);

      useToast("Parking spot successfully deleted!");

      const parksFiltered = myParks.filter((park) => park._id !== id);

      setMyParks(parksFiltered);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlePark();
  }, []);
  return (
    <div className="admin-container">
      <div className="parks">
        {!myParks.length ? (
          <p>Loading...</p>
        ) : (
          myParks.map((park) => (
            <div className="my-park" key={park._id}>
              <h1>{park.carModel}</h1>
              <p>{park.carPlate}</p>
              <div className="actions">
                <NavLink to={`/edit/${park._id}`}>Edit</NavLink>
                <button
                  className="delete-btn"
                  onClick={() => deletePark(park._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
