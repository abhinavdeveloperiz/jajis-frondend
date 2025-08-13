import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8000/api/pages/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API functions for different endpoints
export const pageAPI = {
  // Get home page data
  getHome: () => api.get('home/'),
  
  // Get salons page data
  getSalons: () => api.get('salons/'),
  
  // Get cosmetics page data
  getCosmetics: () => api.get('cosmetics/'),
  
  // Get event hall page data
  getEventHall: () => api.get('event-hall/'),
  
  // Get food court page data
  getFoodCourt: () => api.get('food-court/'),
  
  // Get designing stitching page data
  getDesigningStitching: () => api.get('designing-stitching/'),
  
  // Get academy page data
  getAcademy: () => api.get('academy/'),
  
  // Get franchise page data
  getFranchise: () => api.get('franchise/'),
  
  // Get about us page data
  getAboutUs: () => api.get('about-us/'),
  
  // Get contact page data
  getContact: () => api.get('contact/'),
};

export default api;
