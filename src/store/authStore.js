// src/store/authStore.js
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";


const getAccessToken = () => {
    const initToken = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const storedUser = JSON.parse(initToken) ?? null;
    return storedUser?.access ?? null;
  };

const useAuthStore = create((set) => {
  // Retrieve token from localStorage
  const token = getAccessToken()
  let decodedToken = null;

  // Check if token exists before attempting to decode
  if (token) {
    decodedToken = jwtDecode(token);
  }

  return {
    token: token,
    decodedToken: decodedToken,
    setToken: () => {
      // Store token in localStorage
      // Decode the new token and update state
    const accessToken = getAccessToken();
    console.log(accessToken, 'from authstore')
      set({
        token: accessToken,
        decodedToken: jwtDecode(accessToken),
      });
    },
    removeToken: () => {
      set({ token: null, decodedToken: null });
    },
  };
});

export default useAuthStore;
