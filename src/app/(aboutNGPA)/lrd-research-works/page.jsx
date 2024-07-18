"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";

export default function LRDResearchWorks() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none flex flex-col gap-3">
        <Typography variant="h5" className="font-sans">
          RESEARCH WORKS BY THE GPPB-TSO{" "}
        </Typography>
        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; In the first semester of CY 2023, the GPPB-TSO
          consolidated the results of the consultations and reviewed the same
          against the provision of the law, its Implementing Rules and
          Regulations, and Supreme Court decisions relating to procurement. {" "}
        </Typography>

        <table className="w-full min-w-max table-auto text-left mt-2">
          <thead>
            <tr>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Study Topic
                </Typography>
              </th>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Particulars
                </Typography>
              </th>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography
                  color="white"
                  className="font-medium leading-none uppercase"
                >
                  Inclusive Dates
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
                rowSpan={4}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    1st Quarter General Review of RA No. 9184 and its IRR, and
                    other associated Issuances 
                  </span>
                  <span className="font-normal font-sans block  text-justify italic">
                    (Based on the common queries received from requests for
                    opinion or clarification from Procuring Entities (PEs) and
                    those raised during procurement trainings, as well as from
                    the data gathered from procurement monitoring reports) 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[7vw] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  Consolidation of all revisions and updates made in the IRR
                  from November 2016 onwards, including other laws, issuances,
                  rules and policies related to government procurement. 
                </span>
              </td>
              <td
                className={`p-3 break-words w-[12rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  16 February – 30 March 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 break-words max-w-[7vw] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  Collation of common issues or gaps in the procurement process
                  to provide possible interventions for improvement or
                  enhancement of the existing rules and regulations. 
                </span>
              </td>
              <td
                className={`p-3 break-words w-[12rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  03 March – 17 March 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-3 break-words max-w-[7vw] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  Comparison and pairing of the provisions of RA No. 9184 and
                  its IRR, and its associated issuances, alongside the other
                  related laws, rules and regulations affecting procurement, and
                  minutes of the meetings. 
                </span>
              </td>
              <td
                className={`p-3 break-words w-[12rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  03 March – 17 March 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-3 break-words max-w-[7vw] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  Scoping of the Supreme Court decisions relating to procurement
                  and government to clarify gaps noted in the said cases as well
                  as integrating and considering any important ruling made by
                  the Court. 
                </span>
              </td>
              <td
                className={`p-3 break-words w-[12rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  03 March – 17 March 2023 {" "}
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
                rowSpan={1}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    Study on beneficial ownership to enhance transparency and
                    mitigate corruption risks in government procurement 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  As an initial step, a data sharing agreement has been signed
                  with the SEC to acquire information on beneficial ownership of
                  bidders.  Further, the study will look into relevant laws,
                  regulations, and disclosure policies, and provide
                  recommendations on implementing beneficial ownership
                  disclosure. These recommendations will serve as the basis for
                  the rules on beneficial ownership and conflict of interest
                  statements, as well as the disclosure forms to be utilized by
                  the prospective bidders. {" "}
                </span>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  19 April 2023 - 30 June 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    Development of a toolkit on project costing and technical
                    specifications writing 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  This study is undertaken to further capacitate PEs in
                  identifying the project requirements and in preparation for
                  the introduction of life cycle costing analysis Despite the
                  existing Generic Procurement Manual Vol. 1 and 2, PEs continue
                  to experience challenges in preparing cost estimates,
                  resulting in unnecessary, extravagant, and excessive Approved
                  Budget for the Contracts (ABCs) of various procurement
                  projects. The toolkit will provide guidance to PEs in
                  utilizing the various methodologies in project costing and
                  technical specifications drafting to create a more responsive
                  and accurate ABC estimation. 
                </span>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  19 April – 18 August 2023 
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    Updating of the Procurement Observers Guide (POG), including
                    the development of a dedicated portal  
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  This study aims to support the COA, civil society
                  organizations, national government organizations, and private
                  sector groups acting as Observers in government procurement
                  activities. The updating of POG will simplify the terms and
                  align them with the existing issuances. The development of the
                  portal, on the other hand, is a vital tool for ensuring
                  transparency and accountability in the procurement process.
                  Moreover, a portal will allow the Observers to actively
                  participate in the government procurement process, allowing
                  them to register, log in, and submit reports. Moreover, PEs
                  will have access to an Observers directory to invite
                  potential Observers for their projects. {" "}
                </span>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  19 April 2023 – 18 August 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    Study on Debarment/Blacklisting and other Sanction
                    Mechanisms 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  This study aims to revisit the current guidelines for the
                  blacklisting of suppliers, contractors, and consultants which
                  will shift the focus from using debarment as a punitive tool
                  in government procurement to a more flexible system which will
                  improv the trustworthiness of the suppliers. This will include
                  considerations of enforcement, centralized decision-making
                  structures and exhaustion of administrative steps while
                  allowing appeals to courts, as well as possible cross-border
                  cooperation. {" "}
                </span>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  27 March – 04 April 2023 
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 border h-full border-black max-w-[5rem] break-words align-top`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans block text-justify font-semibold">
                    Study to examine regulatory requirements such as licenses
                    and permits of other offices to identify overlaps and
                    validate eligibility requirements 
                  </span>
                </div>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  This involved reviewing the multitude of regulatory
                  requirements that cut across public procurement which will
                  provide an opportunity to identify specialized procurement
                  projects and harmonize the same within the purview of the
                  principles of efficiency and effectiveness in public
                  procurement. 
                </span>
              </td>
              <td
                className={`p-3 break-words max-w-[15rem] border border-black align-top`}
              >
                <span className="font-sans block text-justify">
                  27 March – 04 April 2023  
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
