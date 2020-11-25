import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-mern-jr.herokuapp.com",
});

export default instance;
