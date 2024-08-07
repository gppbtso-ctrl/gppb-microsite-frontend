"use client";

import UserService from "@/services/user.services";
import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Moment from "react-moment";
import useSWR, { useSWRConfig } from "swr";
import Pagination from "../general-widgets/paginator";



export default function SearchComponent() {
  const searchParams = useSearchParams();
  const loading = useLoading(1200);
  const searchValue = searchParams.get("value");
  const { mutate } = useSWRConfig();
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Custom logic before updating the page
    console.log("Changing to page:", newPage);
    setPage(newPage);
  };

  const getSearch = async () => {
    const response = await UserService.search(searchValue, page);
    return response.data;
  };

  const { data, isLoading, error,  isValidating } = useSWR(
    searchValue ? "search" : null,
    getSearch
  );


  useEffect(() => {
 mutate('search')
  }, [searchValue])


    useEffect(() => {
    // Manually trigger a re-fetch when perPage or searchTerm changes
    mutate("search");
  }, [page, mutate]);


  return (
    <Suspense>
   
      <Card className="relative m-3   rounded-none min-w-[90vw] lg:min-w-[55vw] lg:max-w-[65vw] flex flex-col justify-start">
        <div className="flex gap-2">
          <Typography className="text-2xl py-2 px-4">
            Search Results: {searchValue}
          </Typography>
        </div>

        {data && data?.search_data?.length != 0  ? (
          <table class="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th class="p-4 ">
                  <p class="block font-sans text-sm font-semibold leading-5 antialiased   text-blue-gray-700 ">
                    {" "}
                  </p>
                </th>
                <th class="p-4 ">
                  <p class="block font-sans text-sm font-semibold leading-5 antialiased   text-blue-gray-700 ">
                    Comments
                  </p>
                </th>
                <th class="p-4 ">
                  <p class="block font-sans text-sm  font-semibold leading-5 antialiased   text-blue-gray-700 ">
                    Recent Activity
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="mx-5">
              <tr>
                <td colSpan={100}>
                  <div className="absolute left-0 right-0 h-[1px] bg-blue-gray-100"></div>
                </td>
              </tr>
              {data?.search_data?.map((item, index) => (
                <tr key={index}>
                  <td class="p-3 px-4 border-b border-blue-gray-50">
                    <div className=" lg:w-[32rem] max-w-[12rem]  lg:max-w-[40rem] break-words">
                      <Link href={`/provision/${item.id}`}>
                        <Typography className="font-semibold tracking-wide font-sans hover:text-blue-400 transition-all duration-150">
                          {item.subject}
                        </Typography>
                      </Link>
                      <Typography
                        variant="small"
                        className="font-normal tracking-wide font-sans"
                      >
                        {item?.starter?.first_name}
                      </Typography>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p class="block tracking-wide font-sans  text-sm antialiased font-normal leading-normal text-blue-gray-900 text-center">
                      {item.post_count}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50 ">
                    <div className="flex flex-col gap-0">
                      <p class="block tracking-wide font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                        {item.latest_post_member_info
                          ? item.latest_post_member_info
                          : null}
                      </p>
                      <p class="block tracking-wide font-sans text-xs antialiased font-normal leading-normal text-blue-gray-900 ">
                        {item.latest_post_date ? (
                          <Moment format="MMM DD, YYYY">
                            {item.latest_post_date}
                          </Moment>
                        ) : null}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <div className="p-5"><Typography variant="h6">No Results!</Typography></div>}
      </Card>
      { data ?   <div className="w-full min-w-[55vw] lg:min-w-[50vw] lg:max-w-[55vw]"><Pagination
                page={page}
                totalPages={data ? data?.total_pages : 1  }
                onPageChange={handlePageChange}
                totalEntries={data?.count}
              /> </div>: null}
    

    </Suspense>
  );
}
