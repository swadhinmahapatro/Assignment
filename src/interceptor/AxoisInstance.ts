import axios from "axios";
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_END_POINT;
console.log(baseURL,"baseUrl..")

const axiosInstance = axios.create({
    baseURL: baseURL,
});

axiosInstance.interceptors.request.use(function (config) {
    const token = "jwt-token";
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            const { response } = error; 

            // if (response?.status === 401) {
            //     
            //     return;
            // };
            toast.error(response?.data?.message, { id: "error" });
        } catch (err) {
            console.error("Error handling interceptor:", err);
        }
        throw error; 
    }
);

export default axiosInstance;