"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";

export default function CommitteeLayout({ children }) {
  return (
    <div className=" relative w-full h-screen flex flex-col">
       <div className="flex-1">
      <MainNavbar />
      {children}
      
      </div>
      <FooterWithSocialLinks  className={'relative !pt-2'}/>

    </div>
  );
}
