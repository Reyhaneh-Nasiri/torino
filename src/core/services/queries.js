import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await api.get("/user/profile", { cache: "no-store" });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

