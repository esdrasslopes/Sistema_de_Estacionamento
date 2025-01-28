import { useState, useContext } from "react";

import { ParkContext } from "../context/park";

import { parkFetch } from "../axios/config";

export const useLogin = () => {
  const { data: dataContext, setData: setDataContext } =
    useContext(ParkContext);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  const httpRequest = async (user) => {
    try {
      const response = await parkFetch.get("/user");

      const users = response.data.response;

      if (!users || users.length === 0) {
        setError("No users found");
        return;
      }

      const userFiltered = users.find(
        (u) => u.email === user.email && u.password === user.password
      );

      console.log(userFiltered);

      if (!userFiltered) {
        setError("User not found or invalid credentials");
        setData(null);
        return;
      }

      setDataContext((prev) => ({ ...prev, id: userFiltered._id }));

      setData(userFiltered);

      setError(null);
    } catch (error) {
      setError("Data not found");
      setData(null);
    }
  };

  return { data, error, httpRequest };
};
