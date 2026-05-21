import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

export const useGetProfile = () => {
  const queryFn = async () => {
    const { data } = await api.get("/user/profile");
    if (data.firstName) {
      const { firstName, lastName, ...rest } = data;
      return { ...rest, fullName: `${firstName} ${lastName}` };
    }
    return data;
  };
  const queryKey = ["profile"];

  return useQuery({ queryFn, queryKey });
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
