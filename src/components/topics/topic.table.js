import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

export const TopicTable = ({ data }) => {
  console.log(data?.topic_data)
  return (
    <>
      <table class="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                {" "}
              </p>
            </th>
            <th class="p-4 ">
              <Typography
                variant="lead"
                className="tracking-wide text-sm font-semibold antialiased font-sans text-blue-gray-900 "
              >
                Comments
              </Typography>
            </th>
            <th class="p-4 ">
              <Typography
                variant="lead"
                className="tracking-wide text-sm font-semibold antialiased  text-blue-gray-900 "
              >
                Recent Activity
              </Typography>
            </th>
            {/* <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th> */}
          </tr>
        </thead>
        <tbody className="mx-5">
          <tr>
            <td colSpan={100}>
              <div className="absolute left-0 right-0 h-[1px] bg-blue-gray-300"></div>
            </td>
          </tr>
          {data?.topic_data?.length !== 0 ? (
            data?.topic_data?.map((item, i, row) => (
              <tr key={i}>
                <td
                  className={`p-2 px-5 ${
                    i !== row.length - 1 ? "border-b border-blue-gray-50" : ""
                  }`}
                >
                  <div className="min-w-full lg:min-w-[30rem] max-w-[12rem] lg:max-w-[40rem] break-words">
                    <Link href={`/provision/${item.id}`}>
                      <Typography className="font-semibold text-blue-gray-900 hover:text-blue-400 transition-all duration-150">
                        {item.subject}
                      </Typography>
                    </Link>
                    <Typography
                      variant="small"
                      className="font-normal tracking-wider text-blue-gray-900"
                    >
                      {item?.starter?.first_name}
                    </Typography>
                  </div>
                </td>
                <td
                  className={`p-4 py-2 ${
                    i !== row.length - 1 ? "border-b border-blue-gray-50" : ""
                  }`}
                >
                  <Typography className="block text-sm antialiased font-semibold leading-normal text-blue-gray-900 text-center">
                    {item.post_count}
                  </Typography>
                </td>
                <td
                  className={`p-4 py-2 max-w-[3rem] md:max-w-[10rem]  md:w-[9rem] ${
                    i !== row.length - 1 ? "border-b border-blue-gray-50" : ""
                  }`}
                >
                  {item?.latest_post_member_info ?  <div className="flex flex-col gap-0 break-words max-w-[6rem]">
                    <Typography className="block text-sm antialiased font-semibold leading-normal text-blue-gray-900 text-left">
                      {item.latest_post_member_info
                        ? item.latest_post_member_info
                        : null}
                    </Typography>
                    <Typography className="text-xs antialiased font-semibold leading-normal text-blue-gray-900">
                      {item.latest_post_date ? (
                        <Moment format="MMM DD, YYYY">
                          {item.latest_post_date}
                        </Moment>
                      ) : null}
                    </Typography>
                  </div>: <Typography  className="text-sm antialiased font-semibold leading-normal text-blue-gray-900">N/A</Typography>}
                 
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <div className=" lg:w-[30rem] max-w-[12rem]  lg:max-w-[40rem] break-words">
                  <Typography className="font-semibold text-black">
                    No Data
                  </Typography>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="lead"
                  className=" text-sm font-semibold antialiased ant text-blue-gray-900 text-center"
                >
                  0
                </Typography>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="lead"
                  className=" text-sm font-semibold antialiased ant text-blue-gray-900 text-center"
                >
                  N/A
                </Typography>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
