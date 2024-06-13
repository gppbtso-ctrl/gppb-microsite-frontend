"use client";
import CommitteeMain from "@/components/committee/main";
import CardsLoading from "@/components/loading/cards-loading";
import LoadingScreen from "@/components/loading/loading";
import useLoading from "@/utils/use-loading";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";



export default function Home() {
  const loading = useLoading(1200)
  return (
   <>
{loading ? <LoadingScreen/> : null}
<CommitteeMain/>

   </>
  );
}
