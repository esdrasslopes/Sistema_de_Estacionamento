import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useToast from "../hooks/useToast";

import { usePark } from "../hooks/usePark";

import { useContext } from "react";

import { ParkContext } from "../context/park";

import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const { data, setData } = useContext(ParkContext);

  const [parkData, setParkData] = useState({});

  const [numVacancy, setNumVacancy] = useState([]);

  const [carModel, setCarModel] = useState("");

  const [carBrand, setCarBrand] = useState("");

  const [carPlate, setCarPlate] = useState("");

  const [vacancyNumber, setVacancyNumber] = useState(1);

  const [entryDate, setEntryDate] = useState("");

  const [exitDate, setExitDate] = useState("");

  const { error, handlePost, userPark } = usePark();

  function createVacancy() {
    const vacancies = [];
    
    for (let i = 1; i <= 50; i++) {
      vacancies.push(i);
    }
    setNumVacancy(vacancies);
  }

  useEffect(() => {
    createVacancy();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !carModel ||
      !carBrand ||
      !carPlate ||
      !vacancyNumber ||
      !entryDate ||
      !exitDate
    )
      return;

    const dateInit = new Date(entryDate);

    const dateExit = new Date(exitDate);

    dateInit.setHours(0, 0, 0, 0);
    dateExit.setHours(0, 0, 0, 0);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (dateInit < currentDate) {
      useToast("Entry date cannot be in the past", "error");
      return;
    }

    if (dateInit > dateExit) {
      useToast("The exit time has to be greater than the entry time", "error");
      return;
    }

    const parkInfo = {
      carModel,
      carBrand,
      carPlate,
      vacancyNumber,
      entryDate,
      exitDate,
    };

    setParkData({ ...parkInfo });

    handlePost(parkInfo);
  };

  useEffect(() => {
    if (error) {
      useToast(error, "error");
    }

    if (userPark.length > 0) {
      useToast("Parking spot successfully reserved!");
      setData((prev) => ({ ...prev, ...parkData }));
      navigate(`/pay`);
    }
  }, [error, userPark, parkData]);

  return (
    <div className="park-form">
      <h1 className="title">
        Hello, Please fill in the details below to proceed.{" "}
      </h1>

      <h1>Vehicle Details</h1>
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
              onChange={(e) => setCarModel(e.target.value)}
              value={carModel}
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
              onChange={(e) => setCarBrand(e.target.value)}
              value={carBrand}
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
              onChange={(e) => setCarPlate(e.target.value)}
              value={carPlate}
            />
          </div>

          <div className="form-control">
            <label htmlFor="vacancy-option">
              <i className="fa fa-parking" style={{ marginRight: "8px" }}></i>
              Escolha uma vaga <span>*</span>
            </label>
            <select
              name="vacancy-option"
              onChange={(e) => setVacancyNumber(e.target.value)}
              value={vacancyNumber}
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
              onChange={(e) => setEntryDate(e.target.value)}
              value={entryDate}
            />
          </div>

          <div className="form-control">
            <label htmlFor="entry">
              <i className="fa fa-calendar"></i>Exit Date <span>*</span>
            </label>
            <input
              type="text"
              placeholder="14/05/2024"
              onChange={(e) => setExitDate(e.target.value)}
              value={exitDate}
            />
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
