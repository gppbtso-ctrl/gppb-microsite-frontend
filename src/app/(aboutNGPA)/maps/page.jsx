"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";

export default function Maps() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none flex flex-col gap-2">
        {/* <Typography variant="h5" className="font-montserrat">
          METHODOLOGY FOR ASSESSING PROCUREMENT SYSTEMS (MAPS){" "}
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; The Government Procurement Policy Board (GPPB),
          with the technical assistance of the World Bank (WB) and Asian
          Development Bank (ADB), conducted the assessment of the Philippine
          Public Procurement System using the 2018 updated Methodology for the
          Assessment of Procurement Systems (MAPS) of the Organisation for
          Economic Co-operation and Development's Development Assistance
          Committee.{" "}
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; At the outset, the MAPS is a tool for evaluating
          the government procurement performance of a country. Using the MAPS,
          opportunities for, and challenges to, the country's procurement system
          are identified to serve as a guide to the government in enhancing its
          current public procurement framework and processes to make it more
          responsive to the needs of its people. The MAPS final assessment
          findings shall be officially released as Country Procurement
          Assessment Report (CPAR) to the requesting country.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; In 2008 and 2012, using the 2006 MAPS, CPARs were
          released identifying major challenges, as well as the accomplishments
          in the Philippine Public Procurement System. Then in 2019, with the
          updating of the MAPS in 2018, the GPPB, through its Technical Support
          Office (TSO), deemed it is timely and necessary to undertake a
          comprehensive assessment of the Philippine Public Procurement System.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; Thus, the GPPB, in collaboration with the WB and
          ADB, initiated on 29 July 2019 the MAPS comprehensive assessment aimed
          at identifying points of opportunity for improving the country’s
          procurement system, which would guide the GPPB in enhancing and making
          the current policy framework more responsive and inclusive to the
          needs of the government.
        </Typography>

        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; Despite challenges posed by the COVID-19
          pandemic, the MAPS Assessment Proper was undertaken in January –
          November 20212 whereby the MAPS team stepped-up data gathering and
          examination of the procurement activities of 17 Procuring Entities
          (PEs),3 notably from National Government Agencies (6),
          Government-Owned and Controlled Corporations (3), Local Government
          Units (5), and State Universities and Colleges (3). A total of 186
          contracts were analyzed comprised of different procurement types,
          particularly: 130 Civil Works contracts (70%), 49 Goods contracts
          (26%), and 7 Consulting Services contracts (4%). Out of these sample
          contracts, 167 underwent Competitive Bidding while the remaining 19
          resorted to Alternative Methods of Procurement.
        </Typography>

        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; On 22 October 2020, during the 12th Regular GPPB
          Meeting, the World Bank presented to the Committee the highlights of
          the preliminary findings of the MAPS assessment based on the survey of
          the participating agencies.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; Then, in January to May 2022, GPPB-TSO conducted
          its own review of the draft preliminary report and discussed with the
          WB, this time focusing on the MAPS recommended Key Areas for
          Improvement.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; Seven (7) Key Areas for Improvement as discussed
          with the World Bank, to wit: (a) Rules on Participation, (b)
          Procurement Methods, (c) Support to Value for Money, (d) Complaints
          Review Mechanisms, (e) Sustainable Public Procurement, (f) Strategy
          and enabling environment for the professionalization of procurement
          function and, (g) E-procurement system.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; The preliminary MAPS report with the above key
          priority areas would need to go through a very stringent two-tier
          process of validation and quality assurance – first by the MAPS
          Secretariat, then second, the MAPS Assessment's Technical Advisory
          Group (ATAG) considering that it will be published as a CPAR. Before
          they can publish the CPAR, the WB wanted to make sure that the data by
          which the report was based were sufficient and reliable, hence,
          another meeting with the WB was held in October 2022.
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; Last 16 May 2023, given the non-objection of the
          MAPS Assessment Technical Advisory Group (ATAG), the GPPB-TSO, through
          the Office of the Executive Director (OED), received the Final Draft
          MAPS Report with the target of publication and dissemination by June
          2023. During the Steering Committee meeting last 08 June 2023, the
          MAPS Final Draft Report was presented to the committee members and
          requested their comments and input. As of 26 June 2023, the MAPS Final
          Assessment Report was published and issued the Seal of Approval.
        </Typography>

        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; As reported in the latest Steering Committee
          meeting last 08 June 2023, the GPPB and its TSO have made notable
          progress already when the following key areas of improvement and WB
          recommendations, as indicated below:
        </Typography>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border border-black bg-blue-gray-50 p-4 ">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold leading-none opacity-70"
                >
                  Key Areas for Improvement and World Bank Recommendations
                </Typography>
              </th>
              <th className="border border-black bg-blue-gray-50 p-4 ">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold leading-none opacity-70"
                >
                  GPPB Updates
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`p-4 border border-black w-[20vw] break-words`}>
                <Typography color="blue-gray" className="font-normal ml-5">
                  (a) <u>Rules on Participation</u>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Assess whether the restrictive eligibility requirements
                      concerning licensing and nationality/ establishment
                      deliver the desired outcomes and achieve increased
                      competition, reduced cost of bidding, and best value for
                      money in public procurement.{" "}
                    </li>
                  </ol>
                </Typography>
              </td>
              <td className={`p-4 break-words max-w-[7vw] border border-black`}>
                <Typography color="blue-gray" className="font-normal ml-5">
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      Assess whether the restrictive eligibility requirements
                      concerning licensing and nationality/ establishment
                      deliver the desired outcomes and achieve increased
                      competition, reduced cost of bidding, and best value for
                      money in public procurement.{" "}
                    </li>
                    <li>
                      Nonetheless, the GPPB has already approved GPPB Resolution
                      No. 09-2022 which requested the SEC to create a special
                      basket (fast lane) for winning foreign bidders for
                      purposes of registration and award of contract. To date,
                      the GPPB-TSO is awaiting the SEC's comments and updates
                      regarding this matter. .{" "}
                    </li>
                    <li>
                      Nonetheless, the GPPB has already approved GPPB Resolution
                      No. 09-2022 which requested the SEC to create a special
                      basket (fast lane) for winning foreign bidders for
                      purposes of registration and award of contract. To date,
                      the GPPB-TSO is awaiting the SEC's comments and updates
                      regarding this matter. .{" "}
                    </li>
                  </ol>
                </Typography>
              </td>
            </tr>
          </tbody>
        </table> */}
      </Card>
    </div>
  );
}
