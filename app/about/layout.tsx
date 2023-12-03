import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>AboutLayout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
