import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "cda74af4f1msh130dc8088136b4bp1cba10jsn4743e422b18b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
