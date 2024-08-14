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
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import useSWR, { useSWRConfig } from "swr";

export default function Topics() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const TABLE_HEAD = [
    "Email",
    "First Name",
    "Last Name",
    "Statement",
    "Date Joined",
    "Action",
  ];

  useEffect(() => {
    setLoaded(true);
    if (!decodedToken || decodedToken?.role !== "ADMIN") {
      router.push("/committees");
    }
  }, [decodedToken]);

  const getUsers = async () => {
    const response = await UserService.getUsers(page, searchTerm);
    return response.data;
  };
  const { data, isLoading, error, isValidating } = useSWR("users", getUsers);

  const handleAction = async (id) => {
    const action = "accept";
    setSubmitStatus((prevState) => ({ ...prevState, [id]: "loading" }));
    try {
      const response = await UserService.postUserAction(id, action);
      setSubmitStatus((prevState) => ({ ...prevState, [id]: "success" }));
      setTimeout(() => {
        setSubmitStatus((prevState) => {
          const newItems = { ...prevState };
          delete newItems[id];
          return newItems;
        });
      }, 1500);
      mutate("users");
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

  const handlePageChange = (newPage) => {
    // Custom logic before updating the page
    setPage(newPage);
  };

  useEffect(() => {
    mutate('users')
  }, [searchTerm,page])
  

  return (
    <div className=" relative w-full h-full flex flex-col justify-start items-center z-30 min-h-[83vh]">
      <div className="max-w-[80vw] ">
      <div className="flex flex-row justify-end w-full mt-[8rem]">
          <div className="w-[13rem]">
            <Input
              type="text"
              label="Search"
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      <Card className="mt-2  rounded-none shadow-none overflow-auto">
        <table className="w-full min-w-max table-auto text-left ">
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
              data?.search_data?.length !== 0 ? (
                data?.search_data?.map((item, index) => {
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
                      <td className={`${classes} max-w-[20rem]`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.brief_statement}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          <Moment
                            date={item.date_joined}
                            format="MMM DD, YYYY"
                          />
                        </Typography>
                      </td>
                      {item.is_active == false ? (
                        <td className={`${classes} max-w-fit`}>
                          <Button
                            variant="text"
                            size="sm"
                            className="rounded-none bg-blue-500 text-white hover:text-black w-[5rem] flex items-center justify-center"
                            onClick={() => handleAction(item.id)}
                            disabled={item?.id in submitStatus}
                          >
                            {item?.id in submitStatus &&
                            submitStatus[item.id] === "loading" ? (
                              <Spinner className="w-10 h-4" color="white" />
                            ) : submitStatus === "success" ? (
                              "success"
                            ) : (
                              "Accept"
                            )}
                          </Button>
                        </td>
                      ) : (
                        <td className={classes}>
                          <Button
                            variant="text"
                            size="sm"
                            className="rounded-none bg-blue-gray-400 text-white hover:text-black w-[5rem] flex items-center justify-center"
                            disabled={true}
                          >
                            Accepted
                          </Button>
                        </td>
                      )}
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
      <Pagination
                page={page}
                totalPages={data?.detail == "Invalid page." ? 1 : data?.total_pages}
                onPageChange={handlePageChange}
                totalEntries={data?.count}
              />
      </div>
    </div>
  );
}
