import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { faComment, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthStore from "@/store/authStore";
import useSWR from "swr";
import UserService from "@/services/user.services";
import CardsLoading from "../loading/cards-loading";
import Link from "next/link";
import Image from "next/image";
import truncateString from "@/utils/truncate_string";

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

  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center z-10">
      <div>
        {/* <div className="max-w-4xl w-full flex justify-end ">
        {loaded ? decodedToken ? <Button size="sm" className="mb-2 rounded-none">
          Add Committee
        </Button>:null : null}
        
      </div> */}
        <div className="relative grid grid-cols-1  lg:grid-cols-2  max-w-[30rem] lg:max-w-[67rem] mx-1 gap-9 z-40 mt-3">
          {isLoading ? (
            <CardsLoading />
          ) : (
            data?.map((committee, index) => (
              <Card
                className="relative drop-shadow-md  grid h-full w-full max-w-[30rem] items-end justify-center rounded-sm overflow-hidden text-center"
                key={committee.id}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/50" />
                  <img src={committee.photo_id ?? "/default-com.webp"} className="h-full w-full object-cover" />{" "}
                </CardHeader>
                <CardBody className="flex flex-col min-h-[25rem]  min-w-full md:min-w-[30rem]  justify-end z-10  gap-1 p-6">
                  <Link href={`/committee/${committee.id}`}>
                    <Typography
                      variant="h4"
                      color="white"
                      className="  text-left text-blue-50 text-[1.7rem]  drop-shadow-md font-montserrat font-medium leading-[1.5] hover:text-blue-500 transition-all duration-150"
                    >
                      {committee.title}
                    </Typography>
                  </Link>
                  <Typography variant="small" color="white" className="text-justify">{truncateString(committee.description, 125)}</Typography>
                  <Typography className=" text-white self-start mt-1">
                    <div className="flex gap-2 items-center">
                      {loaded ? (
                        decodedToken?.committee_list?.includes(committee.id) ? (
                          <Typography className="text-sm text-yellow-400">
                            <FontAwesomeIcon icon={faStar} />
                          </Typography>
                        ) : null
                      ) : null}
                      <span>
                        <FontAwesomeIcon
                          icon={faComment}
                          className=" text-blue-400 mr-1"
                        />
                        {committee.topic_count}
                      </span>
                    </div>
                  </Typography>
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
