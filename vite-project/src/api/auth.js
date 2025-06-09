import axiosInstance from "./axiosInstance";

// Login API
export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      email,
      password,
    });

    const token = response.data.accessToken; // Correct key!
    if (token) {
      localStorage.setItem("token", token);
      console.log("✅ Token saved to localStorage:", token); // 👈 Console log here
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Signup API
export const signup = async (username, email, password) => {
  try {
    const response = await axiosInstance.post("/user/signup", {
      username,
      email,
      password,
    });
    const token = response.data.accessToken;
    if (token) {
      localStorage.setItem("token", token);
      console.log("✅ Token saved to localStorage:", token);
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
