import axios from "axios";

const KEY = "AIzaSyCIiW6osFn86zONcmFSme71Va39_D3WkZ4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

// do not preconfigure your query param yet, only when you need it for a specific instance
