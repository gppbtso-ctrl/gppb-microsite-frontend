"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/committees");
    }, 2500);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="z-10 max-w-6xl  w-full items-center justify-center font-mono text-sm lg:flex">
        <Typography variant="lead" className="flex justify-center p-3 bg-blue-400 w-[49.5rem] text-white shadow-sm">
         Government Procurement Policy Board - Technical Support Office
        </Typography>
       
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Typography variant="h1">New Government Procurement Act</Typography>
      </div>

     
    </main>
  );
}
