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
        <div className=" z-0 mt-10 bg-blue-500 h-60 w-full -bottom-1/4 flex justify-center items-center">
          <Typography
            variant="h1"
            className="font-montserrat font-bold text-white"
          >
            GPPB - TSO
          </Typography>
        </div>
        <FooterWithSocialLinks />
      </div>
    </div>
    </Suspense>
  );
}
