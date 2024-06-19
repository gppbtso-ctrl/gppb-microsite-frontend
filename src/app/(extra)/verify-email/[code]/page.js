"use client";
import AuthService from "@/services/auth";
import { Card, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const VerifyEmail = () => {
  const { code } = useParams();

  const verifyEmail = async () => {
    const response = await AuthService.verifyEmail(code);
    return response.data;
  };

  const { data, error, isLoading } = useSWR("verify-email", verifyEmail);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-200">
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

export default VerifyEmail;
