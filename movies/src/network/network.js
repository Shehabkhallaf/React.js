import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular",
    params: {
      api_key: "801e8bbfcf73f4e6bd852bc32bd613a6",
    },
  });

  axiosInstance.interceptors.request.use(
    function(config){
        return config
    }
);
axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        return Promise.reject(error);
    }
)