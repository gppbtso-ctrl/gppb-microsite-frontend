"use client";

import useLoading from "@/utils/use-loading";
import {
  Button,
  Card,
  CardHeader,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const starpbar = [
  {
    col1: <>19 May 2023 </>,
    col2: (
      <>
        <Typography className="inline">A.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Issuance of GPPB Position Paper on Senate Bills amending RA No. 9184, which was submitted to the Senate Committee on Finance 
        </Typography>
      </>
    ),
  },
  {
    col1: <>31 May 2023  </>,
    col2: (
      <>
        <Typography className="inline">B.</Typography>
        <Typography className="text-justify inline ml-2.5">
        A Research Study on Other Countries&apos; Procurement Laws, Agencies and their Functions was prepared to show that other countries have an independent organic office that looks after government procurement. This was made as part of preparatory materials for the special meeting of the GPPB. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>01 June 2023 </>,
    col2: (
      <>
        <Typography className="inline">C.</Typography>
        <Typography className="text-justify inline ml-2.5">
        A consolidated matrix of pending bills before the House of Representatives and Senate was prepared by the GPPB-TSO as part of preparatory materials for the scheduled GPPB Meeting on 08 June 2023. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>08 June 2023 </>,
    col2: (
      <>
        <Typography className="inline">D.</Typography>
        <Typography className="text-justify inline ml-2.5">
        A Special GPPB meeting was held to apprise the GPPB of the pending bills amending RA No. 9184 and recommended to the board for the issuance of a position paper with their comments and recommendations.  
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 July 2023 </>,
    col2: (
      <>
        <Typography className="inline">E.</Typography>
        <Typography className="text-justify inline ml-2.5">
        The Senate Committee on Finance requested the GPPB-TSO to submit its position paper on Senate Bill No. 692 re AFP Modernization Program and Amendments to RA No. 9184 on Defense-Related Procurement.  
        </Typography>
      </>
    ),
  },
  {
    col1: <>06 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">F.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Submission of the Memorandum for the Secretary of the DBM providing the GPPB-TSO’s proposed amendments to RA No. 9184. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>07 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">G.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Meeting with DBM Office of the Secretary, Procurement Service and GPPB-TSO re: proposed provisions  
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">H.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Submission of the Memorandum for the Secretary of the DBM providing comments of the GPPB-TSO on the Consolidated Proposed Provisions in the amendment of RA No. 9184. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">I.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Physical Meeting with DBM Office of the Secretary, Procurement Service and GPPB-TSO re: proposed provisions 
        </Typography>
      </>
    ),
  },
  {
    col1: <>14 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">J.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Online Meeting with the DBM Office of the Secretary, Procurement Service and GPPB-TSO  
        </Typography>
      </>
    ),
  },
  {
    col1: <>15 September 2023 (AM) </>,
    col2: (
      <>
        <Typography className="inline">K.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Meeting with the DBM Secretary on the proposed GPRA amendments 
        </Typography>
      </>
    ),
  },
  {
    col1: <>15 September 2023 (PM)</>,
    col2: (
      <>
        <Typography className="inline">L.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Consultation Meeting with the OPCCB regarding the creation of the PPMO and positions 
        </Typography>
      </>
    ),
  },
];

const dats = [
  {
    col1: (
      <>
  21 February 2024 
      </>
    ),
    col2: (
      <>
        <Typography className="inline py-1">A.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Senate Committee on Finance hearing on the proposed measures to amend RA No. 9184. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>06 March 2024 </>,
    col2: (
      <>
        <Typography className="inline py-1">B.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Filing of Senate Bill No. 2593 by the Committees on Finance, Sustainable Development Goals, Innovation and Futures Thinking, National Defense and Security, Peace, Unification and Reconciliation Local Government, Civil Service, Government Reorganization, and Professional Regulation. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>11 March 2024 </>,
    col2: (
      <>
        <Typography className="inline py-1">C.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Sponsorship in Senate Plenary of the Senate Bill No. 2593. 
        </Typography>
      </>
    ),
  },

  {
    col1: <>18 March 2024 <br /> 
    20 March 2024  <br /> 
    30 April 2024   <br /> 
    07 May 2024 <br /> 
    14 May 2024 

    </>,
    col2: (
      <>
        <Typography className="inline py-1">D.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Plenary Hearing on Senate Bill No. 2593 or the New Government Procurement Reform Act (Period of Interpellation) 
        </Typography>
      </>
    ),
  },
  {
    col1: <>15 May 2024 <br /> 21 May 2024 </>,
    col2: (
      <>
        <Typography className="inline py-1">E.</Typography>
        <Typography className="text-justify inline ml-2.5">
        Period of individual amendments on Senate Bill 2593. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>21 May 2024 </>,
    col2: (
      <>
        <Typography className="inline py-1">F.</Typography>
        <Typography className="text-justify inline ml-2.5">
        The Senate approved on Third Reading the Senate Bill No. 2953 with all Senators voting yes on the proposed measure. 
        </Typography>
      </>
    ),
  },
];

const bc = [
  {col1: <>22 May 2024 </>, col2: <>
    <Typography className="inline py-1">A.</Typography>
    <Typography className="text-justify inline ml-2.5">
    Presentation and ratification of the Bicameral Conference Committee Report on Senate Bill No. 2593 and House Bill No. 9648. 
    </Typography>
  </>}
]

export default function SenateHearings() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-7 m-3 max-w-[58rem] shadow-md rounded-none flex flex-col gap-3">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl  flex-none shadow-md mb-2"
        >
          <div className="relative h-full w-full bg-black">
            <img
              src="/sen-hearing-pic1.jpg"
              alt="image 1"
              className="max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[18rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/95">
              <Typography
                color="white"
                className="font-sans text-md absolute top-[7.5rem] left-5"
              >
           Briefing with the Senate Legislative Budget Research <br /> and Monitoring Office andCommittee of Finance (03 October 2023)
           <br />
           <br /> 
           Present from Senate were Director General Eireen Palanca of LBRMO, Atty. Fatima Panontongon from the Office of Senator Angara, and Atty. Yolanda Doblon from the Office of Senator Loren Legarda. 
              </Typography>
            </div>
          </div>

          <Image
            src="/sen-hearing-pic2.jpg"
            alt="image 1"
            className="max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />
          
          <Image
            src="/sen-hearing-pic3.jpg"
            alt="image 1"
            className="max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />

<div className="relative h-full w-full bg-black">
            <img
              src="/sen-hearing-feb21-pic1.jpg"
              alt="image 1"
              className="max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/95">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.4rem] left-5"
              >
          Second Senate Public Hearing  (21 February 2024) 
              </Typography>
            </div>
          </div>

          <Image
            src="/sen-hearing-feb21-pic2.jpg"
            alt="image 1"
            className="max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />

          
<Image
            src="/sen-hearing-feb21-pic3.jpg"
            alt="image 1"
            className="max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />

        <div className="relative h-full w-full bg-black">
            <img
              src="/sen-hearing-march12-pic1.jpg"
              alt="image 1"
              className="max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/95">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.4rem] left-5"
              >
        Senate Interpellations hearing 15 May 2024 
              </Typography>
            </div>
          </div>

          <div className="relative h-full w-full bg-black">
            <img
              src="/sen-hearing-may15-pic1.jpg"
              alt="image 1"
              className="max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/95">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.4rem] left-5"
              >
Senate Sponsorship hearing (12 March 2024) 
              </Typography>
            </div>
          </div>
        
        </Carousel>
        <Typography variant="h5" className="font-sans text-center">
          Legislative Journey regarding RA No. 9184 Amendments (Senate)
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; Beginning October 2023, the Senate Committee on
          Finance held its public hearing consultation on the amendment bills on
          the Republic Act (RA) No. 9184, to re-evaluate this two-decade-old law
          to enhance government procurement processes and align the swift
          advancements in technology, compounded by the previous challenges of
          the pandemic.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In June 2023, the GPPB-TSO proposed the issuance
          of a Position Paper to the proposed bills of the House of
          Representatives (HoR) and Senate of the Philippines (Senate) on
          salient points requiring the policy direction of the GPPB. However,
          the proposed position paper was superseded by the development of the
          Administrative Bill by the Department of Budget and Management (DBM),
          in collaboration with GPPB-TSO and Procurement Service (PS), the
          cornerstones of which were then presented to the Office of the
          President in August 2023, then the 3rd Legislative-Executive
          Development Advisory Council (LEDAC) in September 2023. Subsequently,
          the DBM submitted the same to the HoR and Senate of the Philippines in
          October 2023.  It is highlighted that the Bill has been the result of
          the pronouncement of the President during his State of the Nation
          Address (SONA) calling both Houses to enact a new procurement law.
          Moreover, it bears emphasis that the GPPB-TSO has proposed the
          inclusion of the earlier recommendations and comments of the GPPB
          relative to RA No. 9184 amendment into the Administrative Bill. 
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The Administrative Bill has been incorporated in
          Senate Bill (SB) No. 2466, introduced by Sen. Sonny Angara, and was
          set for the first reading on 06 November 2023. This was subsequently
          referred to the Committee on Finance for more in-depth deliberations,
          with the GPPB-TSO actively participating therein.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In February 2024, the Senate Committee on Finance
          held Technical Working Group hearings to discuss proposed amendments
          to RA No. 9184. Following this, in March 2024, SB No. 2593, also known
          as the New Government Procurement Reform Act, was filed by several
          committees including Finance, Sustainable Development Goals,
          Innovation and Futures Thinking, National Defense and Security, Peace,
          Unification and Reconciliation, Local Government, Civil Services,
          Government Reorganization, and Professional regulation.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; Upon the Sponsorship of the Chairperson of the
          Senate Committee on Finance of SB No. 2593, several Plenary Hearing
          was conducted by the Senate from March to May 2024, within which
          period, the GPPB-TSO has been actively coordinating with the Office of
          Sen. Angara and supporting the Sponsor. This includes discussion on
          procurement timelines and different procurement modalities with the
          objective of simplifying the processes.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; After the period of interpellation and
          amendments, the Senate approved on third reading SB No. 2593 on 21 May
          2024, with unanimous support from all Senators.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The legislative journey of the proposed
          amendments to RA No. 9184 culminated in the ratification of the
          Bicameral Conference Committee Report on SB No. 2593 and HB No. 9648
          on 22 May 2024.
        </Typography>

        <div className="w-full ">
          <table className="w-full  table-auto text-left mt-2 overflow-auto">
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className="bg-blue-600 border border-black p-2 px-3"
                >
                  <Typography className="font-normal text-white">
                    Study and Technical Assistance relative to Pending Bills
                    Amending RA No. 9184{" "}
                  </Typography>
                </td>
              </tr>
              {starpbar.map(({ col1, col2 }, index) => {
                return (
                  <>
                    {" "}
                    <tr>
                      <td
                        className={`p-3 py-2.5 border h-full border-black w-[11rem] max-w-[10rem] break-words align-top`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block "
                        >
                          {col1}
                        </span>
                      </td>
                      <td
                        className={`p-3 py-2 break-words  border  max-w-[12rem]  border-black align-center`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block"
                        >
                          {col2}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td
                  colSpan={2}
                  className="bg-blue-600 border border-black p-2 px-3"
                >
                  <Typography className="font-normal text-white">
                    Deliberations at the Senate
                  </Typography>
                </td>
              </tr>
              {dats.map(({ col1, col2 }, index) => {
                return (
                  <>
                    {" "}
                    <tr>
                      <td
                        className={`p-3 py-2 border h-full border-black w-[11rem] max-w-[10rem] break-words align-top`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block "
                        >
                          {col1}
                        </span>
                      </td>
                      <td
                        className={`p-3 py-2 break-words  border  max-w-[12rem]  border-black align-center`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block"
                        >
                          {col2}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td
                  colSpan={2}
                  className="bg-blue-600 border border-black p-2 px-3"
                >
                  <Typography className="font-normal text-white">
                 Bicameral Conference
                  </Typography>
                </td>
              </tr>
              {bc.map(({ col1, col2 }, index) => {
                return (
                  <>
                    {" "}
                    <tr>
                      <td
                        className={`p-3 py-2 border h-full border-black w-[11rem] max-w-[10rem] break-words align-top`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block "
                        >
                          {col1}
                        </span>
                      </td>
                      <td
                        className={`p-3 py-2 break-words  border  max-w-[12rem]  border-black align-center`}
                      >
                        <span
                          color="blue-gray"
                          className="font-normal font-sans block"
                        >
                          {col2}
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
