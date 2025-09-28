import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServices = async () => {
  const res = await axios.get("/api/services");
  return res.data;
};

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};