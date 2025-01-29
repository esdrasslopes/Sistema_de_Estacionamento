import { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { ParkContext } from "../context/park";

import { parkFetch } from "../axios/config";

import useToast from "../hooks/useToast";

import "./Edit.css";

const Edit = () => {
  const { id } = useParams();

  const { data } = useContext(ParkContext);

  const navigate = useNavigate();

  const [numVacancy, setNumVacancy] = useState([]);

  const [carDetails, setCarDetails] = useState({
    carModel: "",
    carBrand: "",
    carPlate: "",
    vacancyNumber: "",
    entryDate: "",
    exitDate: "",
  });

  const handlePark = async () => {
    try {
      const res = await parkFetch.get(`/park/${id}`);

      const park = res.data.response;

      setCarDetails(park);
    } catch (error) {
      console.log(error);
    }
  };

  function createVacancy() {
    const vacancies = [];
    for (let i = 1; i <= 50; i++) {
      vacancies.push(i);
    }
    setNumVacancy(vacancies);
  }

  useEffect(() => {
    createVacancy();
    handlePark();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await parkFetch.put(`/park/${id}`, carDetails);

      if (res) {
        useToast("Parking spad successfully updated!");
        navigate(`/admin/${data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="edit-container">
      <h1>Edit your {carDetails.carModel}</h1>
      <form onSubmit={handleSubmit}>
        <div className="data">
          <div className="form-control">
            <label htmlFor="model">
              <i className="fa fa-car"></i>
              Car Model: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Ex:Cronos"
              value={carDetails.carModel}
              onChange={(e) =>
                setCarDetails({ ...carDetails, carModel: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="brand">
              <i className="fa fa-industry"></i>
              Brand: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Ex:Fiat"
              value={carDetails.carBrand}
              onChange={(e) =>
                setCarDetails({ ...carDetails, carBrand: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="car-plate">
              <i className="fa fa-car"></i>
              Plate: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="ABC-1714"
              value={carDetails.carPlate}
              onChange={(e) =>
                setCarDetails({ ...carDetails, carPlate: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="vacancy-option">
              <i className="fa fa-parking" style={{ marginRight: "8px" }}></i>
              Escolha uma vaga <span>*</span>
            </label>
            <select
              name="vacancy-option"
              value={carDetails.vacancyNumber}
              onChange={(e) =>
                setCarDetails({ ...carDetails, vacancyNumber: e.target.value })
              }
            >
              {numVacancy &&
                numVacancy.map((vacancy, i) => (
                  <option value={vacancy} key={i}>
                    {vacancy}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="entry">
              <i className="fa fa-calendar"></i>Entry Date <span>*</span>
            </label>
            <input
              type="text"
              placeholder="12/05/2024"
              value={carDetails.entryDate}
              onChange={(e) =>
                setCarDetails({ ...carDetails, entryDate: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="entry">
              <i className="fa fa-calendar"></i>Exit Date <span>*</span>
            </label>
            <input
              type="text"
              placeholder="14/05/2024"
              value={carDetails.exitDate}
              onChange={(e) =>
                setCarDetails({ ...carDetails, exitDate: e.target.value })
              }
            />
          </div>
        </div>

        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default Edit;
