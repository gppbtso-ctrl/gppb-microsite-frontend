import React from "react";

export const TopicTable = () => {
  return (
    <div class="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md  bg-clip-border px-5">
      <table class="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                {" "}
              </p>
            </th>
            <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                posts
              </p>
            </th>
            <th class="p-4 ">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
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
          <tr>
            <td class="p-4 border-b border-blue-gray-50">
              <div className="   w-[30rem] max-w-[40rem]">John Michael</div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Manager
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                23/04/18
              </p>
            </td>
          </tr>
          <tr className="ml-2">
            <td class="p-4 border-b border-blue-gray-50">
              <div className="  w-[30rem] max-w-[40rem]">John Michael</div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Manager
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                23/04/18
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
