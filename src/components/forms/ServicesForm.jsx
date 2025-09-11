"use client";

import CustomButton from "../buttons/CustomButton";
import CustomInput from "./inputs/CustomInput";
import CustomTextarea from "./inputs/CustomTextarea";

export default function ServicesForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-4xl mx-auto py-8">
      <CustomInput
        label="Naslov Usluge"
        type="text"
        placeholder="Unesite naslov usluge"
      />
      <CustomTextarea
        label="Opis usluge"
        type="text"
        placeholder="Unesite opis usluge"
      />
      <CustomButton label="Sačuvaj" />
    </form>
  );
}
