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

export default function OPMeetings() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-2 md:p-5 m-3 max-w-5xl rounded-none  shadow-none flex flex-col gap-3">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl  flex-none shadow-md mb-2"
        >
          <img
            src="/ljop-pic1.jpg"
            alt="image 1"
            className="max-h-[35rem] w-full object-cover"
          />
          <img
            src="/ljop-pic2.jpg"
            alt="image 1"
            className="max-h-[35rem] w-full object-cover"
          />
          <img
            src="/ljop-pic3.jpg"
            alt="image 1"
            className="max-h-[35rem] w-full object-cover"
          />
          <img
            src="/ljop-pic4.jpg"
            alt="image 1"
            className="max-h-[35rem] w-full object-cover"
          />
                <img
            src="/ljop-pic5.jpg"
            alt="image 1"
            className="max-h-[35rem] w-full object-cover"
          />
        </Carousel>
        <Typography variant="h5" className="font-sans uppercase text-center mt-2">
          Legislative Journey regarding RA No. 9184 Amendments (Office of the
          President)
        </Typography>
        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; Amending the Republic Act (RA) No. 9184 or the
          Government Procurement Reform Act is one of the priority bills
          included in the Common Legislative Agenda of the 19th Congress to
          advance further the attainment of the social and economic
          transformation agenda in the Philippines.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In response to the pronouncement of the President
          during his State of the Nation Address (SONA) calling both Houses of
          Congress to enact a new procurement law, the Department of Budget and
          Management (DBM), together with the Government Procurement Policy
          Board-Technical Support Office (GPPB-TSO) and in collaboration with
          the Procurement Service (PS), drafted an Administrative Bill which
          aims to propose amendments to RA No. 9184. The Administrative Bill
          contains all recommendations of the Methodology for Assessing
          Procurement Systems (MAPS), comments and inputs of the GPPB, and
          several innovations introduced by the GPPB-TSO.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In August 2023, the DBM, GPPB-TSO, and PS held a
          press briefing, organized by the Presidential Communications Office,
          to provide information on the features of the proposed amendments to
          RA No. 9184. Following this, the Bill was presented to the President
          during the 3rd Legislative-Executive Development Advisory Council
          (LEDAC) in September 2023.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; Subsequently, the DBM submitted the same to the
          House of Representatives and Senate of the Philippines in October
          2023.
        </Typography>
      </Card>
    </div>
  );
}
