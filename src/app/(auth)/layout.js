"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";

export default function CommitteeLayout({ children }) {
  return (
    <div className=" relative  w-full h-screen">
       <div className="">
      <MainNavbar />
      <div className="">{children}
      </div>
      </div>
      <FooterWithSocialLinks  className={'!pt-2'}/>

    </div>
  );
}
