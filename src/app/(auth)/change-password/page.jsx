"use client";

import LoadingScreen from "@/components/loading/loading";
import AuthService from "@/services/auth";
import useAuthStore from "@/store/authStore";
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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
  const router = useRouter();
  const loading = useLoading(1200);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { token, decodedToken, setToken, removeToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!decodedToken) return router.push("/login");
  }, [decodedToken]);

  const onSubmit = async (data) => {
    const params = data;

    delete data.confirm_password;
    setSubmitStatus("loading");
    try {
      const response = await AuthService.changePassword(params);
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus(null);
        reset();
      }, 1500);
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
  };

  return (
    <div className="h-full">
      {loading ? <LoadingScreen /> : null}
      <div class="flex  h-full  flex-col items-center justify-center lg:gap-5 mx-10">
        <div class="my-auto p-4 shadow-lg flex flex-col justify-center gap-3 min-w-[22rem] lg:max-w-[30rem]  w-full border-[0.3px] border-gray-300 rounded-sm">
          <Typography variant="h4" className="font-montserrat">
            Change Password
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
              <div class="relative w-full min-w-[200px] h-10">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("old_password", { required: true })}
                  type="password"
                  required
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Old Password
                </label>
              </div>

              <div class="relative w-full min-w-[200px] h-10">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("new_password", { required: true })}
                  required
                  type="password"
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  New Password
                </label>
              </div>
              <div class="relative w-full min-w-[200px] h-10">
                <input
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("confirm_password", {
                    required: true,
                    validate: (value) =>
                      value === watch("new_password") ||
                      "Passwords do not match.",
                  })}
                  required
                  type="password"
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Confirm Password
                </label>
              </div>
              {errors.confirm_password ? (
                <p className="relative text-sm -mt-3 mb-0 text-red-600 px-1">
                  Password Do Not Match!
                </p>
              ) : null}
              <Button
                type="submit"
                className="rounded-none flex justify-center max-h-11"
                color="blue"
                disabled={submitStatus === "loading"}
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
