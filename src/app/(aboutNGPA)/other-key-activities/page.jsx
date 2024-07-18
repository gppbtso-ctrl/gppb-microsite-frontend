"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";

export default function OtherKeyActivities() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none flex flex-col gap-3">
        
        <Carousel autoplay={true} loop={true} className="rounded-xl  flex-none shadow-md mb-2">
      <img
        src="/oka-pic1.jpg"
        alt="image 1"
        className="max-h-[35rem] w-full object-cover"
      />
         <img
        src="/oka-pic2.jpg"
        alt="image 1"
        className="max-h-[35rem] w-full object-cover"
      />
            <img
        src="/oka-pic3.jpg"
        alt="image 1"
        className="max-h-[35rem] w-full object-cover"
      />
    </Carousel>
    <Typography variant="h5" className="font-sans uppercase text-center">
          Other Key Activities
        </Typography>
        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; On October 2022, the Government Procurement
          Policy Board (GPPB) and the Securities and Exchange Commission (SEC)
          entered into a data-sharing agreement to promote transparency and
          improve the process of validating the bidder’s qualification in the
          public procurement.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In general, the data-sharing agreement is part of
          the SEC’s action plan to address strategic deficiencies in the
          country’s corporate governance, which placed the country under
          increased monitoring by the Financial Action Task Force (FATF).Among
          the FATF recommendations is to ensure that adequate, accurate, and
          current information on the beneficial ownership and control of
          juridical persons is shared among government agencies to prevent the
          misuse of juridical persons for money laundering, terrorist financing,
          and other illicit and proliferation financing. This also includes the
          requirement to ensure that public authorities have access to
          beneficial ownership information of juridical persons in the course of
          public procurement to counter graft and corruption.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The GPPB, through its Technical Support Office
          (TSO), conducted coordination meetings with the SEC and reviewed
          thoroughly the proposed data-sharing agreement. Subsequently, the
          GPPB-TSO recommended the signing of the data-sharing agreement.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; As the Office intensifies its procurement reforms
          and initiatives on participatory procurement, the GPPB-TSO also
          engaged the Open Government Partnership (OGP) through the
          participation in their Asia Pacific Open Contracting Community of
          Practice pioneer cohort of the OGP flagship program last March 2023 as
          the Office intensifies its procurement reforms and initiatives on
          participatory procurement.
        </Typography>

      
      </Card>
    </div>
  );
}
