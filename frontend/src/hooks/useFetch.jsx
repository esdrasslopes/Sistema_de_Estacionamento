import { parkFetch } from "../axios/config";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await parkFetch.get("/user");

        setAllData(res.data.response);
      } catch (error) {
        console.error("Error fetching all users:", error);
        setError("Failed to fetch users.");
      }
    };

    getAll();
  }, [url]);

  const httpConfig = (method, data) => {
    const axiosConfig = {
      method,
      url,
    };

    if (method === "POST") {
      axiosConfig.data = data;
    }

    setConfig(axiosConfig);
  };

  const httpRequest = async () => {
    if (!config) return;

    try {
      const { method, data: postData } = config;

      // Verificar duplicatas se for POST
      if (method === "POST" && allData) {
        const existData = allData.filter(
          (user) => user.email === postData.email
        );

        if (existData.length > 0) {
          setError("User already exists.");
          return;
        }
      }

      const res = await parkFetch(config);
      setData(res.data);
    } catch (error) {
      console.error("Error during HTTP request:", error);
      setError("Data not found!");
    }
  };

  useEffect(() => {
    httpRequest();
  }, [config]);

  return { data, httpConfig, error };
};
