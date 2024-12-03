"use client";
import Pagination from "@/components/general-widgets/paginator";
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
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import useSWR, { useSWRConfig } from "swr";

export default function MonthyReport() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const TABLE_HEAD = ["Month", "Com1", "Com2", "Com3", "Com4", "Com5"];

  useEffect(() => {
    setLoaded(true);
    if (!decodedToken || decodedToken?.role !== "ADMIN") {
      router.push("/committees");
    }
  }, [decodedToken]);

  const getMonthlyReport = async () => {
    const response = await UserService.getMonthlyReport();
    return response.data;
  };
  const { data, isLoading, error, isValidating } = useSWR(
    "monthyReport",
    getMonthlyReport
  );

  return (
    <div className=" relative w-full h-full flex flex-col justify-start items-center z-30 min-h-[83vh]">
      <div className="max-w-[85vw] ">
        <Card className="mt-[10rem] w-full rounded-none shadow-none overflow-auto">
          <table className="min-w-6xl md:min-w-[75rem] max-w-[80rem] table-auto text-left ">
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
              {data ? (
                data?.length !== 0 ? (
                  data?.map((item, index) => {
                    const classes = "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <Moment date={item.month} format="YYYY, MMMM" />
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.com1}
                          </Typography>
                        </td>
                        <td className={`${classes} max-w-[20rem]`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.com2}
                          </Typography>
                        </td>
                        <td className={`${classes} max-w-[40rem]`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.com3}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            {item.com4}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            {item.com5}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      No Data
                    </td>
                  </tr>
                )
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
      </div>
    </div>
  );
}
