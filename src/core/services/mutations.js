import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "../config/api";
import { setCookie } from "../utils/cookie";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, { days: 30 });
    setCookie("refreshToken", data?.data?.refreshToken, { days: 365 });
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };
  return useMutation({ mutationFn, onSuccess });
};

export const useReserveBuy = (id) => {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload) => api.put(`/basket/${id}`, payload),
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
    onError: (error) => {
      if (error.message === "Access token required") {
        router.push("/");
        toast("برای رزرو تور ابتدا وارد حساب کاربری خود شوید.");
      }
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

export const useProfileUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => {
      return api.put(`/user/profile`, payload);
    },
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["profile"]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
};
