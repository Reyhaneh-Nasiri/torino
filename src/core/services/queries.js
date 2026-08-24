import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await api.get("/user/profile");
      return data;
    },
    select: (data) => {
      if (!data) return null;

      const firstName = data.firstName?.trim() || "";
      const lastName = data.lastName?.trim() || "";
      const fullName = `${firstName} ${lastName}`.trim();

      if (!fullName) {
        return data;
      }

      return {
        ...data,
        fullName,
      };
    },
  });
};

export const useGetHistory = () =>
  useQuery({
    queryKey: ["history"],
    queryFn: async () =>
      (await api.get("/user/tours", { cache: "no-store" })).data,
  });

export const useGetTransactions = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () =>
      (await api.get("/user/transactions", { cache: "no-store" })).data,
  });
