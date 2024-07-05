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
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import useSWR, { useSWRConfig } from "swr";

export default function CalendarActivities() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const TABLE_HEAD = ["Email", "First Name", "Last Name", "Date Joined", ""];

  const getCommittees = async () => {
    const response = await UserService.getCommittees();
    console.log(response?.data);
    return response.data;
  };

  const { data, isLoading, error, isValidating } = useSWR(
    "committees",
    getCommittees
  );

  const getComCalendarActivities = async () => {
    const response = await UserService.getComCalendarActivities(
      selectedCommittee,
      selectedYear
    );
    console.log(response?.data);
    return response.data;
  };

  const { data: calActDetails } = useSWR(
    selectedCommittee ? `comCalendarActivies` : null,
    getComCalendarActivities
  );

  useEffect(() => {
    mutate("comCalendarActivies");
  }, [selectedYear, selectedCommittee]);

  const handleSelect = (value) => {
    setSelectedCommittee(value);
  };
  console.log(calActDetails);
  return (
    <div className=" relative w-full h-full flex flex-col justify-start items-center z-30 mt-10">
      <div className="w-full min-h-[67vh] max-w-[50vw] relative mb-10 flex flex-col gap-2 ">
        <Typography variant="h2">Calendar Activies</Typography>
        <Select label="Select Committee" onChange={handleSelect}>
          {data ? (
            data?.map((committee) => (
              <Option key={committee.id} value={committee.id}>
                {committee.title}
              </Option>
            ))
          ) : (
            <Option value={""}>No committees available</Option>
          )}
        </Select>

        {calActDetails ? "awswww" : null}
      </div>
    </div>
  );
}
