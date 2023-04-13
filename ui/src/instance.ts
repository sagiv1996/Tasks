import axios from "axios";

const backendApi = "http://localhost:3001/tasks";
const instance = axios.create({
  baseURL: backendApi,
});

export default instance;
