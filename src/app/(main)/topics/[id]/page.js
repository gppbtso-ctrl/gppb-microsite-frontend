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

export default function Topics() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  const handleOpen = () => setOpen(!open);

  const getComTopics = async () => {
    const response = await UserService.getComTopics(id);
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
    "comTopics",
    getComTopics
  );

  if (
    error?.response?.status == 404 &&
    error?.response?.statusText == "Not Found"
  ) {
    router.push("/404");
  }

  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full max-w-full flex items-center justify-center mb-3">
        <img
          src={data?.photo_id}
          className="w-[60rem] h-[20rem] object-cover lg:h-[22.5rem] shadow-xl brightness-50 "
        />
        <Typography className="absolute" color="white" variant="h2">
          {" "}
          {data?.title}
        </Typography>
      </div>
      <div>
        <div className="max-w-4xl w-full flex justify-end"></div>
        <div className="relative w-full  max-w-4xl  z-40">
          <Card className="mt-1 w-full rounded-none border border-gray-500 !p-0">
            <CardBody className="p-0">
              <div className="flex h-15 w-full gap-5 p-5 py-3 justify-center items-center ">
                <Typography className="font-montserrat text-black font-semibold max-w-24 ">
                  Topics
                </Typography>
                {/* <Typography>Example Topic</Typography> */}
                <div className="flex justify-end grow">
                  {loaded ? (
                    decodedToken ? (
                      <Button
                        onClick={handleOpen}
                        size="sm"
                        className="rounded-none "
                      >
                        Add Topic
                      </Button>
                    ) : null
                  ) : null}
                </div>
              </div>
              <div className="bg-blue-gray-300 h-[1px]"></div>
              <TopicTable data={data} />
            </CardBody>
          </Card>
        </div>
      </div>
      <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
    </div>
  );
}
