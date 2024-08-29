"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";
import { Suspense } from "react";
import SmoothScrolling from "@/components/home/smoothscrolling";

export default function CommitteeLayout({ children }) {
  return (
    <Suspense>
      <div className=" relative  w-full h-screen">
        <div className="grid grid-rows-[max-content,max-content,min-content]">
          <MainNavbar />
          <div className="mt-[6rem] mb-[4rem] min-h-[54vh]  [@media(min-width:2300px)]:min-h-[65dvh] ">
            {children}
          </div>

          <FooterWithSocialLinks />
        </div>
      </div>
    </Suspense>
  );
}
