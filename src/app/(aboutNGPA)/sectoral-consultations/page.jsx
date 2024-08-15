"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";


const ConsultationMeeting2023 = [
  {
  date: '19 January 2023',
  subjectMatter: 'Information and Communications Technology (ICT)',
  attendeesSectors: 'Department of Information and Communications Technology (DICT) '
},
{
  date: '20-22 February 2023  ',
  subjectMatter: 'Kick-off and Planning Workshop for the Scaling of Sustainable Consumption on Production in the Philippines ',
  attendeesSectors: 'Green Public Procurement Focal Persons from the GPPB-member agencies'
},
{
  date: '19 May 2023',
  subjectMatter: 'Pooled Procurement of Drugs, Medicines and Vaccines ',
  attendeesSectors: 'Department of Health'
},
{
  date: '24 May 2023 ',
  subjectMatter: 'Defense-related Procurement ',
  attendeesSectors: 'Department of National Defense, Armed Forces of the Philippines, Philippine Air Force, and Government Arsenal '
},
{
  date: '24 May 2023 ',
  subjectMatter: 'Anti-Bid rigging Initiatives in Procurement ',
  attendeesSectors: 'Philippine Competition Commission '
},
{
  date: '24 May 2023 ',
  subjectMatter: 'Procurement of requirements relating to research and development ',
  attendeesSectors: 'Research and Development Sector (Departments of Agriculture, Science and Technology, and Commission on Higher Education) '
},
{
  date: '07 June 2023',
  subjectMatter: 'Micro, Small, Medium Enterprises and Beneficial Ownership on government procurement to compare regional practices within Asia ',
  attendeesSectors: 'International Exchange with the LKPP of Indonesia (counterpart of GPPB-TSO) '
},
{
  date: '23 June 2023 ',
  subjectMatter: 'Updating of Framework Agreement ',
  attendeesSectors: 'Department of Social Welfare and Development (DSWD) '
},
{
  date: '27 June 2023 ',
  subjectMatter: 'Technical Working Group on the Adoption of Digital Payments (Executive Order No. 170) in relation to Procurement of Digital Payment Providers ',
  attendeesSectors: 'BSP, BTr, BIR, COA, LBP '
},
{
  date: '29 June 2023, 25 July 2023',
  subjectMatter: 'Proposed Inclusion of Cloud Computing Services, Airline Tickets under Government Fares Agreement, and Government of the Philippines - Automobile Framework Program in the PS List of Common-Use Supplies and Equipment ',
  attendeesSectors: 'PS '
},
{
  date: '19 July 2023 ',
  subjectMatter: 'Integrated Financial Management Information System ',
  attendeesSectors: 'Ministry of Social Services and Development-Bangsamoro Autonomous Region in Muslim Mindanao (MSSD-BARMM),  '
},
{
  date: '20 July 2023 ',
  subjectMatter: 'Transaction Cards for the Beneficiaries of MSSD-BARMM ',
  attendeesSectors: (<>MSSD-BARMM; <br /> COA; <br /> BSP; <br />United Nations International Childrens Emergency Fund; <br />LBP; <br />Development Bank of the Philippines; <br />Makati Local Government Unit; <br />Mynt (GCash); <br />Maya; <br />Palawan Pay; <br />P.J. Lhuillier Inc. (Cebuana Lhuillier); <br />and M Lhuillier Financial Services Inc. </>)
},
{
  date: '31 July 2023 ',
  subjectMatter: 'Post-Qualification Requirements in the Procurement of Agricultural and Fisheries Machinery ',
  attendeesSectors: 'Bureau of Agricultural and Fisheries Engineering    '
},
{
  date: '8 August 2023 ',
  subjectMatter: 'Guidelines for the Procurement of Information and Communications Technology (ICT) Resources ',
  attendeesSectors: 'ICT Sector  (Department of Information and Communications Technology as Lead) '
},
{
  date: '5 September 2023 ',
  subjectMatter: 'Domestic preference Small and Medium Enterprises participation Women entrepreneurs support  Shared Service Facilities (SSF) ',
  attendeesSectors: 'Trade and Economic Sector (DTI as Lead) '
},
{
  date: '26 September 2023 ',
  subjectMatter: 'Framework Agreement Community Participation  SSF ',
  attendeesSectors: 'Social Welfare Sector (DSWD as Lead) '
},
{
  date: '17 October 2023 ',
  subjectMatter: 'Design and Build Procurement of Infrastructure Projects ',
  attendeesSectors: 'Infrastructure Sector (DPWH as Lead) '
},

{
  date: '14 November 2023 ',
  subjectMatter: 'Procurement of Books and other Printed Educational Materials ',
  attendeesSectors: 'Education Sector (Department of Education as Lead) '
},
{
  date: '21 November 2023 ',
  subjectMatter: 'Pooled Procurement of Drugs, Medicines and Vaccines SSF ',
  attendeesSectors: 'Health Sector  (Department of Health as Lead) '
},



]

export default function SectoralConsultations() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none shadow-none  flex flex-col gap-3 ">
        <Typography variant="h5" className="font-sans text-center">
          SECTORAL CONSULTATIONS ON THE REPUBLIC ACT NO. 9184{" "}
        </Typography>
        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; At the outset, as part of the study of the
          possible amendments to the Republic Act (RA) No. 9184, the Government
          Procurement Policy Board (GPPB) and its Technical Support Office (TSO)
          undertook an intensive scoping and consultation with various
          stakeholders beginning in 2022 as shown below:  {" "}
        </Typography>

        <div className="w-[85vw] md:w-[93vw] lg:w-full overflow-auto">
        <table className="w-full text-left mt-2">
          <thead>
            <tr>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Date
                </Typography>
              </th>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Subject Matter
                </Typography>
              </th>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Attendees/Sectors
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="bg-blue-900 px-5 border border-black">
                <Typography color="white" className="font-semibold">
                  2022 Consultation Meetings
                </Typography>
              </td>
            </tr>
            <tr>
              <td
                className={`p-3 border h-full border-black min-w-[10rem] break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    20 April 2022
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top min-w-[30rem]`}
              >
                <span className="font-sans block text-justify">
                  Online subscription, software and reference materials
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top `}
              >
                <span className="font-sans block text-justify">
                  Commission on Audit (COA)
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    22 April 2022, <br />
                    31 May 2022, <br />
                    28 July 2022, <br />
                    02 October 2022, <br />
                    26 October 2022 <br />
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Performance Securities – Issuance of Surety or Insurance Bonds
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  Insurance Commission (IC) and Bangko Sentral ng Pilipinas
                  (BSP)
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    7 July 2022 <br />
                    19 October 2022
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Electronic Bidding and the Modernized Philippine Government
                  Electronic Procurement System (PhilGEPS)
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  PS and PhilGEPS
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    5 August 2022 <br />
                    06 October 2022
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Registration of Licenses for Foreign Corporations
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  Securities and Exchange Commission (SEC)
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    17 August –<br /> 14 October 2022, <br />
                    22 Dec 2022,
                    <br />
                    28 April 2023, <br />
                    15 June 2023
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Price Adjustment/Escalation (including parametric formula)
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  DPWH; Private Sector Representative; National Economic and
                  Development Authority; Department of Trade and Industry (DTI);
                  Construction Industry Authority of the Philippines; and
                  Philippine Statistics Authority
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    21 October 2022
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Customized Procurement Manual
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  Land Bank of the Philippines (LBP)
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                    21 October 2022, <br />
                    31 January - <br /> 2 February 2023, <br />
                    27 June 2023
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                  Digital Payment
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                  Bureau of Treasury (BTr); Bureau of Internal Revenue (BIR);
                  LBP; BSP; COA; United States Agency for International
                  Development (USAID) Deliver; and Technical Working Group on
                  the Adoption of Digital Payments (Executive Order No. 170)
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                  11 Nov 2022, 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                Customized Bidding Documents for Railways 
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                Department of Transportation 
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="bg-blue-900 px-5 border border-black">
                <Typography color="white" className="font-semibold">
                  2023 Consultation Meetings
                </Typography>
              </td>
            </tr>

            <tr>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify ">
                  11 Nov 2022, 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
                Customized Bidding Documents for Railways 
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
                Department of Transportation 
                </span>
              </td>
            </tr>
            {ConsultationMeeting2023.map(({ date, subjectMatter, attendeesSectors }, index) => {
              return (<>
                <tr key={index}>
              <td
                className={`p-3 border h-full border-black max-w-5 break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block  ">
                 {date} 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words border border-black align-top max-w-10`}
              >
                <span className="font-sans block text-justify">
               {subjectMatter}
                </span>
              </td>
              <td
                className={`p-3 break-words   border border-black align-top max-w-3`}
              >
                <span className="font-sans block text-justify">
              {attendeesSectors}
                </span>
              </td>
            </tr>
              </>
              )
            })}

          </tbody>
        </table>
        </div>
      </Card>
    </div>
  );
}
