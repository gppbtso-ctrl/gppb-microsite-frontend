"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const searchParams = useSearchParams()
  const loading = useLoading(1200);
  console.log(searchParams.get('value'))

  return (
    <div className="relative flex flex-col justify-start items-center z-10 min-h-[52vh] ">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none min-w-[50vw] flex flex-col justify-start">
        <div className="flex gap-2">
          <Typography className="text-2xl">Search Results</Typography>
        </div>
      <div className="flex flex-col gap-1">
        <div className="w-full flex gap-1 mt-2">
          <div class="flex-1 border border-gray-500 py-1 px-2 font-sans font-semibold text-gray-700">Subjects</div>
          <div class="flex-2 border border-gray-500 py-1 px-2 font-sans font-semibold text-gray-700">Comments</div>
          <div class="flex-2 border border-gray-500 py-1 px-2 font-sans font-semibold text-gray-700">Last Activity</div>
        </div>
        <div class="flex-2 border border-gray-500 py-1 px-2 font-sans  text-gray-700 text-center"> No Results Found</div>
        </div>
      </Card>
    </div>
  );
}
