
import axios from "axios";

const url = "https://pixabay.com/api/";
const key = "51319352-42813f34bc37caf0322d42b73";

export const getImagesByQuery = (query) => {
    return axios(url, {
        params: {
            key,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then((res) => {
            return res.data.hits;
        })
};