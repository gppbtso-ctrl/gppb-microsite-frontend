import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

export const TopicTable = ({ data }) => {
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
              <p class="block font-montserrat text-sm antialiased font-normal leading-none text-blue-gray-900 ">
                Comments
              </p>
            </th>
            <th class="p-4 ">
              <p class="block font-montserra  text-sm antialiased font-normal leading-none text-blue-gray-900 ">
                Recent Activity
              </p>
            </th>
            <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody className="mx-5">
          <tr>
            <td colSpan={100}>
              <div className="absolute left-0 right-0 h-[1px] bg-blue-gray-300"></div>
            </td>
          </tr>
          {data?.topics?.length !== 0 ? (
            data?.topics?.map((item) => (
              <tr key={item.id}>
                <td class="p-3 border-b border-blue-gray-50">
                  <div className=" lg:w-[32rem] max-w-[12rem]  lg:max-w-[40rem] break-words">
                    <Link href={`/topic/${item.id}`}>
                      <Typography className="font-semibold font-montserrat hover:text-blue-400 transition-all duration-150">
                        {item.subject}
                      </Typography>
                    </Link>
                    <Typography
                      variant="small"
                      className="font-normal font-montserrat"
                    >
                      {item?.starter?.first_name}
                    </Typography>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 text-center">
                    {item.post_count}
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col gap-0">
                    <p class="block font-montserrat text-xs antialiased font-normal leading-normal text-blue-gray-900 text-center">
                      {item.latest_post_member_info
                        ? item.latest_post_member_info
                        : null}
                    </p>
                    <p class="block font-montserrat text-xs antialiased font-normal leading-normal text-blue-gray-900 text-center">
                      {item.latest_post_date ? (
                        <Moment format="MMM DD, YYYY">
                          {item.latest_post_date}
                        </Moment>
                      ) : null}
                    </p>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <div className=" lg:w-[30rem] max-w-[12rem]  lg:max-w-[40rem] break-words">
                  <Typography className="font-semibold font-montserrat">
                    No Data
                  </Typography>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 text-center">
                  0
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 text-center">
                  N/A
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
