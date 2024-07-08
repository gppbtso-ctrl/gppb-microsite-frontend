"use client";
import { TopicTable } from "@/components/topics/topic.table";
import AddTopicDialog from "@/components/topics/widgets/add-topic-dialog";
import UserService from "@/services/user.services";
import useAuthStore from "@/store/authStore";
import {
  faComment,
  faEye,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
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
import moment from "moment";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Moment from "react-moment";
import "moment-timezone";
import useSWR, { useSWRConfig } from "swr";
import AddCalcActDialog from "@/components/admin/widgets/add-calAct-dialog";

export default function CalendarActivities() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const TABLE_HEAD = ["Title", "Start Date", "End Date", ""];
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(moment().format("YYYY"));
  const handleYearChange = (date) => {
    const year = moment(date).format("YYYY");
    setYear(year);
  };

  const handleOpen = () => setOpen(!open);

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
      year
    );

    return response.data;
  };

  const { data: calActDetails } = useSWR(
    selectedCommittee ? `comCalendarActivies` : null,
    getComCalendarActivities
  );

  useEffect(() => {
    mutate("comCalendarActivies");
  }, [year, selectedCommittee]);

  const handleSelect = (value) => {
    setSelectedCommittee(value);
  };

  const handleDelete = async (id) => {
    const action = "accept";
    setSubmitStatus((prevState) => ({ ...prevState, [id]: "loading" }));
    try {
      const response = await UserService.calendarActDelete(id);
      setSubmitStatus((prevState) => ({ ...prevState, [id]: "success" }));
      setTimeout(() => {
        setSubmitStatus((prevState) => {
          const newItems = { ...prevState };
          delete newItems[id];
          return newItems;
        });
      }, 1500);
      mutate("comCalendarActivies");
    } catch (error) {
      console.log(error?.response);
      setSubmitStatus((prevState) => {
        const newItems = { ...prevState };
        delete newItems[id];
        return newItems;
      });
      // if (error?.response?.data?)
    }
  };

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative", cursor: "pointer" }}>
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className=" relative w-full h-full flex flex-col justify-start items-center z-30 mt-10">
      <div className="w-full min-h-[67vh] max-w-[70vw] relative mb-10 flex flex-col gap-2 ">
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

        {calActDetails ? (
          <>
            <div className="flex justify-between z-50 ">
              {" "}
              <DatePicker
                selected={year}
                onChange={handleYearChange}
                showYearPicker
                dateFormat="yyyy"
                className="p-2 z-50 border "
                calendarContainer={MyContainer}
              />
              <Button
                size="sm"
                color="green"
                className="rounded-none p-2.5"
                onClick={handleOpen}
              >
                Add Activity
              </Button>
            </div>
            <Card className="mt-2 rounded-none overflow-auto z-0">
              {" "}
              <table className="w-full min-w-max table-auto text-left z-0">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-300 p-4"
                      >
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal leading-none "
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calActDetails ? (
                    calActDetails.map((item, index) => {
                      const classes = "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td
                            className={`${classes} min-w-44 break-words max-w-[22rem]`}
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.title}
                            </Typography>
                          </td>
                          <td
                            className={`${classes}  break-words max-w-[3rem]`}
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <Moment
                                parse="YYYY-MM-DD HH:mm"
                                format="YYYY-MM-DD HH:mm"
                                tz="Asia/Manila"
                              >
                                {" "}
                                {item.start}
                              </Moment>
                            </Typography>
                          </td>
                          <td
                            className={`${classes}  break-words max-w-[3rem]`}
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <Moment
                                parse="YYYY-MM-DD HH:mm"
                                format="YYYY-MM-DD HH:mm"
                                tz="Asia/Manila"
                              >
                                {" "}
                                {item.end}
                              </Moment>
                            </Typography>
                          </td>
                          <td className={`${classes} w-10`}>
                            <Button
                              variant="text"
                              size="sm"
                              className="rounded-sm bg-blue-500 text-white hover:text-black  "
                              onClick={() => handleDelete(item.id)}
                              disabled={item?.id in submitStatus}
                            >
                              {item?.id in submitStatus &&
                              submitStatus[item.id] === "loading" ? (
                                <Spinner className="w-10 h-4" color="white" />
                              ) : submitStatus === "success" ? (
                                "success"
                              ) : (
                                <FontAwesomeIcon icon={faTrashCan} />
                              )}
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">
                        Loading Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Card>
          </>
        ) : null}
      </div>
      <AddCalcActDialog
        id={selectedCommittee}
        open={open}
        handleOpen={handleOpen}
      />
    </div>
  );
}
