import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL 
  ? `${process.env.REACT_APP_API_URL}/attendance`
  : 'http://localhost:8080/attendance';

export const getAttendanceAPI = {
  // Get all attendance records
  getAll: () => axios.get(API_BASE_URL),

  // Get single record by ID
  getById: (id) => axios.get(`${API_BASE_URL}/${id}`),

  // Create new record
  create: (data) => axios.post(API_BASE_URL, data),

  // Update record
  update: (id, data) => axios.put(`${API_BASE_URL}/${id}`, data),

  // Delete record
  delete: (id) => axios.delete(`${API_BASE_URL}/${id}`),
};
