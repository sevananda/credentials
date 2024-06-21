"use client"
import axios from 'axios';

const apiBaseUrl = 'https://api.example.com'; // Replace with your API base URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const fetchUserData = async (token) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
