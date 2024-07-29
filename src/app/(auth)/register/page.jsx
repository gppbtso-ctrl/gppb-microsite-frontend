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
      <div class="flex  h-full h-max-[40rem] flex-col lg:flex-row  items-center justify-center lg:gap-5 mx-10 my-10 lg:my-[3rem] ">
        <div class="shrink-1 mb-2 grow-0 basis-auto md:mb-3.5 md:w-[40rem] md:shrink-0 lg:w-6/12 xl:w-5/12">
          <Image
            src={`/regloginpicture.webp`}
            class="w-full h-[28rem] object-fit shadow-lg rounded-lg"
            alt="Sample image"
            width={450}
            height={500}
            priority={true}
          
          />
        </div>
        {step === 1 ? (
          <FirstForm onNext={handleNext} emailExist={emailExist} />
        ) : step === 2 ? (
          <SecondForm onSubmit={handleSubmit} submitStatus={submitStatus} />
        ) : step === 3 ? (
          <div className="p-5 flex items-center border-2 shadow-md max-w-[30rem] mx-3">
            <Typography variant="lead" className="text-center">
              Initial Registration Success! Please check your Email Inbox or
              Spam.
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
}
