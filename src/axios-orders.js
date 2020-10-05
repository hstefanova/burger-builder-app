import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-app-b85a5.firebaseio.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
