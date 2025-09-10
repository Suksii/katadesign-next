"use client";

import ProjectForm from "@/components/forms/ProjectForm";

export default function DodajProjekatPage() {
  const handleAdd = async (data) => {
    console.log("Dodaj projekat:", data);
  };

  return (
    <div>
      <h1>Dodaj Projekat</h1>
      <ProjectForm onSubmit={handleAdd} />
    </div>
  );
}
