import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:  '0a545cb3d96a4633b885a3f1848e90ba'
    }
});