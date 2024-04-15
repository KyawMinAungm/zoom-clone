import NavBar from "@/components/NavBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default RootLayout;
