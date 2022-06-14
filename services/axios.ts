import axios from "axios";
const baseURL = "api.mywebsite.com/v1/";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const defaultOptions = {
  headers,
  baseURL,
};

// Create instance
let instance = axios.create(defaultOptions);

export default instance;
