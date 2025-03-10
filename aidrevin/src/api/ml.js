import axios from "axios";

const ML_API_URL = "http://localhost:5000"; // Adjust when deployed

export const getCreditScorePrediction = async (inputData) => {
  try {
    const response = await axios.post(`${ML_API_URL}/improve_score`, inputData); 
    return response.data;
  } catch (error) {
    throw error.response?.data || "Prediction failed";
  }
};
