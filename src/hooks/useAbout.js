import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useAbout() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const { data } = await axios.get("/api/about");
      return data;
    },
  });

  const updateAbout = useMutation({
    mutationFn: async ({ contentMn, contentEn }) => {
      const { data } = await axios.put("/api/about", {
        contentMn,
        contentEn,
      });
      if (!res.ok) throw new Error("Failed to update AboutUs");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about"] });
      alert("Sekcija 'O nama' je izmijenjena!");
    },
  });

  return { data, isLoading, isError, updateAbout };
}
