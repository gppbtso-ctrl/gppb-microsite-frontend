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
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useLoading from "@/utils/use-loading";
import LoadingScreen from "@/components/loading/loading";
import Pagination from "@/components/general-widgets/paginator";

const localizer = momentLocalizer(moment);

export default function Topics() {
  const loading = useLoading(1200);
  const pathname = usePathname();
  const { id } = useParams();
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Custom logic before updating the page
    setPage(newPage);
  };

  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);



  const handleOpen = () => setOpen(!open);

  const getComTopics = async () => {
    const response = await UserService.getComTopics(id, page);
    return response.data;
  };

  const { data, isLoading, error, isValidating } = useSWR(
    id ? "comTopics" : null,
    getComTopics
  );

  useEffect(() => {
    // Manually trigger a re-fetch when perPage or searchTerm changes
    mutate("comTopics");
  }, [page, mutate]);

  if (
    error?.response?.status == 404 &&
    error?.response?.statusText == "Not Found"
  ) {
    router.push("/404");
  }
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      {loading ? <LoadingScreen /> : null}
      <div className="w-full h-full max-w-full flex items-center justify-center mb-3 ">
   
        <div className="relative w-full max-w-[60.2rem] min-h-[22rem] flex flex-col justify-center gap-2 h-fit p-5">
     
        <Typography
          className=" z-10 font-montserrat text-[calc(0.9vw+2rem)] font-lead max-w-[50rem] mx-auto px-3"
          color="white"
        >
          {" "}
          {data?.committee_data?.title}
        </Typography>
        <Typography
          className="z-10 font-montserrat text-sm font-lead max-w-[50rem] mx-auto px-3 whitespace-pre-wrap text-justify"
          color="white"
        >
          {" "}
          {data?.committee_data?.description}
        </Typography>
        <img
          src={data?.committee_data?.photo_id}
          className=" absolute top-0 left-0 right-0 z-0 h-full w-full object-cover shadow-xl brightness-50 "
        />
        </div>
      </div>
      <div className="w-full max-w-[60rem] flex  justify-between px-4">
        {" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/${id}` ? "pointer-events-none" : ""
          }`}
          onClick={() => router.push(`/committee/${id}`)}
        >
          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/${id}` ? "text-blue-500" : ""
            }`}
          >
            Provisions
          </span>
          {pathname === `/committee/${id}` ? (
            <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700" />
          ) : null}
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/listof-members/${id}`
              ? "pointer-events-none"
              : ""
          }`}
          onClick={() => router.push(`/committee/listof-members/${id}`)}
        >
          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/listof-members/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >
            List Of Members
          </span>
          {pathname === `/committee/listof-members/${id}` ? (
            <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700" />
          ) : null}
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/calendar-activities/${id}`
              ? "pointer-events-none"
              : ""
          }`}
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
        </Button>
      </div>
      <div>
        <div className=" w-full flex justify-end"></div>
        <div className="relative w-full ">
          <Card className="border-[1px] border-black/65  drop-shadow-md mt-5 w-full lg:min-w-[60rem] md:min-w-[50rem] min-w-[29rem] rounded-sm !p-0">
            <CardBody className="p-0 w-full max-w-[60rem]">
              <div className="flex h-15 w-full gap-5 p-5 py-4 justify-center items-center ">
                <Typography className="text-black font-semibold max-w-24 ">
                  Provisions
                </Typography>
                {/* <Typography>Example Topic</Typography> */}
                <div className="flex justify-end grow">
                  {loaded ? (
                    decodedToken?.role === "TWG" ||
                    decodedToken?.role === "ADMIN" ? (
                      <Button
                        onClick={handleOpen}
                        size="sm"
                        className="rounded-none "
                      >
                        Add Provision
                      </Button>
                    ) : null
                  ) : null}
                </div>
              </div>
              <div className="bg-blue-gray-300 h-[1px]"></div>
              <TopicTable data={data} />
              
            </CardBody>
          </Card>
          <Pagination
                page={page}
                totalPages={data?.detail == "Invalid page." ? 1 : data?.total_pages}
                onPageChange={handlePageChange}
                totalEntries={data?.count}
              />
        </div>
      </div>
      <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
    </div>
  );
}
