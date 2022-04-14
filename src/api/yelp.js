import axios from "axios";

axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    header: {
        Authorization: "Bearer
    }
})

