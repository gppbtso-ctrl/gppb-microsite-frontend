"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";

export default function CommitteeLayout({ children }) {
  return (
    <div className=" relative  w-full h-screen">
      <MainNavbar />

      <div>{children}</div>

      <FooterWithSocialLinks />
    </div>
  );
}
