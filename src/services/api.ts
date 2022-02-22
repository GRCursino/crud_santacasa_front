import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4567/",
  headers: {"Content-Type": "application/json"},
});
