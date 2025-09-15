"use client";

import React, { useState } from "react";
import CustomInput from "@/components/forms/inputs/CustomInput";
import CustomButton from "@/components/buttons/CustomButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddCategories = () => {
  const [titleMn, setTitleMn] = useState("");
  const [titleEn, setTitleEn] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post("/api/categories", {
        titleMn,
        titleEn,
      });
      return data;
    },
    onSuccess: () => {
      setTitleMn("");
      setTitleEn("");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      alert("Kategorija dodata!");
    },
  });

  return (
    <div className="flex flex-col gap-6 py-8 w-full max-w-md">
      <CustomInput
        label="Naziv kategorije (MN)"
        placeholder="Unesite naziv kategorije"
        value={titleMn}
        onChange={(e) => setTitleMn(e.target.value)}
      />
      <CustomInput
        label="Naziv kategorije (EN)"
        placeholder="Enter category name"
        value={titleEn}
        onChange={(e) => setTitleEn(e.target.value)}
      />
      <CustomButton
        label={mutation.isLoading ? "Čuvanje..." : "Sačuvaj"}
        onClick={() => mutation.mutate()}
        disabled={mutation.isLoading}
      />
      {mutation.isError && (
        <p className="text-red-500">{mutation.error.message}</p>
      )}
    </div>
  );
};

export default AddCategories;
