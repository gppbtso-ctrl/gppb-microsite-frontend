"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";
import { Suspense } from "react";

export default function CommitteeLayout({ children }) {
  return (
    <Suspense>
    <div className=" relative  w-full h-screen">
      <div className="grid grid-rows-[max-content,max-content,min-content]">
        <MainNavbar />
        <div className="mt-[5rem]">{children}</div>

        <FooterWithSocialLinks />
      </div>
    </div>
    </Suspense>
  );
}
