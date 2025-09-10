"use client";

import { useState, useEffect } from "react";
import TextEditor from "../TextEditor";
import CustomButton from "../buttons/CustomButton";
import CustomInput from "./inputs/CustomInput";

export default function ProjectForm() {
  return (
    <form className="flex flex-col gap-4">
      <CustomInput
        label="Opis projekta"
        type="text"
        placeholder="Unesite opis projekta"
      />
      <CustomInput
        label="Kratki opis projekta"
        type="text"
        placeholder="Unesite opis projekta"
      />
      <TextEditor label="Informacije o projektu" />
      <CustomButton label="Sačuvaj" />
    </form>
  );
}
