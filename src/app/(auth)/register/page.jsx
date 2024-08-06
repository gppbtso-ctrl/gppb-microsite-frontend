"use client";

import FirstForm from "@/components/register/firstform";
import SecondForm from "@/components/register/secondform";
import AuthService from "@/services/auth";
import useAuthStore from "@/store/authStore";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [emailExist, setEmailExist] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNext = async (data) => {
    const params = { email: data.email };
    try {
      const response = await AuthService.validateEmail(params);
      setFormData({ ...formData, ...data });
      setStep(2);
    } catch (error) {
      console.log(error?.response);
      setEmailExist(true);
      // if (error?.response?.data?)
    }
  };

  const handleSubmit = async (data) => {
    const combinedData = { ...formData, ...data };
    delete combinedData.confirm_password;
    setSubmitStatus("loading");
    try {
      const response = await AuthService.register(combinedData);
      setSubmitStatus("success");
      setStep(3);
    } catch (error) {
      console.log(error?.response);
      setSubmitStatus(null);
      // if (error?.response?.data?)
    }
  };

  useEffect(() => {
    if (decodedToken) return router.push("/committees");
  }, [decodedToken]);

  // Perform any further actions with the combined data

  return (
    <div class="h-full">
      <div class="relative flex  from-transparent to-white/80 min-h-[35rem] md:min-h-[75vh] flex-col lg:flex-row items-center justify-center lg:gap-[2rem] bg-[url('/home.png')] bg-cover bg-opacity-10 py-5 mt-[3.5rem]  ">
      <div className="absolute bg-gradient-to-b from-transparent   to-white  w-full bottom-0 h-[2.5rem]"></div>

        <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-1 mb-2">
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl  antialiased tracking-wide font-hanken-grotesk font-medium">WELCOME TO THE </Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">NEW GOVERNMENT</Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">PROCUREMENT ACT</Typography>
        <Typography className="text-3xl md:text-5xl lg:text-6xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-hanken-grotesk font-medium">(NGPA) MICROSITE</Typography>
        <Typography className="text-3xl md:text-4xl lg:text-5xl text-blue-gray-50 drop-shadow-2xl   antialiased tracking-wide font-anonymous-pro ">Republic Act No. 12009</Typography>
        </div>
        
        {step === 1 ? (
          <FirstForm onNext={handleNext} emailExist={emailExist} />
        ) : step === 2 ? (
          <SecondForm onSubmit={handleSubmit} submitStatus={submitStatus} />
        ) : step === 3 ? (
          <div className="p-5 flex items-center rounded-sm shadow-md max-w-[30rem] mx-3 bg-white">
            <Typography variant="lead" className="text-center"> 
              Initial Registration Success! <br />Please check your Email Inbox or
              Spam.
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
}
