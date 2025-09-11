import React from "react";
import CustomInput from "./forms/inputs/CustomInput";
import CustomButton from "./buttons/CustomButton";

const AddCategories = () => {
  return (
    <div className="flex flex-col gap-6 py-8">
      <CustomInput
        label="Naziv kategorije"
        placeholder="Unesite naziv kategorije"
      />
      <CustomButton label="Sačuvaj" />
    </div>
  );
};

export default AddCategories;
