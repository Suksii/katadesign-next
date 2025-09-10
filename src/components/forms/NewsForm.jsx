"use client";

import TextEditor from "../TextEditor";
import CustomButton from "../buttons/CustomButton";
import CustomInput from "./inputs/CustomInput";

export default function NewsForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-4xl mx-auto py-8">
      <CustomInput
        label="Naslov novosti"
        type="text"
        placeholder="Unesite naslov novosti"
      />
      <CustomInput
        label="Kratki opis novosti"
        type="text"
        placeholder="Unesite opis novosti"
      />
      <TextEditor label="Informacije o blogu" />
      <CustomButton label="Sačuvaj" />
    </form>
  );
}
