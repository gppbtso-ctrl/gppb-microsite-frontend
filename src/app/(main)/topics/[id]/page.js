"use client";
import { TopicTable } from "@/components/topics/topic.table";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export default function Topics() {
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      <div>
        <div className="max-w-4xl w-full flex justify-end">
        </div>
        <div className="relative w-full  max-w-4xl  z-40">
          <Card className="mt-1 w-full max-w-[60rem] rounded-none border border-gray-500 !p-0">
            <CardBody className="p-0">
              <div className="flex h-15 w-full gap-5 p-5 py-3 justify-center items-center ">
                <Typography className="font-montserrat text-black font-normal max-w-24 ">Topic</Typography>
                {/* <Typography>Example Topic</Typography> */}
                <div className="flex justify-end grow"> 
                <Button size="sm" className="rounded-none ">Add Topic</Button>
                </div>
              </div>
              <div className="bg-blue-gray-300 h-[1px]"></div>
              <TopicTable />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
