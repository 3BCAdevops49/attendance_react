import axios from 'axios';

const DEFAULT_API_HOST = 'https://attendanceriskpredictor-g6a4e6acekbrakh0.southeastasia-01.azurewebsites.net';

const getApiHost = () => {
  const envHost = (process.env.REACT_APP_API_URL || '').trim();
  const selectedHost = envHost || DEFAULT_API_HOST;
  const normalizedHost = selectedHost.startsWith('http') ? selectedHost : `https://${selectedHost}`;

  try {
    const apiUrl = new URL(normalizedHost);
    const appHostname = typeof window !== 'undefined' ? window.location.hostname : '';
    const isAppRunningLocally = appHostname === 'localhost' || appHostname === '127.0.0.1';
    const isLocalApiHost = apiUrl.hostname === 'localhost' || apiUrl.hostname === '127.0.0.1';

    // In deployed environments, ignore localhost API settings and use the cloud backend.
    if (!isAppRunningLocally && isLocalApiHost) {
      return DEFAULT_API_HOST;
    }

    return normalizedHost;
  } catch (error) {
    console.warn('Invalid REACT_APP_API_URL. Falling back to default API host.', error);
    return DEFAULT_API_HOST;
  }
};

const API_BASE_URL = `${getApiHost().replace(/\/$/, '')}/attendance`;

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
