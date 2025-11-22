import axiosClient from "./axiosClient";

export const saveProfile = (payload) => {
  return axiosClient.post("/profile", payload);
};
