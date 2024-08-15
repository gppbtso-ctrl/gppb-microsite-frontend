"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";

const Tablerows = [
  {
    title: (
      <>
        <b>House Bill No. 18</b> - An Act Amending Republic Act No. 9184,
        Otherwise Known as the ‘Government Procurement Reform Act’ And for Other
        Purposes”
      </>
    ),
    link: (
      <>
        {" "}
        <a href="/HB No. 018 Revised Government Procurement Act.pdf" target="_blank">
          House Bill No. 18
        </a>
      </>
    ),
  },
  {
    title: (
      <>
        <b> House Bill No. 648</b> - An Act Expediting the Procurement of
        Science, Engineering, Technology and Research Equipment and Specialized
        Supplies and Materials, Amending for the Purpose Section 4 Of Republic
        Act No. 9184, Otherwise Known as the Government Procurement Reform Act”
      </>
    ),
    link: (
      <>
        {" "}
        <a href="/HB No. 648 Amending Section 4 of RA No. 9184.pdf" target="_blank">
          House Bill No. 648
        </a>
      </>
    ),
  },
  {
    title: (
      <>
      <b>House Bill No. 1503</b> - An Act Prescribing Additional Eligibility Requirements for Bidders and Contractors to Participate in The Procurement Process
      </>
    ),
    link: (
      <>
        {" "}
        <a href="/HB No. 1503 Additional Eligibility Requirements for Bidders.pdf" target="_blank">
        House Bill No. 1503
        </a>
      </>
    ),
  },
  {
    title: (
      <>
       <b>House Bill No. 2682</b> - An Act Establishing Guidelines for Design Procurement, Amending for the Purpose Certain Provisions of Republic Act No 9184 Otherwise Known as the Government Procurement Reform Act
      </>
    ),
    link: (
      <>
        {" "}
        <a href="/HB No. 2682 Design Procurement Act.pdf" target="_blank">
        House Bill No. 2682
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>House Bill No. 3704</b> - An Act Strengthening Local Infrastructure Industry Players, Amending for the Purpose Section 23 Of Republic Act No. 9184, Otherwise Known as the Government Procurement Reform Act, and for Other Purposes” </>
  ),
    link: (
      <>
        {" "}
        <a href="/HB No. 3704 Amending Section 23 of RA No. 9184.pdf" target="_blank">
        House Bill No. 3704
        </a>
      </>
    ),
  },

  {
    title: (
      <>
<b>House Bill No. 4617</b> - An Act Amending Republic Act No. 9184, Otherwise Known as The &quot;Government Procurement Reform Act&quot;, Providing for the Modernization, Standardization and Regulation of the Government Procurement Process and for Other Purposes” 
</>
  ),
    link: (
      <>
        {" "}
        <a href="/HB No. 4617 Revised Government Procurement Reform Act of 2022.pdf" target="_blank">
        House Bill No. 4617
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>House Bill No. 6280</b> - An Act Providing for Best Value Procurement, Amending for This Purpose Republic Act No. 9184, Otherwise Known As &quot;Government Procurement Reform Act&quot;, and for Other Purposes</>
  ),
    link: (
      <>
        {" "}
        <a href="/HB No. 6280 Best Value Procurement Act.pdf" target="_blank">
        House Bill No. 6280
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>House Bill No. 7944</b> - An Act Prescribing Policies, Guidelines, Rules and Regulations 

for Government Contracts to be known as &quot;Ang Bagong Pilipinas Government Procurement 

Reform Act&quot;, Repealing for this Purpose Republic Act No. 9184 or the Government 

Procurement Reform Act </>
  ),
    link: (
      <>
        {" "}
        <a href="/HB No. 7944 Ang Bagong Pilipinas Government Procurement Reform Act.pdf" target="_blank">
        House Bill No. 7944
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>House Bill No. 9648</b> – An Act Providing for Cost-effective, Transparent, Competitive, Streamlined, Sustainable, Active, and Inclusive Procurement Activities of the Government, Repealing for the Purpose Republic Act No. 9184, Otherwise Known As The Government Procurement Reform Act” 
</>
  ),
    link: (
      <>
        {" "}
        <a href="/HB No. 9648 New Government Procurement Reform Act.pdf" target="_blank">
        House Bill No. 9648
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>Senate Bill No. 176</b> - An Act Institutionalizing the Filipino First Policy in the Government Procurement System, amending for the Purpose Republic Act (RA) No. 9184, otherwise known as the ‘Government Procurement Reform Act,’ and for Other Purposes” 
</>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 176 Gawang Pilipino, Para sa Pilipino Act of 2022.pdf" target="_blank">
        House Bill No. 176
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>Senate Bill No. 618</b> - An Act Providing for a Uniform Warehousing and Inventory System for all Government Procuring Entities, amending for the Purpose RA No. 9184, otherwise known as the ‘Government Procurement Reform Act’” 
</>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 618 Amending RA No 9184.pdf" target="_blank">
        House Bill No. 618
        </a>
      </>
    ),
  },

  {
    title: (
      <>
<b>Senate Bill No. 619</b> - An Act Amending Section 53 of RA No. 9184, otherwise known as the ‘Government Procurement Reform Act </>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 619 Amending Sec. 53 of RA No 9184.pdf" target="_blank">
        House Bill No. 619
        </a>
      </>
    ),
  },

  {
    title: (
      <>
      <b>Senate Bill No. 1023</b> - An Act Amending RA No. 9184, otherwise known as the Government Procurement Reform Act, Withdrawing from Its Application All References to the Local Government Units” 
      </>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 1023 Amending RA No 9184 withdrawing from its application all references to the LGUs.pdf" target="_blank">
        House Bill No. 1023
        </a>
      </>
    ),
  },

  {
    title: (
      <>
<b>Senate Bill No. 1803</b> - An Act Amending Section 23 of RA No. 9184, otherwise known as the Government Procurement Reform Act, Providing for Eligibility of Bidders in the Procurement of Goods and Infrastructure Projects and for Other Purposes” 
      </>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 1803 Amending Sec 23 of RA No. 9184.pdf" target="_blank">
        House Bill No. 1803
        </a>
      </>
    ),
  },

  {
    title: (
      <>
<b>Senate Bill No. 692</b> - An Act to Pursue the Armed Forces of the Philippines Modernization Program, Amending for this Purpose Republic Act No. 9184, Otherwise Known as the ‘Government Procurement Reform Act’” 
      </>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 692 AFP Modernization Program, amending RA No. 9184.pdf" target="_blank">
        House Bill No. 692
        </a>
      </>
    ),
  },
  {
    title: (
      <>
<b>Senate Bill No. 2593</b> – An Act Revising Republic Act No. 9184 Otherwise Known As The ‘Government Procurement Reform Act’ and For Other Purposes” 
      </>
  ),
    link: (
      <>
        {" "}
        <a href="/SB No. 2593 6March2024.pdf" target="_blank">
        House Bill No. 2593
        </a>
      </>
    ),
  },
];



export default function DifferentBillVersions() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-2 md:p-5 m-3 max-w-6xl rounded-none shadow-none flex flex-col gap-3">
        <Typography variant="h5" className="font-sans">
          Various House and Senate Bills related to the Amendment of the
          Republic Act No. 9184
        </Typography>
        
        <div className="max-w-[89vw] md:max-w-[93vw] lg:max-w-full overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left mt-2">
          <thead>
            <tr>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography color="white" className="font-medium leading-none">
                  TITLE OF THE BILL
                </Typography>
              </th>
              <th className="border border-black bg-blue-500  p-4 ">
                <Typography color="white" className="font-medium leading-none">
                  LINK
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {Tablerows.map(({ title, link }, index) => {
              return (
                <>
                  {" "}
                  <tr>
                    <td
                      className={`p-3.5 border h-full border-black w-[200px] md:w-[700px]  break-words align-top`}
                    >
                      <span
                        color="blue-gray"
                        className="font-normal font-sans block  text-justify"
                      >
                        {title}
                      </span>
                    </td>
                    <td
                      className={`p-3 break-words  border  border-black align-center`}
                    >
                      <span
                        color="blue-gray"
                        className="font-normal font-sans block text-justify underline text-blue-600"
                      >
                        {link}
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div>
      </Card>
    </div>
  );
}
