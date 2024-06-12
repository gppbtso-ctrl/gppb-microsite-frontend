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
        <div className="max-w-4xl w-full flex justify-end ">
          <Button size="sm" className="mb-2 rounded-none">
            Add Committee
          </Button>
        </div>
        <div className="relative w-full  max-w-4xl  z-40">
          <Card className="mt-1 w-full rounded-none border border-gray-500 ">
            <CardBody>
              <TopicTable />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
