import axiosInstance from "@/interceptor/AxoisInstance";
import { Payload } from "@/utils/types";

export default {
    login: (data: Payload) => axiosInstance.post("user/login", data),
};