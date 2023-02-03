import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  auth: process.env.REACT_APP_AUTH_KEY,
});