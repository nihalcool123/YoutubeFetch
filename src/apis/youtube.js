import axios from "axios";

const KEY = "AIzaSyAkrUUzN7_SmARMQnIMaBpPpf_rI_O29rI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
