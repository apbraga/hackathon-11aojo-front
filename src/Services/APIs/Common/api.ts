import axios from "axios";

const ApiConn = axios.create({
  baseURL: process.env.REACT_API_URL,
});

export default ApiConn;
