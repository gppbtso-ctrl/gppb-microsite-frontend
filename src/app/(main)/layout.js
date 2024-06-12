"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";

export default function CommitteeLayout({ children }) {
  return (
    <div className=" relative  w-full h-screen">
      <MainNavbar />
      <div className="grid grid-rows-[max-content,max-content,min-content]">
        <div>{children}</div>
        <div className=" z-10 -mt-10 bg-blue-500 h-80 w-full -bottom-1/4 flex justify-center items-center">
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
  );
}
