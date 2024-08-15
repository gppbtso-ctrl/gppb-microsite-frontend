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
    col1: <>08 March 2023</>,
    col2: (
      <>
        <Typography className="inline">A.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 1st House Committee on Revision of Laws TWG meeting re
          Revising/Amending RA No. 9184 was conducted covering House Bill Nos.
          18, 648, 1503, 2682, 3704, 4617, and 6280.
        </Typography>
      </>
    ),
  },
  {
    col1: <>14 March 2023 </>,
    col2: (
      <>
        <Typography className="inline">B.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Preparation of Comparative Matrix of Provisions between House Bills,
          Substitute Bill, and RA No. 9184 by the GPPB-TSO.
        </Typography>
      </>
    ),
  },
  {
    col1: <>16 March 2023 </>,
    col2: (
      <>
        <Typography className="inline">C.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 2nd House Committee on Revision of Laws TWG meeting re
          Revising/Amending RA No. 9184 was conducted covering House Bill Nos.
          18, 648, 1503, 2682, 3704, 4617, and 6280.{" "}
        </Typography>
      </>
    ),
  },
  {
    col1: <>22 March 2023 </>,
    col2: (
      <>
        <Typography className="inline">D.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 3rd House Committee on Revision of Laws TWG meeting re
          Revising/Amending RA No. 9184 was conducted covering House Bill Nos.
          18, 648, 1503, 2682, 3704, 4617, and 6280.{" "}
        </Typography>
      </>
    ),
  },
  {
    col1: <>27 March 2023 </>,
    col2: (
      <>
        <Typography className="inline">E.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Preparation of a matrix containing suggestions of different government
          agencies on the Proposed House Bill Nos. 18, 4617 and 6280 amending RA
          No. 9184
        </Typography>
      </>
    ),
  },
  {
    col1: <>18 May 2023 </>,
    col2: (
      <>
        <Typography className="inline">F.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The House Committee on Revision of Laws meeting (Plenary) was
          conducted. It was agreed by the member of the Committee to consolidate
          the Substitute House Bill on Amendments to RA No. 9184 with House Bill
          No. 7944. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>31 May 2023 </>,
    col2: (
      <>
        <Typography className="inline">G.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 1st Technical Consultation Meeting Requested by the Committee on
          Revision of Laws (Com Sec and staff only) was attended by the GPPB-TSO
          to further appraise the committee on the nuances of the current
          procurement rules and regulations. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>31 May 2023 </>,
    col2: (
      <>
        <Typography className="inline">H.</Typography>
        <Typography className="text-justify inline ml-2.5">
          A Research Study on Other Countries&apos; Procurement Laws, Agencies
          and their Functions was prepared to show that other countries have an
          independent organic office that looks after government procurement.
          This was made as part of preparatory materials for the special meeting
          of the GPPB.{" "}
        </Typography>
      </>
    ),
  },
  {
    col1: <>01 June 2023 </>,
    col2: (
      <>
        <Typography className="inline">I.</Typography>
        <Typography className="text-justify inline ml-2.5">
          A consolidated matrix of pending bills before the HoR and Senate was
          prepared by the HOs as part of preparatory materials for the scheduled
          GPPB Meeting on 08 June 2023.
        </Typography>
      </>
    ),
  },
  {
    col1: <>07 June 2023 </>,
    col2: (
      <>
        <Typography className="inline">J.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 2nd Consultation Meeting with the Committee on Revision of Laws
          (Com Sec and staff only) was attended by the GPPB-TSO to further
          appraise the committee on the nuances of the current procurement rules
          and regulations. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>08 June 2023 </>,
    col2: (
      <>
        <Typography className="inline">K.</Typography>
        <Typography className="text-justify inline ml-2.5">
          A Special GPPB meeting was held to apprise the GPPB of the pending
          bills amending RA No. 9184 and recommended to the board for the
          issuance of a position paper with their comments and recommendations. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>07 July 2023 </>,
    col2: (
      <>
        <Typography className="inline">L.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The GPPB-TSO received the comments of the PS-DBM re Proposed
          Substitute Bill for House Bill Nos. 18, 648, 1503, 2682, 3704, 4617,
          and 6280. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>13 July 2023 </>,
    col2: (
      <>
        <Typography className="inline">M.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The 3rd Consultation Meeting with the Committee on Revision of Laws
          (Com Sec and staff only) was attended by the GPPB-TSO to further
          apprise the committee on the nuances of the current procurement rules
          and regulations. 
        </Typography>
      </>
    ),
  },
  {
    col1: <>06 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">N.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Submission of the Memorandum for the Secretary of the DBM providing
          the GPPB-TSO’s proposed amendments to RA No. 9184.
        </Typography>
      </>
    ),
  },
  {
    col1: <>07 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">O.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Meeting with DBM Office of the Secretary, PS and GPPB-TSO re: proposed
          provisions
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">P.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Submission of the Memorandum for the Secretary of the DBM providing
          comments of the GPPB-TSO on the Consolidated Proposed Provisions in
          the amendment of RA No. 9184.
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">Q.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Physical Meeting with DBM Office of the Secretary, PS and GPPB-TSO re:
          proposed provisions
        </Typography>
      </>
    ),
  },
  {
    col1: <>14 September 2023 </>,
    col2: (
      <>
        <Typography className="inline">R.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Online Meeting with the DBM Office of the Secretary, PS and GPPB-TSO
        </Typography>
      </>
    ),
  },

  {
    col1: <>15 September 2023 (AM)</>,
    col2: (
      <>
        <Typography className="inline">S.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Meeting with the DBM Secretary on the proposed GPRA amendments
        </Typography>
      </>
    ),
  },
  {
    col1: <>15 September 2023 (PM) </>,
    col2: (
      <>
        <Typography className="inline">T.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Consultation Meeting with the OPCCB regarding the creation of the PPMO
          and positions
        </Typography>
      </>
    ),
  },

  {
    col1: <>21 September 2023</>,
    col2: (
      <>
        <Typography className="inline">U.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Meeting of Committee on Revision of Laws on the Executive Department’s
          proposed amendments to RA No. 9184. Likewise, the Committee submitted
          and presented its updated Bill amending RA No. 9184.
        </Typography>
      </>
    ),
  },
];

const dhr = [
  {
    col1: (
      <>
        12 October 2023, <br />
        16 October 2023, <br />
        19 October 2023, <br />
        23 October 2023, <br />
        26 October 2023 <br />
      </>
    ),
    col2: (
      <>
        <Typography className="inline py-1">A.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Meeting of Committee on Revision of Laws to deliberate the proposed
          amendments to RA No. 9184 by the House and Executive Department.
        </Typography>
      </>
    ),
  },
  {
    col1: <> 06 November 2023 </>,
    col2: (
      <>
        <Typography className="inline py-1">B.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Finalization of the proposed amendments to RA No. 9184 for submission
          to the Committee on Revision of Laws.
        </Typography>
      </>
    ),
  },
  {
    col1: <>15 November 2023 </>,
    col2: (
      <>
        <Typography className="inline py-1">C.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Approval of the Committee on Revision of Laws of the House Bill
          amending RA No. 9184.
        </Typography>
      </>
    ),
  },

  {
    col1: <>06 December 2023 </>,
    col2: (
      <>
        <Typography className="inline py-1">D.</Typography>
        <Typography className="text-justify inline ml-2.5">
          The House of Representatives approved on Second Reading proposed
          amendments to the procurement law.
        </Typography>
      </>
    ),
  },
  {
    col1: <>12 December 2023 </>,
    col2: (
      <>
        <Typography className="inline py-1">E.</Typography>
        <Typography className="text-justify inline ml-2.5">
          Plenary Hearing on the House Bill Amending RA No. 9184. (3rd Reading)
          and Endorsement of the same to the Senate.
        </Typography>
      </>
    ),
  },
];

export default function HORHearings() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-2 md:p-5 m-3 max-w-[58rem] shadow-none rounded-none flex flex-col gap-3">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl  flex-none shadow-md mb-2"
        >
          <img
            src="/hor-pic2.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
          />
          <img
            src="/hor-pic1.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
          />

          <div className="relative h-full w-full bg-black">
            <img
              src="/hor-pic3-hear-19.jpg"
              alt="image 1"
              className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/85">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.5rem] left-5"
              >
                HOR Hearing - April 19
              </Typography>
            </div>
          </div>

          <Image
            src="/hor-pic4-hear-19.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />

          <Image
            src="/hor-pic5-hear-19.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />

          <div className="relative h-full w-full bg-black">
            <img
              src="/hor-pic1-hear-21.jpg"
              alt="image 1"
              className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/85">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.5rem] left-5"
              >
                HOR Hearing - September 21
              </Typography>
            </div>
          </div>
          <Image
            src="/hor-pic2-hear-21.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />
          <Image
            src="/hor-pic3-hear-21.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />
          <Image
            src="/hor-pic4-hear-21.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />
          <div className="relative h-full w-full bg-black">
            <img
              src="/hor-pic1-oct-26.jpg"
              alt="image 1"
              className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/85">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.5rem] left-5"
              >
                HOR Hearing - October 26
              </Typography>
            </div>
          </div>
          <Image
            src="/hor-pic2-oct-26.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={500}
            height={500}
          />
          <Image
            src="/hor-pic3-oct-26.jpg"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={300}
            height={300}
          />
          <div className="relative h-full w-full bg-black">
            <img
              src="/hor-pic1-dec-5.png"
              alt="image 1"
              className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute  bottom-0 h-[8rem] w-full place-items-center bg-gradient-to-b from-white/0 to-black/85">
              <Typography
                color="white"
                variant="lead"
                className="font-sans absolute top-[3.5rem] left-5"
              >
                HOR Hearing - December 5
              </Typography>
            </div>
          </div>

          <Image
            src="/hor-pic3-dec-5.png"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={300}
            height={300}
          />
          <Image
            src="/hor-pic4-dec-5.png"
            alt="image 1"
            className="max-h-[11rem] md:max-h-[22rem] lg:max-h-[30rem] w-full object-cover"
            width={300}
            height={300}
          />
        </Carousel>
        <Typography variant="h5" className="font-sans text-center mt-2">
          Legislative Journey regarding RA No. 9184 Amendments (House of
          Representatives)
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; Since February 2023, the Government Procurement
          Policy Board – Technical Support Office (GPPB-TSO) provided technical
          support as resource persons to the hearings of the House of
          Representatives (HoR) Committee on Revision of Laws relative to its
          substitute bill which was then a consolidation of all proposed bills
          amending Republic Act (RA) No. 9184. The Office has been taking
          advantage of this engagement as an opportunity to identify the areas
          of interest and concerns of our legislators in the amendment of RA No.
          9184.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The Technical Working Group formed by the House
          Committee on Revision of Laws met several times to discuss the
          proposed inclusions and the results of the Comprehensive Assessment of
          the Philippine Public Procurement using the Methodology for the
          Assessment of Procurement Systems (MAPS)​.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In June 2023, the GPPB-TSO proposed the issuance
          of a Position Paper to the proposed bills of the HoR and Senate of the
          Philippines (Senate) on salient points requiring the policy direction
          of the GPPB. However, the proposed position paper was superseded by
          the development of the Administrative Bill by the Department of Budget
          and Management (DBM), in collaboration with GPPB-TSO and Procurement
          Service (PS), the cornerstones of which were then presented to the
          Office of the President in August 2023, then the 3rd
          Legislative-Executive Development Advisory Council (LEDAC) in
          September 2023. Subsequently, the DBM submitted the same to the HoR
          and Senate of the Philippines in October 2023.  It is highlighted that
          the Bill has been the result of the pronouncement of the President
          during his State of the Nation Address (SONA) calling both Houses to
          enact a new procurement law. Moreover, it bears emphasis that the
          GPPB-TSO has proposed the inclusion of the earlier recommendations and
          comments of the GPPB relative to RA No. 9184 amendment into the
          Administrative Bill.
        </Typography>

        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The Committee on Revision of Laws harmonized the
          Substitute Bill and the Administrative Bill to come up with House Bill
          No. 9648. This was approved by the Sub-Committee on Revision of Laws
          and eventually by its mother Committee on 08 November 2023 and 14
          November 2023, respectively. The HoR, thereafter, approved for Second
          Reading House Bill No. 9648 on 06 December 2023 after a series of
          interpellation and additional amendments. This was followed by the
          Third Reading of the House Bill and was endorsed to the Senate on 12
          December 2023.
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
                    Deliberations at the House of Representatives
                  </Typography>
                </td>
              </tr>
              {dhr.map(({ col1, col2 }, index) => {
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
