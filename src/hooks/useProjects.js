import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/api/projects");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useProject = (slug) => {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      const res = await axios.get(`/api/projects/${slug}`);
      return res.data;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
