// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  // Authentication
  SIGNUP: `${API_BASE_URL}/signUp`,
  LOGIN: `${API_BASE_URL}/login`,
  GET_USER: (id) => `${API_BASE_URL}/user/${id}`,
  
  // Recipes
  GET_RECIPES: `${API_BASE_URL}/recipe`,
  GET_RECIPE: (id) => `${API_BASE_URL}/recipe/${id}`,
  CREATE_RECIPE: `${API_BASE_URL}/recipe`,
  UPDATE_RECIPE: (id) => `${API_BASE_URL}/recipe/${id}`,
  DELETE_RECIPE: (id) => `${API_BASE_URL}/recipe/${id}`,
  
  // Images - Now using Cloudinary URLs directly
  IMAGE_URL: (cloudinaryUrl) => cloudinaryUrl
};

export default API_BASE_URL;
