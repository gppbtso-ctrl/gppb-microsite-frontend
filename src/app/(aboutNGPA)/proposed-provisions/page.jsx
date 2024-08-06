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
          Government Procurement Policy Board – Technical Support Office’s
          Proposed Amendments to the Republic Act No. 9184
        </Typography>
        <Typography className=" text-justify ml-3">
          The following proposals from the GPPB-TSO have been adopted in the
          NGPA:
        </Typography>
        <span className=" text-justify font-sans ml-[2.2rem]">
          <ol className="list-[upper-roman] font-bold">
            <li>
              <span className="ml-3 font-semibold">
                STRATEGIC PROCUREMENT PLANNING{" "}
              </span>
              <span className="font-normal block">
                The Act emphasizes the need for proper and purposeful planning
                in procurement processes, which includes conducting relevant
                market scoping and analyzing available procurement modalities to
                ensure informed decisions tailored to specific project needs.
              </span>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">
                    Mandatory Market Scoping
                  </span>
                  The Act requires procuring entities to conduct market scoping
                  as a preliminary step in preparing their Project Procurement
                  Management Plan (PPMP) and gathering relevant market
                  information to inform procurement decisions effectively.
                </li>
                <li>
                  <span className="font-semibold block">
                    Early Procurement Activities
                  </span>
                  Early Procurement Activities are encouraged to improve
                  planning and execution of procurement projects, allowing for
                  the identification of potential challenges and opportunities.
                </li>
                <li>
                  <span className="font-semibold block">
                    Life Cycle Assessment (LCA) and Life Cycle Costing (LCC)
                    Analysis
                  </span>
                  The Act mandates consideration of the entire lifecycle of
                  procurement projects, emphasizing LCA and LCC as essential
                  tools for evaluating long-term costs and benefits, ensuring
                  sustainable consumption.{" "}
                </li>
              </ol>
            </li>
            <li className="mt-3">
              <span className="ml-3 font-semibold">
                FIT-FOR-PURPOSE MODALITIES
              </span>
              <span className="font-normal block">
                Several provisions are introduced that aim to achieve value for
                money, procurement efficiency, and quality public services
                through fit-for-purpose modalities.
              </span>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">Value for Money </span>A
                  critical focus of the Act is on achieving value for money,
                  defined as the optimum combination of quality and cost to meet
                  end-user requirements. This principle encourages procuring
                  entities to consider not just the lowest bid but also the
                  overall quality and effectiveness of the goods and services
                  procured.{" "}
                </li>
                <li>
                  <span className="font-semibold block">
                    Most Economically Advantageous Responsive Bid
                  </span>
                  The Act allows for the selection of winning bidders based on a
                  "Most Economically Advantageous Responsive Bid" approach,
                  enabling the assessment of bids based on both pre-determined
                  price and qualitative factors, such as technical
                  specifications and service quality.{" "}
                </li>
                <li>
                  <span className="font-semibold block">
                    Flexibility in Procurement Methods
                  </span>
                  The Act provides procuring entities with the flexibility to
                  select the most appropriate procurement methods based on
                  specific needs and objectives, supporting efficient execution
                  of procurement processes and delivery of quality public
                  services.{" "}
                </li>
                <li>
                  <span className="font-semibold block">
                  Engagement of a Procurement Agent
                  </span>
                  The Act allows for the engagement of procurement agents to assist in complex projects, ensuring access to expertise and resources that enhance procurement effectiveness. 
                </li>
                <li>
                  <span className="font-semibold block">
                  Use of Framework Agreements
                  </span>
                  Framework agreements are introduced as a strategic modality allowing for long-term relationships with suppliers, leading to more efficient procurement processes and better pricing.               
                   </li>
                   <li>
                  <span className="font-semibold block">
                  Design and Build Scheme
                  </span>
                  The Act supports the design and build scheme for infrastructure projects, streamlining project delivery and enhancing collaboration between designers and builders, since there is a single point of responsibility for quality, cost, and scheduling of activities, including risks related to design.                   
                   </li>
                   <li>
                  <span className="font-semibold block">
                  Pooled Procurement
                  </span>
                  Pooled procurement encourages multiple entities to collaborate in procuring goods or services, leading to economies of scale and improved bargaining power.                  
                   </li>
                   <li>
                  <span className="font-semibold block">
                  Renewal of Regular and Recurring Services
                  </span>
                  The Act provides for the renewal of regular and recurring services as part of strategic procurement planning, ensuring effective management of ongoing regular and recurring services.                    
                   </li>
              </ol>
            </li>
            <li className="mt-3">
              <span className="ml-3 font-semibold">
              MODERNIZING PROCUREMENT PROCESSES
              </span>
              <span className="font-normal block">
              The new Government Procurement Act aims to modernize procurement processes through the use of emerging technologies and integrated systems among relevant government agencies.               
              </span>
              <p className="font-normal mt-3">A. Streamlining Procurement through Integrated Systems </p>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">Enhanced Efficiency Principle</span>A
                  The Act emphasizes efficiency as a key principle, aiming for an organized, uniform, and straightforward procurement process s through innovative solutions
                </li>
                <li>
                  <span className="font-semibold block">
                  Procurement Planning to Payment
                  </span>
                  An integrated system covering the entire procurement process, from planning to payment, is established to streamline operations and enhance efficiency. 
                </li>
                <li>
                  <span className="font-semibold block">
                  Interconnected Database
                  </span>
                  The Act authorizes the establishment of a single portal for procuring entities to access an interconnected database of ongoing projects, licenses, permits, and other relevant information. 
                </li>
        
              </ol>
              <p className="font-normal mt-3">B. Leveraging Emerging Technologies  </p>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">Electronic Payment 
                  </span>The Act mandates the use of electronic payment systems to streamline the procurement process and reduce administrative burdens.
                </li>
                <li>
                  <span className="font-semibold block">
                  Procurement Data Analytics
                  </span>
                  The GPPB is empowered to analyze data from PhilGEPS and submitted reports to assist procuring entities in strategic planning and policy formulation. 
                </li>
                
        
              </ol>
            </li>
            <li className="mt-3">
              <span className="ml-3 font-semibold">
              INSTITUTIONALIZING SUSTAINABLE PUBLIC PROCUREMENT
              </span>
              <span className="font-normal block">
              The new Government Procurement Act embeds economic, environmental, and social considerations into procurement projects.              
              </span>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">Sustainability Principle</span>
                  The Act states that sustainability should guide the procurement process, minimizing environmental impacts and promoting social equity.
                </li>
                <li>
                  <span className="font-semibold block">
                  Green Public Procurement (GPP)
                  </span>
                  The Act promotes environmentally friendly practices, aligning public procurement with sustainable development goals.                 
                </li>
                <li>
                  <span className="font-semibold block">
                  Inclusive Procurement Programs
                  </span>
                  The Act supports initiatives ensuring marginalized groups have equal opportunities to participate in government procurement.                 
                </li>
        
              </ol>
              <p className="font-normal mt-3">B. Leveraging Emerging Technologies  </p>
              <ol className="ml-5 list-[upper-decimal] font-normal mt-3">
                <li>
                  <span className="font-semibold block">Electronic Payment 
                  </span>The Act mandates the use of electronic payment systems to streamline the procurement process and reduce administrative burdens.
                </li>
                <li>
                  <span className="font-semibold block">
                  Procurement Data Analytics
                  </span>
                  The GPPB is empowered to analyze data from PhilGEPS and submitted reports to assist procuring entities in strategic planning and policy formulation. 
                </li>
                
        
              </ol>
            </li>
          </ol>
        </span>

     
      </Card>
    </div>
  );
}
