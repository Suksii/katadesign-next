import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/api/blog");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useBlog = (slug) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const res = await axios.get(`/api/blog/${slug}`);
      return res.data;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
