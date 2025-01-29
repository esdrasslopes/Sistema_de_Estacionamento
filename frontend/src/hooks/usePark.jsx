import { useState, useEffect, useContext } from "react";

import { ParkContext } from "../context/park";

import { parkFetch } from "../axios/config";

export const usePark = () => {
  const [data, setData] = useState(null);

  const { data: loginData, setData: setLoginData } = useContext(ParkContext);

  console.log(loginData);

  const [error, setError] = useState(null);

  const [userPark, setUserPark] = useState([]);

  const handleFilter = (parkObject, parks) => {
    const entryDate = parkObject.entryDate;
    const vacancyNumber = parkObject.vacancyNumber;

    return parks.some(
      (park) =>
        park.vacancyNumber === vacancyNumber && park.entryDate === entryDate
    );
  };

  const handlePark = async (parkObject) => {
    try {
      const res = await parkFetch.get("/park");

      const parks = res.data.response;

      const parkFiltered = parks.filter(
        (park) => park.carPlate === parkObject.carPlate
      );

      const filtered = handleFilter(parkObject, parks);

      if (parkFiltered.length > 0 || filtered) {
        setError(
          "This car plate or vacancy is already taken for the given date"
        );
        return false;
      }

      setError(null);
      return true;
    } catch (error) {
      setError("Data not found");
      return false;
    }
  };

  const handleData = async () => {
    try {
      const res = await parkFetch.get("/user");

      const users = res.data.response;

      const filteredUsers = users.filter(
        (user) => user.email === loginData.email
      );

      setData(filteredUsers);
    } catch (error) {
      setError("User not found");
    }
  };

  useEffect(() => {
    if (loginData && !data) {
      handleData();
    }
  }, [data, loginData]);

  const handlePost = async (parkObject) => {
    try {
      const userPark = {
        carModel: parkObject.carModel,
        carBrand: parkObject.carBrand,
        carPlate: parkObject.carPlate,
        vacancyNumber: parkObject.vacancyNumber,
        entryDate: parkObject.entryDate,
        exitDate: parkObject.exitDate,
        id: data[0]._id,
      };

      const parks = await handlePark(parkObject);

      if (!parks) {
        return;
      }

      setUserPark((prev) => [...prev, userPark]);

      const res = await parkFetch.post("/park", userPark);

      setLoginData((prev) => ({ ...prev, id: userPark.id, park: "" }));

      handleParked(res.data.response);
    } catch (error) {
      setError("Failed to reserve the parking spot!");
    }
  };

  const handleParked = async (parkobj) => {
    try {
      const res = await parkFetch.get("/park");

      const resData = res.data.response;

      const filtered = resData.filter(
        (park) => park.carPlate === parkobj.carPlate
      );

      console.log(filtered);

      setLoginData((prev) => ({ ...prev, park: filtered[0]._id }));
    } catch (error) {
      console.log(error);
    }
  };

  return { error, handlePost, userPark };
};
