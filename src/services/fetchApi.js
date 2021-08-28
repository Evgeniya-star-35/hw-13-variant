import axios from "axios";

const API_KEY = "22948593-eb3728724c643cf2948c736ef";
axios.defaults.baseURL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal";

export async function getPictures(query, page) {
  const {
    data: { hits },
  } = await axios.get(`&q=${query}&page=${page}&per_page=12&key=${API_KEY}`);

  return hits;
}