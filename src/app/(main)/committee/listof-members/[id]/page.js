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


const localizer = momentLocalizer(moment);
export default function Topics() {
  const loading = useLoading(1200);
  const { id } = useParams();
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname()
  const TABLE_HEAD = ["No.","Name", "Agency"];
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Custom logic before updating the page
    console.log("Changing to page:", newPage);
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
    const response = await UserService.getComListOfMembers(id);
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
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
          {loading ? <LoadingScreen/> : null}
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
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/${id}`)}
        >

          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >Provisions</span>
          { pathname === `/committee/${id}` ? <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700"/> : null}
         
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/listof-members/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/listof-members/${id}`)}
        >

          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/listof-members/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >List Of Members</span>
          { pathname === `/committee/listof-members/${id}` ? <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700"/> : null}
         
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
        
        </Button>
      </div>
      <Card className="z-10 mt-5 rounded-none w-full max-w-[60rem] drop-shadow-md border-[1px] border-black/65 ">
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
          {clomData?.list_members_data?.length !== 0 ? clomData?.list_members_data?.map((item, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4 w-8">
                <Typography variant="small" color="blue-gray" className="font-semibold text-left">
                {index+1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography  color="blue-gray" className="font-semibold text-left text-sm">
                  {item.first_name} {item.last_name} 
                </Typography>
              </td>
              <td className="p-4">
                <Typography  color="blue-gray" className="font-semibold text-left text-sm">
                {item.agency_name}
                </Typography>
              </td>
             
            </tr>
          )):  <tr className="even:bg-blue-gray-50/50">
          <td className="p-4 w-8" colSpan={3}>
      <Typography variant="small" color="blue-gray" className="font-normal text-center">
        No Data!
      </Typography>
    </td>
  </tr>}
        </tbody>
      </table>
      </Card>
      <div className="relative w-full max-w-[60rem]">
      <Pagination
                page={page}
                totalPages={clomData?.detail == "Invalid page." ? 1 : clomData?.total_pages}
                onPageChange={handlePageChange}
                totalEntries={clomData?.count}
              />

      <AddTopicDialog open={open} handleOpen={handleOpen} id={data?.id} />
      </div>
    </div>
  );
}
