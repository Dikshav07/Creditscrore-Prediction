import axios from "axios";

const API_URL = "http://localhost:5001/api/auth"; // Update if needed

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);

    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
