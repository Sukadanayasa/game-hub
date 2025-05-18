import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6965b425561a46b69bdb586b70aafc9d",
  },
});
