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
import useLoading from "@/utils/use-loading";
import LoadingScreen from "@/components/loading/loading";

const localizer = momentLocalizer(moment);
export default function Topics() {
  const loading = useLoading(1200);
  const { id } = useParams();
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

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

  const getComCalendarActivities = async () => {
    const response = await UserService.getComCalendarActivities(id);
    return response.data;
  };

  const {
    data: calActivities,
    isLoading: calIsLoading,
    error: calError,
    isValidating: CalIsValidating,
  } = useSWR(id ? "comCalendarActivities" : null, getComCalendarActivities);

  const convertedActivities = calActivities?.map((activity) => ({
    ...activity,
    start: new Date(activity.start),
    end: new Date(activity.end),
  }));

  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      {loading ? <LoadingScreen /> : null}
      <div className="w-full h-full max-w-full flex items-center justify-center mb-3 ">
        <img
          src={data?.committee_data?.photo_id}
          className="w-[60rem] h-[20rem] object-cover lg:h-[22.5rem] shadow-xl brightness-50 "
        />
        <Typography
          className="absolute font-montserrat text-[calc(1vw+2rem)] font-lead max-w-[50rem] mx-auto p-3"
          color="white"
        >
          {" "}
          {data?.committee_data?.title}
        </Typography>
      </div>
      <div className="w-full max-w-[60rem] flex  justify-between">
        {" "}
        <Button
          variant="text"
          size="sm"
          className=":inline-block rounded-none hover:text-blue-400 "
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
          <span className="font-sans text-[1.2em]">List Of Members</span>
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/calendar-activities/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/calendar-activities/${id}`)}
        >
          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/calendar-activities/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >
            Calendar Activities
          </span>{" "}
          { pathname === `/committee/calendar-activities/${id}` ? <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700"/> : null}
        </Button>
      </div>
      <Card className="z-10 mt-5 rounded-none w-full max-w-[60rem] p-2 shadow-lg">
        {calActivities ? (
          <Calendar
            localizer={localizer}
            events={convertedActivities}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, width: "100%" }}
            defaultDate={moment().toDate()}
          />
        ) : null}
      </Card>

      <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
    </div>
  );
}
