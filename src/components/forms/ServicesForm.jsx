"use client";

import React, { useState } from "react";
import CustomInput from "@/components/forms/inputs/CustomInput";
import CustomButton from "@/components/buttons/CustomButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CustomTextarea from "./inputs/CustomTextarea";

const AddServices = () => {
  const [titleMn, setTitleMn] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentMn, setContentMn] = useState("");
  const [contentEn, setContentEn] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post("/api/services", {
        titleMn,
        titleEn,
        contentMn,
        contentEn,
      });
      return data;
    },
    onSuccess: () => {
      setTitleMn("");
      setTitleEn("");
      setContentMn("");
      setContentEn("");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      alert("Usluga dodata!");
    },
  });


  return (
    <div className="flex flex-col gap-6 py-8 w-full max-w-2xl mx-auto">
      <CustomInput
        label="Naziv usluge (MN)"
        placeholder="Unesite naziv usluge"
        value={titleMn}
        onChange={(e) => setTitleMn(e.target.value)}
      />
      <CustomTextarea
        label="Opis usluge (MN)"
        type="text"
        placeholder="Unesite opis usluge"
        value={contentMn}
        onChange={(e) => setContentMn(e.target.value)}
      />
      <CustomInput
        label="Naziv usluge (EN)"
        placeholder="Enter service name"
        value={titleEn}
        onChange={(e) => setTitleEn(e.target.value)}
      />
      <CustomTextarea
        label="Opis usluge (EN)"
        type="text"
        placeholder="Enter service description"
        value={contentEn}
        onChange={(e) => setContentEn(e.target.value)}
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

export default AddServices;
