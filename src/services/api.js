import axios from "axios";

const app = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

export default app;