import axios from "axios";

const api = axios.create({
  baseURL: "http://189.25.122.22/api",
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api; 