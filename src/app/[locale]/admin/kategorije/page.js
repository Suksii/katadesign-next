import AddCategories from "@/components/AddCategories";
import Categories from "@/components/Categories";
import React from "react";

const CategoriesPage = () => {
  return (
    <div>
      <h1>Dodaj kategoriju</h1>
      <AddCategories />
      <h1>Kategorije</h1>
      <Categories />
    </div>
  );
};

export default CategoriesPage;
