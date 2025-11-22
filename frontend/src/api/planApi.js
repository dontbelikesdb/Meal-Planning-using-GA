import axiosClient from "./axiosClient";

export const generatePlan = (payload) => {
  return axiosClient.post("/plan/generate", payload);
};
