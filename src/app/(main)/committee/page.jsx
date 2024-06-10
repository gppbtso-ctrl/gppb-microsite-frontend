"use client";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export default function Home() {
  return (
    <div className=" relative w-full h-full flex justify-center items-center">
      <div className="relative grid grid-cols-2 max-w-4xl gap-4 z-40">
        <Card className="mt-6 w-96 rounded-none border border-gray-500 ">
          <CardBody>
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className=" text-lg font-monserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className=" text-md font-monserrat"
              >
                Follow
              </Typography>
            </div>
            <div className="mb-2 flex flex-row gap-3">
              <Typography className="text-sm">
                <FontAwesomeIcon icon={faEye} className=" font-thin " />
                <span className=" font-montserrat"> 100 </span>
              </Typography>
              <Typography className="text-sm ">
                <FontAwesomeIcon icon={faComment} />
                <span className="font-montserrat"> 92 </span>
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat  h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody>
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-playfair"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="flex mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody className="flex-1">
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-montserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona. The place is close to Barceloneta Beach
              and bus stop just 2 min by walk and near to &quot;Naviglio&quot;
              where you can enjoy the main night life in Barcelona. The place is
              close to Barceloneta Beach and bus stop just 2 min by walk and
              near to &quot;Naviglio&quot; where you can enjoy the main night
              life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="flex pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="flex mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody className="flex-1">
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-montserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="flex pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="flex mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody className="flex-1">
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-montserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="flex pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="flex mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody className="flex-1">
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-montserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="flex pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="flex mt-6 w-96 rounded-none border border-gray-500 shadow-md ">
          <CardBody className="flex-1">
            <div className="flex justify-between">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-lg font-montserrat"
              >
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-md font-montSerrat"
              >
                Follow
              </Typography>
            </div>
            <Typography
              variant="lead"
              className="text-sm font-montserrat text-black h-fit"
            >
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="flex pt-0">
            <Button className="rounded-none">Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
