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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function Register() {
  const router = useRouter()
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { token, decodedToken, setToken, removeToken } = useAuthStore();

  const handleNext = (data) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    setStep(2);
  };
  const handleSubmit = async (data) => {
    const combinedData = { ...formData, ...data };
    delete combinedData.confirm_password;

    try {
      const response = await AuthService.register(combinedData);
    } catch (error) {
      console.log(error?.response);
      if (error?.response?.status === 429) setStatusAdd("limitRequest");
      // if (error?.response?.data?)
    }
  };




useEffect(() => {
  if(decodedToken) return router.push('/committee') 
}, [decodedToken])


  // Perform any further actions with the combined data

  return (
    <div class="h-full">
      <div class="flex  h-full h-max-[40rem] flex-wrap items-center justify-center lg:gap-5 mx-10 my-10 lg:my-[8rem] ">
        <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-5/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            alt="Sample image"
          />
        </div>
        {step === 1 ? (
          <FirstForm onNext={handleNext} />
        ) : step === 2 ? (
          <SecondForm onSubmit={handleSubmit} />
        ) : null}
      </div>
    </div>
  );
}
