"use client";

import FirstForm from "@/components/register/firstform";
import SecondForm from "@/components/register/secondform";
import AuthService from "@/services/auth";
import UserService from "@/services/user.services";
import useAuthStore from "@/store/authStore";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

export default function Profile() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { token, decodedToken, setToken, removeToken, setDecodedToken} = useAuthStore();
  const [emailExist, setEmailExist] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();


  const getProfile = async () => {
    const response = await UserService.getProfile();
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
     "profile",
    getProfile
  );

  const onSubmit = async (data) => {
      setSubmitStatus("loading");
      try {
        const response = await UserService.editProfile(data);
        setSubmitStatus("success");
        decodedToken.first_name = response?.data?.first_name
        decodedToken.last_name = response?.data?.last_name
        setTimeout(() => {
          mutate("profile");
          setDecodedToken(decodedToken)
          setSubmitStatus(null);
        }, 1000);
      } catch (error) {
        setSubmitStatus("error");
      }
 

  };

  useEffect(() => {
    if (!data) return;
    const keys = Object.keys(data);
    // Map over the keys to retrieve the corresponding values
    
    keys.map((key) => {
      if (
        [
          "first_name",
          "last_name",
          "is_subscribed"
        ].includes(key)
      ) {
        // Set the initial value of the react hook form fields.
        setValue(key, data[key]);
      }
    });
  }, [data]);

//   useEffect(() => {
//     if (decodedToken) return router.push("/home");
//   }, [decodedToken]);

  // Perform any further actions with the combined data



  return (
    <div class="flex  h-full flex-wrap items-center justify-center lg:gap-5 mx-10  min-h-[69dvh]  ">
       <div class="mb-12 p-5 shadow-jubilation flex flex-col  justify-center gap-3 max-w-[40rem] w-full ">
      <Typography variant="h4" className="font-montserrat">
        Edit Profile
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">

          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              {...register("first_name", { required: true })}
              required
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              First Name
            </label>
          </div>

          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              {...register("last_name", { required: true })}
              required
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Last Name
            </label>
          </div>
          <Checkbox   {...register("is_subscribed")}
      label={
        <Typography  className="flex font-semibold text-sm text-blue-gray-700">
          Subscribe to Committee Meetings, Discussions, and other relevant activities.
        </Typography>
      }
    />

          <Button type="submit" className="rounded-none flex justify-center" color="blue">
          {submitStatus === "loading" ?  'Saving..' : submitStatus === "success" ?  <span className="font-montserrat">Saved !</span> : <span className="font-montserrat">Save</span>}

          </Button>
        </div>
      </form>
    </div>

    </div>
  );
}
