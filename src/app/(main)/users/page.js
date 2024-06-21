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
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import useSWR from "swr";

export default function Topics() {
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null);
  const TABLE_HEAD = ["Email", "First Name", "Last Name", "Date Joined", ""];

  useEffect(() => {
    setLoaded(true);
    if (!decodedToken || decodedToken?.role !== "ADMIN") {
      router.push("/committees");
    }
  }, [decodedToken]);

  const getUsers = async () => {
    const response = await UserService.getUsers();
    return response?.data;
  };
  const { data, isLoading, error, mutate, isValidating } = useSWR(
    "users",
    getUsers
  );

  const handleAction = async (id) => {
    const action = "accept";
    setSubmitStatus("loading");
    try {
      const response = await UserService.postUserAction(id, action);
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 1000);
      mutate('users')
    } catch (error) {
      console.log(error?.response);
      setSubmitStatus(null);
      // if (error?.response?.data?)
    }
    return response.data;
  };

  console.log(data);

  console.log(decodedToken);
  return (
    <div className=" relative w-full h-full flex justify-center items-center z-30">
      <Card className="mt-10 rounded-none">
        {" "}
        <table className="w-full min-w-max table-auto text-left">
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
            {data?.map((item, index) => {
              const classes = "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.first_name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.last_name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <Moment date={item.date_joined} format="MMM DD, YYYY" />
                    </Typography>
                  </td>
                  {item.is_active == false ? (
                    <td className={`${classes} flex gap-2`}>
                      <Button
                        variant="text"
                        size="sm"
                        className="rounded-none bg-blue-500 text-white hover:text-black w-[5rem] flex items-center justify-center"
                        onClick={() => handleAction(item.id)}
                      >
                        {submitStatus === "loading" ? (
                          <Spinner color="white" />
                        ) : submitStatus === "success" ? (
                          "Success"
                        ) : (
                          "Accept"
                        )}
                      </Button>
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
