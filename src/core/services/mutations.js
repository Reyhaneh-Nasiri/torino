import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "../config/api";
import { setCookie } from "../utils/cookie";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, { days: 30 });
    setCookie("refreshToken", data?.data?.refreshToken, { days: 365 });
  };
  return useMutation({ mutationFn, onSuccess });
};

export const useReserveBuy = (id) => {
  return useMutation({
    mutationFn: (payload) => api.put(`/basket/${id}`, payload),
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
    onError: (error) => {
      console.error("خطا در رزرو:", error);
    },
  });
};

export const useOrder = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload) => {
      console.log(payload);
      return api.post(`/order`, payload);
    },
    onSuccess: (data) => {
      toast.success(data.data.message);
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
