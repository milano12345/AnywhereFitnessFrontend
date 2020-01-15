import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://anywhere-fitness92.herokuapp.com/api/auth",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
