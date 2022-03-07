import axios from "axios";

const axiosInst = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`
    
});

export default axiosInst;