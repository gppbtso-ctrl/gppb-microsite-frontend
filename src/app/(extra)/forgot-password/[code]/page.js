"use client";
import AuthService from "@/services/auth";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const ForgotPassword = () => {
  const { code } = useParams();

  // const verifyEmail = async () => {
  //   const response = await AuthService.verifyEmail(code);
  //   return response.data;
  // };

  // const { data, error, isLoading } = useSWR("verify-email", verifyEmail);

  return (
    <div className="h-screen flex flex-col justify-start gap-[4rem] md:gap-[8rem] pt-[9rem] items-center bg-blue-200 p-auto">
      <nav className="fixed top-0 flex w-full">
      <Image
            width={500}
            height={500}
            priority
            src={"/Logo Watermark 2024 - NGPA.png"}
            className={`h-[3.3rem] md:h-[4rem]   transition-all duration-[710ms] w-fit my-[0.5rem] pl-2 md:pl-8 drop-shadow-md`}
            alt={'Next Picture'}
          />
      </nav>
      <div className="">
      <Typography className="font-hanken-grotesk text-4xl md:text-5xl tracking-wide font-bold text-center drop-shadow-md">New Government</Typography>
      <Typography className="font-hanken-grotesk text-4xl md:text-5xl tracking-wide font-bold text-center drop-shadow-md">Procurement Act</Typography>
      <Typography className="font-anonymous-pro text-2xl  md:text-3xl tracking-wide font-bold text-center drop-shadow-md">Republic Act No.12009</Typography>
      </div>
      <Card className="p-5  mx-2 max-w-[40rem] flex gap-3 flex-col justify-center items-center round-none">
        {" "}

        {data ? (
          <>
            {" "}
            <Typography variant="h3">Verification Success</Typography>
            <Typography variant="lead" className=" break-words text-center">
              Please Wait for the Admin to Activate Your account. You will
              receive an Email if your account is activated.
            </Typography>
          </>
        ) : error ? (
          <>
            {" "}
            <Typography variant="h3">Verification Failed!</Typography>
            <Typography variant="lead" className=" break-words text-center">
              Already Verified or Invalid Code.
            </Typography>
          </>
        ) : (
          <Typography variant="h3">Loading....</Typography>
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;
