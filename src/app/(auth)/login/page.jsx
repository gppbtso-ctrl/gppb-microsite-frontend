"use client";

import LoadingScreen from "@/components/loading/loading";
import AuthService from "@/services/auth";
import useLoading from "@/utils/use-loading";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const loading = useLoading(1200);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const params = data;

    setSubmitStatus("loading");
    try {
      const response = await AuthService.login(params);
      setSubmitStatus("success");
      router.back();
    } catch (error) {
      console.log(error);
      if (
        error?.response?.status === 401 &&
        error?.response?.statusText === "Unauthorized"
      ) {
        setSubmitStatus("unauthorized");
      } else {
        setSubmitStatus("unknown");
      }
    }
    // Perform any further actions with the combined data
  };

  return (
    <div class="h-full">
      {loading ? <LoadingScreen /> : null}
      <div class="relative flex  from-transparent to-white/80 min-h-[35rem] md:min-h-[75vh] flex-col lg:flex-row items-center justify-center lg:gap-[2rem] bg-[url('/Home.png')] bg-cover bg-opacity-10 py-5 mt-[3.5rem]  ">
      <div className="absolute bg-gradient-to-b from-transparent   to-white  w-full bottom-0 h-[2.5rem]"></div>

        <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-1 mb-2">
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl  antialiased tracking-wide font-hanken-grotesk font-medium">WELCOME TO THE </Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">NEW GOVERNMENT</Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">PROCUREMENT ACT</Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">(NGPA) MICROSITE</Typography>
        <Typography className="text-3xl md:text-4xl lg:text-5xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-anonymous-pro ">Republic Act No. 12009</Typography>
        </div>

        <div class="mx-1 bg-white/95 backdrop-filter backdrop-blur-md mb-12 lg:mb-0 p-6 shadow-lg flex flex-col justify-center gap-3  w-full max-w-[29rem] rounded-sm">
          <Typography  className=" drop-shadow-md font-semibold text-2xl uppercase">
            Login
          </Typography>
          {submitStatus === "unauthorized" ? (
            <Alert
              color="red"
              className="rounded-none max-h-10 flex items-center"
            >
              Invalid Credentials / Unauthorized
            </Alert>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div class="relative w-full min-w-[200px] drop-shadow-md h-10">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("email", { required: true })}
                  type="email"
                  required
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Email
                </label>
              </div>

              <div class="relative w-full min-w-[200px] h-10 drop-shadow-md">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("password", { required: true })}
                  required
                  type="password"
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Password
                </label>
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
        </div>
      </div>
    </div>
  );
}
