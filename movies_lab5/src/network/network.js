import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params : {
    'api_key':"dcd1bd74b712d35627a8d6c3078ef226"
  }
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);