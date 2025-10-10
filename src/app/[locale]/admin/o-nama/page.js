"use client";

import { useState, useEffect } from "react";
import CustomButton from "@/components/buttons/CustomButton";
import TextEditor from "@/components/TextEditor";
import React from "react";
import { useAbout } from "@/hooks/useAbout";

const AboutPage = () => {
  const { data, isLoading, isError, updateAbout } = useAbout();

  const [contentMn, setContentMn] = useState(null);
  const [contentEn, setContentEn] = useState(null);

  useEffect(() => {
    if (data) {
      setContentMn(data.contentMn || null);
      setContentEn(data.contentEn || null);
    }
  }, [data]);

  const handleSave = () => {
    updateAbout.mutate({ contentMn, contentEn });
  };

  // if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching content</p>;

  return (
    <div className="flex flex-col gap-6 py-8 w-full">
      <h1>About Page</h1>
      <div>
        <TextEditor
          label="Unesi sadržaj (MN)"
          initialContent={contentMn}
          onChange={setContentMn}
        />
      </div>

      <div>
        <TextEditor
          label="Enter content (EN)"
          initialContent={contentEn}
          onChange={setContentEn}
        />
      </div>

      <CustomButton
        label={updateAbout.isPending ? "Čuvam..." : "Sačuvaj"}
        onClick={handleSave}
      />
    </div>
  );
};

export default AboutPage;
