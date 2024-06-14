"use client";
import { TopicTable } from "@/components/topics/topic.table";
import AddTopicDialog from "@/components/topics/widgets/add-topic-dialog";
import UserService from "@/services/user.services";
import useAuthStore from "@/store/authStore";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function Comments() {
  return (
    <div className=" relative h-full flex flex-col justify-center items-center z-50">
      <Card className="mt-10 mx-3 w-full max-w-[60rem] h-full rounded-none border flex flex-row justify-center items-center gap-5 border-gray-500 !p-0 ">
        <div className="h-full p-7 flex flex-col gap-3 flex-1">
          <div>
            <div className="flex flex-col ">
              <Typography className="font-montserrat">Admin</Typography>
              <Typography variant="small" className="font-montserrat">
                Arpil 20
              </Typography>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <Typography className="font-montserrat font-semibold text-2xl">
              Tell me whos that girl that walk walk in the club
            </Typography>
            <Typography className="font-montserrat font-normal text-md">
              in Paradise
            </Typography>
          </div>
          <div className="break-words ">
            <Typography className="font-montserrat text-lg font-normal">
              This is your forum post. Use this space to connect with your
              audience in a way that’s current and interesting. Post relevant
              information that will encourage discussion and collaboration. With
              full freedom to edit posts, as well as add stunning media,
              managing your forum has never been easier.
            </Typography>
          </div>
          <div className="h-[1px] bg-gray-500 mt-5 mb-2"></div>

          <div className="flex flex-col gap-3">
            <Typography className="font-montserrat text-sm font-semibold">
              Comments
            </Typography>
            <div>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900  rounded-none border-2 border-black focus:rounded-none focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Write your comment here..."
              ></textarea>
              <div className="flex justify-end items-center mt-1">
                <Button size="sm" variant="outlined" className="rounded-none">
                  Publish
                </Button>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-0 p-3 border-[1.5px] border-black mt-3">
              <div className="flex flex-col gap-0 mb-2">
                <Typography className="font-montserrat font-normal">
                  Admin
                </Typography>
                <Typography className="font-montserrat text-sm font-normal">
                  1s
                </Typography>
              </div>
              <Typography className="font-montserrat font-normal ">
                dsadhaskjdhaskjdhaskjdhksj
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
