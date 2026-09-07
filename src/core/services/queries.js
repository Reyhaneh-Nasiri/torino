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
    queryFn: async () => {
      const { data } = await api.get("/user/tours");
      return data;
    },
  });

export const useGetTransactions = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await api.get("/user/transactions");
      return data;
    },
  });

export const useTourCapacity = (tourId, initialCapacity) => {
  return useQuery({
    queryKey: ["tour-capacity", tourId],
    queryFn: async () => {
      const { data } = await api.get(`/tour/${tourId}`);
      return data;
    },
    initialData: { availableSeats: initialCapacity },
    select: (data) => data?.availableSeats,
    enabled: Boolean(tourId),
    staleTime: 10 * 1000,
    refetchInterval: 10 * 1000,
    refetchOnWindowFocus: true,
  });
};
