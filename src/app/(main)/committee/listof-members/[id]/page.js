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
import { useParams, useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);
export default function Topics() {
  const { id } = useParams();
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);
  const TABLE_HEAD = ["No.","Name", "Agency"];

  const handleOpen = () => setOpen(!open);

  const getComTopics = async () => {
    const response = await UserService.getComTopics(id);
    return response.data;
  };

  const { data, isLoading, error, isValidating } = useSWR(
    id ? "comTopics" : null,
    getComTopics
  );

  if (
    error?.response?.status == 404 &&
    error?.response?.statusText == "Not Found"
  ) {
    router.push("/404");
  }

  const getComListOfMembers = async () => {
    const response = await UserService.getComListOfMembers(id);
    return response.data;
  };

  const {
    data: clomData,
    isLoading: clomIsLoading,
    error: clomError,
    isValidating: clomIsValidating,
  } = useSWR(id ? "comListOfMembers" : null, getComListOfMembers);

console.log(clomData)
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full max-w-full flex items-center justify-center mb-3 ">
        <img
          src={data?.photo_id}
          className="w-[60rem] h-[20rem] object-cover lg:h-[22.5rem] shadow-xl brightness-50 "
        />
        <Typography
          className="absolute font-montserrat text-[calc(1vw+2rem)] font-lead max-w-[50rem] mx-auto p-3"
          color="white"
        >
          {" "}
          {data?.title}
        </Typography>
      </div>
      <div className="w-full max-w-[60rem] flex  justify-between">
        {" "}
        <Button
          variant="text"
          size="sm"
          className=":inline-block rounded-none hover:text-blue-400"
          onClick={() => router.push(`/committee/${id}`)}
        >
          <span className="font-sans text-[1.2em]">Provisions</span>
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className="inline-block rounded-none hover:text-blue-400"
          onClick={() => router.push(`/committee/listof-members/${id}`)}
        >
         <span className={`font-sans text-[1.2em] ${pathname === `/committee/listof-members/${id}` ? 'text-blue-500' : ''}`}>List Of Members</span>
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className="inline-block rounded-none hover:text-blue-400"
          onClick={() => router.push(`/committee/calendar-activities/${id}`)}
        >
<span className={`font-sans text-[1.2em] ${pathname === `/committee/calendar-activities/${id}` ? 'text-blue-500' : ''}`}>
Calendar Activities
</span>        </Button>
      </div>
      <Card className="z-10 mt-5 rounded-none w-full max-w-[60rem] shadow-lg">
      <table className="w-full min-w-max table-auto text-left border border-gray-500">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 p-4">
                <Typography
                  variant="small"
              
                  className="font-semibold text-black opacity-85"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clomData?.map((item, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4 w-8">
                <Typography variant="small" color="blue-gray" className="font-normal text-left">
                {index+1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal text-left">
                  {item.first_name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal text-left">
                {item.first_name}
                </Typography>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </Card>

      <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
    </div>
  );
}
