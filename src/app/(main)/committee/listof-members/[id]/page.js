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
import Pagination from "@/components/general-widgets/paginator";
import CommitteeNavbar from "@/components/committee/committee-navbar";

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
  const TABLE_HEAD = ["No.", "Name", "Agency"];
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
    const response = await UserService.getComTopics(id);
    return response.data;
  };

  const { data, isLoading, error, isValidating } = useSWR(
    id ? "comTopics" : null,
    getComTopics
  );

  // if (
  //   error?.response?.status == 404 &&
  //   error?.response?.statusText == "Not Found"
  // ) {
  //   router.push("/404");
  // }

  const getComListOfMembers = async () => {
    const response = await UserService.getComListOfMembers(id, page);
    return response.data;
  };

  const {
    data: clomData,
    isLoading: clomIsLoading,
    error: clomError,
    isValidating: clomIsValidating,
  } = useSWR(id ? "comListOfMembers" : null, getComListOfMembers);

  useEffect(() => {
    // Manually trigger a re-fetch when perPage or searchTerm changes
    mutate("comListOfMembers");
  }, [page, mutate]);

  return (
    <div className=" relative w-full  flex flex-col justify-center items-center">
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
            className="z-10 font-montserrat text-sm font-lead max-w-[50rem] leading-0 mx-auto px-3 whitespace-pre-wrap text-justify"
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
      <CommitteeNavbar id={id} />

      <Card className="z-10 mt-5 h-full rounded-none w-full max-w-[99dvw] md:max-w-[60rem] overflow-x-auto drop-shadow-md border-[1px] border-black/65 ">
        <table className="w-full min-w-max table-auto text-left  border-gray-500">
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
            {clomData?.list_members_data?.length !== 0 ? (
              clomData?.list_members_data?.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 w-8">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold text-left"
                    >
                      {index + 1 + (page - 1) * 20}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      color="blue-gray"
                      className="font-semibold text-left text-sm"
                    >
                      {item.first_name} {item.last_name}
                    </Typography>
                  </td>
                  <td className="p-4 max-w-[15rem]">
                    <Typography
                      color="blue-gray"
                      className="font-semibold text-left text-sm"
                    >
                      {item.agency_name}
                    </Typography>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="even:bg-blue-gray-50/50">
                <td className="p-4 w-8" colSpan={3}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    No Data!
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
      <div className="relative w-full max-w-[60rem]">
        <Pagination
          page={page}
          totalPages={
            clomData?.detail == "Invalid page." ? 1 : clomData?.total_pages
          }
          onPageChange={handlePageChange}
          totalEntries={clomData?.count}
        />

        <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
      </div>
    </div>
  );
}
