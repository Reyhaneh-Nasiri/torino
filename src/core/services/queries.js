import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await api.get("/user/profile", { cache: "no-store" });
        const data = await res.data;
        if (data.firstName) {
          const formatData = {
            ...data,
            fullName: `${data.firstName} ${data.lastName}`,
          };
          delete formatData.firstName;
          delete formatData.lastName;
          return formatData;
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const useGetHistory = () => {
  return useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      try {
        const res = await api.get("/user/tours", { cache: "no-store" });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      try {
        const res = await api.get("/user/transactions", { cache: "no-store" });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
