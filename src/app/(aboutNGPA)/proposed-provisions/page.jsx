"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";

export default function ProposedProvisions() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-10 m-3 max-w-5xl rounded-none flex flex-col gap-3">
        <Typography variant="h5" className="font-sans text-center ">
        Government Procurement Policy Board – Technical Support Office’s Proposed Amendments to the Republic Act No. 9184 
        </Typography>
        <Typography className=" text-justify ml-3">
        In summary, the following are the GPPB-TSO’s initial proposed revisions to RA No. 9184: 
        </Typography>
        <span className=" text-justify font-sans ml-[3.5rem]">
          <ol className="list-[lower-alpha] grid grid-flow-row gap-3">
            <li>Embed the principles of open government in the procurement system to enhance transparency and accountability in all government procurement transactions</li>
            <li>Streamline the procurement process through digitalization and the adoption of innovative solutions to enhance operational efficiency and effectiveness of the procurement process; </li>
            <li>Institutionalize strategic procurement planning and the tools and approaches that may be adopted by procuring entities to increase the success rates of procurement transactions and enhance the results and outcomes of the procurement projects. This includes early procurement activities, the engagement of a procurement agent, renewal of regular and recurring services, pooled procurement, use of framework agreements, and design and build scheme for Infrastructure Projects; </li>
            <li>Incorporate sustainable public procurement principles beginning with the adoption of green procurement strategies, use of life cycle assessment, and inclusion of social considerations in the design and requirements of procurement projects like gender parity and women’s empowerment, thereby achieving value for money while generating maximum economic and social benefits; </li>
            <li>Improve the modalities of procurement by providing Procuring Entities flexibility to select the most appropriate and efficient method based on their specific needs, in line with the fit-for-purpose approach and incorporating Shopping in Small Value Procurement which will include readily off-the-shelf goods and small value items with increased threshold of two million pesos (P2,000,000.00), among others. </li>
            <li>Enhance participatory procurement by enabling active Civil Society Organization (CSO) participation in public monitoring through the Observers Portal to address the waning involvement of CSOs in procurement activities; and </li>
            <li>Institutionalize professionalization of public procurement through the development of specialized qualification standards for procurement positions; a competency and certification framework for the selection of procurement officers and professional development; and a code of ethics for public procurement professionals in the Philippines. This includes the institutional strengthening of the GPPB and its TSO to align its organizational structure and staffing with the technical and administrative support needed to implement all the procurement reforms included in the bill. </li>
          </ol>

        </span>

        <Typography className=" text-justify ml-3">
        Additional key provisions were further introduced by the GPPB-TSO and adopted in the Bill amending RA No. 9184:  
        </Typography>
        <span className=" text-justify font-sans ml-[3rem]">
          <ol className="list-[lower-alpha] grid grid-flow-row gap-3">
            <li>Include qualitative criteria in evaluating bids using a predetermined quality-price ratio.​ </li>
            <li>Institutionalize strategic procurement planning prior to the actual procurement by incorporating various mechanisms or tools, such as:​ 
           
              <ol className="list-[lower-roman] mt-2 ml-[2.5rem]">
                <li>Market Scoping  </li>
                <li>Early Procurement Activities </li>
                <li>Engagement of a Procurement Agent   </li>
                <li>Framework Agreement </li>
                <li>Design and Build Scheme for Infrastructure Projects </li>
              </ol>
            </li>
            <li>Provide the adoption of a simpler mechanism for price escalation. </li>
            <li>Add the use of Life-Cycle Assessment (LCA) and LCC Analysis as procurement strategies that may be used in designing procurement projects.</li>
            <li>Add sustainable procurement as a principle to align with economic, environmental, and social objectives and promote responsible business practices that benefit organizations and society as a whole.   </li>
            <li>Adopt an inclusive procurement program.  </li>
            <li>Introduce Green Public Procurement in procuring Goods, Infrastructure Projects, and Consulting Services with reduced environmental impact throughout their lifecycle. </li>
            <li>Tap into developing Green Local Market through the Department of Trade and Industry (DTI). </li>
            <li>Amplify the three (3) major roles of the GPPB, to wit: (i) Formulation of the IRR, issuances, and manuals; (ii) Establishment of a Professionalization Program; and (iii) Establishment and implementation of a Strategic Procurement Monitoring Program.  </li>
            <li>Highlight the establishment and institutionalization of the Inter-Agency Technical Working Group (IATWG). The IATWG will provide subject matter expertise to the GPPB in the formulation and review of policies, rules, and regulations related to government procurement. </li>
            <li>Provide for the establishment of an Integrated System to cover procurement planning until payment of procurement contracts. </li>
            <li>Mandate the GPPB to analyze data from PhilGEPS and its submitted reports to assist PEs in their strategic procurement planning, formulate procurement policies, detect trends or patterns to prevent fraud and corruptive practices, and promote public awareness on procurement.  </li>
            <li>Authorize the GPPB to establish a single portal that would enable Procuring Entities to have a seamless interconnected database of ongoing projects, licenses, permits, and other relevant information that would help them in determining the qualification of a certain bidder.  </li>
            <li>Mandate that all bidders disclose their beneficial ownership (BO) information to participate in government procurement, and for SEC to share the said BO information of corporations. </li>
            <li>Clarify the prioritization and preference for domestic bids that are substantially grown, produced, and manufactured in the Philippines with DTI Domestic Bid Certificate while allowing the participation of foreign bids. </li>
          </ol>

        </span>
      </Card>
    </div>
  );
}
