"use client";
import FirstForm from "@/app/components/register/firstform";
import SecondForm from "@/app/components/register/secondform";
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
import React, { useState } from "react";

export default function Login() {
  const onSubmit = (data) => {
    console.log(data);
    // Perform any further actions with the combined data
  };
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
      </div>
    </div>
  );
}
