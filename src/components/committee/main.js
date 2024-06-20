import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthStore from "@/store/authStore";
import useSWR from "swr";
import UserService from "@/services/user.services";
import CardsLoading from "../loading/cards-loading";
import Link from "next/link";

const CommitteeMain = () => {
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  const getCommittees = async () => {
    const response = await UserService.getCommittees();
    console.log(response?.data);
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
    "committees",
    getCommittees
  );

  console.log(data, "from main committee");
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center z-10">
      <div>
        {/* <div className="max-w-4xl w-full flex justify-end ">
        {loaded ? decodedToken ? <Button size="sm" className="mb-2 rounded-none">
          Add Committee
        </Button>:null : null}
        
      </div> */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2  max-w-[30rem] lg:max-w-[70rem] gap-8 z-40 mt-3">
          {isLoading ? (
            <CardsLoading />
          ) : (
            data?.map((committee) => (
              <Card className="mt-1 w-[28rem] md:w-[28rem] lg:w-[30rem] rounded-none border border-gray-300 ">
                <CardHeader
                  color="blue-gray"
                  className=" h-[17rem]   max-w-full mx-0 rounded-none mt-0 shadow-md "
                >
                  <img
                    src={committee.photo_id}
                    alt="card-image"
                    className=" object-fill h-full w-full "
                  />
                </CardHeader>
                <CardBody className="pt-4 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <Link href={`/committee/${committee.id}`}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className=" text-lg font-monserrat hover:text-blue-400 transition-all duration-300 cursor-pointer"
                      >
                        {committee.title}
                      </Typography>
                    </Link>
                    {/* <Typography
                      variant="lead"
                      color="blue-gray"
                      className=" text-md font-monserrat"
                    >
                      Follow
                    </Typography> */}
                  </div>
                  <div className="mb-2 flex flex-row gap-3">
                    {/* <Typography className="text-sm">
                      <FontAwesomeIcon icon={faEye} className=" font-thin " />
                      <span className=" font-montserrat"> 0 </span>
                    </Typography> */}
                    <Typography className="text-sm ">
                      <FontAwesomeIcon icon={faComment} />
                      <span className="font-montserrat">
                        {" "}
                        {committee.topic_count}{" "}
                      </span>
                    </Typography>
                  </div>
                  <div className="min-h-10">
                    <Typography
                      variant="lead"
                      className="text-sm font-montserrat h-fit break-words"
                    >
                      {committee.description}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommitteeMain;
