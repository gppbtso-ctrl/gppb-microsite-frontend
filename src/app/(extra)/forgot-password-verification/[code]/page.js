"use client";
import AuthService from "@/services/auth";
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const ForgotPassword = () => {
  const { code } = useParams();
  const [status, setStatus] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPassAlert, setShowPassAlert] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowPassAlert(false);
    setSubmitStatus("loading");
    console.log(data);
    if (data?.new_password !== data?.confirm_password) {
      setShowPassAlert(true);
      setSubmitStatus(null);
      return;
    }

    try {
      delete data?.confirm_password;
      const response = AuthService.postNewPassword(code, data);
      console.log(response);
      setShowNotif(true);
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 700);
    } catch (error) {}
  };

  const getForgotPasswordVerification = async () => {
    const response = await AuthService.getForgotPasswordVerification(code);
    return response.data;
  };

  const { data, error, isLoading } = useSWR(
    "forgotPasswordVerification",
    getForgotPasswordVerification
  );

  return (
    <div className="h-screen flex flex-col justify-start gap-[4rem] md:gap-[8rem] pt-[9rem] items-center bg-blue-200 p-auto">
      <nav className="fixed top-0 flex w-full">
        <Image
          width={500}
          height={500}
          priority
          src={"/Logo Watermark 2024 - NGPA.png"}
          className={`h-[3.3rem] md:h-[4rem]   transition-all duration-[710ms] w-fit my-[0.5rem] pl-2 md:pl-8 drop-shadow-md`}
          alt={"Next Picture"}
        />
      </nav>
      <div className="">
        <Typography className="font-hanken-grotesk text-4xl md:text-5xl tracking-wide font-bold text-center drop-shadow-md">
          New Government
        </Typography>
        <Typography className="font-hanken-grotesk text-4xl md:text-5xl tracking-wide font-bold text-center drop-shadow-md">
          Procurement Act
        </Typography>
        <Typography className="font-anonymous-pro text-2xl  md:text-3xl tracking-wide font-bold text-center drop-shadow-md">
          Republic Act No.12009
        </Typography>
      </div>
      <Card className="p-5  mx-2 max-w-[40rem] min-w-fit md:min-w-[25rem] flex gap-3 flex-col justify-center items-center rounded-none">
        {" "}
        <Typography variant="h3">Forgot Password</Typography>
        {data && showNotif ? (
          <div className="flex flex-col justify-center items-center">
            <Typography variant="lead" className="text-center">
              New password set successfully!
            </Typography>
            <Typography variant="lead" className="text-center">
              Please try logging in with your new password.
            </Typography>
            <Link href={"/login"} className="text-blue-700 mt-2">
              Login Here
            </Link>
          </div>
        ) : data ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 w-full">
              <div class="relative min-w-[20rem] drop-shadow-sn h-10">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("new_password", { required: true })}
                  type="password"
                  required
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Enter New Password
                </label>
              </div>
              <div class="relative min-w-[20rem] drop-shadow-sn h-10 mb-1">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("confirm_password", { required: true })}
                  type="password"
                  required
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Confirm New Password
                </label>
                {showPassAlert ? (
                  <Typography className="absolute text-red-500 text-sm ml-1">
                    Passwords do not match.
                  </Typography>
                ) : null}
              </div>

              <Button
                type="submit"
                className="rounded-none drop-shadow-md flex justify-center max-h-11"
                color="blue"
              >
                {submitStatus === "loading" ? (
                  <Spinner className="h-[1.32rem] w-[1.32rem " />
                ) : submitStatus === "success" ? (
                  <Typography variant="small">Success</Typography>
                ) : (
                  <Typography variant="small">Submit</Typography>
                )}
              </Button>
            </div>
          </form>
        ) : error ? (
          <>
            {" "}
            <Typography variant="lead" className=" break-words text-center">
              Invalid / Expired session! Please try resetting your password
              again by following the 'Forgot Password' process.
            </Typography>
          </>
        ) : (
          <Typography variant="h4">Loading....</Typography>
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;
