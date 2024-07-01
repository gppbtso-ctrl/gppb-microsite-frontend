"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-5 m-3 max-w-5xl rounded-none">
        <div className="flex gap-2 ">
          <div className="pt-5 h-full">
            <Typography className=" text-justify">
              Development of the New Government Procurement Act Pursuant to
              Section 63 of Republic Act No. 9184 (RA 9184), the Government
              Procurement Policy Board (GPPB) is mandated to conduct an annual
              review of the effectiveness of RA 9184 and recommend amendments
              thereto, as may be necessary, among others. <br />
              <br />
              In 2019, the GPPB, through its Technical Support Office (TSO),
              received several requests for a law change considering he
              identified gaps, challenges and issues in RA No. 9184. Some key
              issues include several failures in bidding due to lack of
              qualified bidders or disqualifications arising from unresponsive
              bids, which led to delays in contract implementation. <br />
              <br />
            </Typography>
          </div>
          <img
            className=" w-3/5 rounded-lg object-fit self-strech my-[1.6rem] shadow-md"
            src={"/about1.png"}
            alt="nature image"
          />
        </div>
        <Typography className=" text-justify">
          Recognizing the critical need to assess and ensure a more robust and
          effective procurement framework, the GPPB initiated a comprehensive
          assessment of the current procurement system. To facilitate this, the
          GPPB-TSO, with the technical assistance from the World Bank (WB) and
          Asian Development Bank (ADB), conducted from 2019 to 2021 this
          assessment utilizing the Methodology for Assessing Procurement Systems
          (MAPS) tool. <br />
          <br />
          Through the MAPS assessment, the GPPB has particularly aimed that the
          results would provide an overarching guidance in the prioritization of
          procurement reforms to be undertaken in the succeeding years. <br />{" "}
          <br />
          In January 2022, the GPPB-TSO received the WB’s initial findings that
          identified key areas for improvement, emphasizing the need for
          continuous enhancements for the following: (i) rules on participation;
          (ii) methods of procurement; (iii) support to value for money; (iv)
          sustainable public procurement; (v) professionalization; (vi)
          e-procurement system; and (vii) complaints review mechanism.
          Subsequently, the initial recommendations were presented to the GPPB
          for policy direction. Overall, the GPPB-TSO pointed out that these
          would require institutional changes or amendment of laws. <br />{" "}
          <br /> The GPPB, led by the Secretary of the Department of Budget and
          Management (DBM), recognized the need to update the IRR of RA No. 9184
          to include digitalization initiatives and promote a sustainable
          procurement system, while harmonizing all the revisions and updates
          made in the IRR from November 2016 onwards, including other laws,
          issuances, rules and policies related to government procurement.{" "}
          <br /> <br /> At the start of 2023, the GPPB-TSO conducted an
          extensive mapping on concerns and procurement-related issuances. The
          activities include the consolidation of all revisions made in the IRR
          of RA No. 9184, collation of common issues or gaps in the procurement
          process, comparison of RA No. 9184 and its IRR, alongside other
          issuances affecting procurement, and various minutes of the meetings
          of the GPPB, and scoping of Supreme Court decisions relating to
          procurement. In February of the same year, the GPPB-TSO had been
          invited by the House Committee on Revision of Laws, with
          Representative Edward Maceda as the Chairperson, to attend its
          Congressional hearings to discuss a Substitute Bill proposing changes
          to RA No. 9184. Since then, the GPPB-TSO has actively participated in
          the discussions by providing inputs in the line-by-line review of the
          Substitute Bill. <br />
          <br />
        </Typography>
        <Typography className=" text-justify">
          While attending Congressional hearings on the amendment of RA No.
          9184, the GPPB-TSO had simultaneously worked on several studies to be
          included in the proposed amendments covering the study on (i)
          beneficial ownership to enhance transparency and mitigate corruption
          risks, (ii) development of a toolkit on project costing and technical
          specifications writing, (iii) updating of the Procurement Observers
          Guide, including the development of a dedicated online portal, (iv)
          debarment/ blacklisting and sanction mechanisms, and (v) regulatory
          requirements. <br />
          <br />
          The Technical Working Group (TWG) formed by the House Committee on
          Revision of Laws met several times to discuss the proposed inclusions
          and the results of the Comprehensive Assessment of the Philippine
          Public Procurement using the MAPS​. The GPPB also proposed the
          issuance of a Position Paper incorporating its comments and
          recommendations not only to the proposed bills of the House of
          Representatives (HoR) but also to proposed bills of the Senate of the
          Philippines (Senate). However, the proposed position paper was
          superseded by the issuance of the Administrative Bill. The
          Administrative Bill includes all the recommendations and comments of
          the GPPB. The Bill is the result of the pronouncement of the President
          during his State of the Nation Address (SONA) calling both houses to
          enact a new procurement law. <br />
          <br />
          The Administrative Bill is presented to the Office of the President as
          well as during the 3rd Legislative-Executive Development Advisory
          Council (LEDAC). The said meeting was subsequently followed by a
          meeting with the Office of the Senator Sonny Angara. The latter
          formulated a senate bill also for the amendments. <br />
          <br />
        </Typography>
        <div className="flex gap-2 ">
          <img
            className=" w-3/5 rounded-lg object-cover object-center  self-stretch mt-1 mb-7 shadow-md"
            src={"/about2.png"}
            alt="nature image"
          />
          <div>
            <Typography className=" text-justify">
              The Committee on Revision of Laws harmonized the Substitute Bill
              and the Administrative Bill to come up with House Bill (HB) No.
              9648. This was approved by the Sub-Committee on Revision of Laws
              and eventually by its mother Committee on 08 November 2023 and 14
              November 2023, respectively. The HoR, thereafter, approved for
              Second Reading HB No. 9648 on 06 December 2023 after a series of
              interpellation and additional amendments. This was followed by the
              Third Reading of the HB and was endorsed to the Senate on 12
              December 2023. Meanwhile, the Administrative Bill is incorporated
              in Senate Bill (SB) No. 2466, introduced by Sen. Sonny Angara, and
              was read for the first reading on 06 November 2023. <br />
              <br />
            </Typography>
          </div>
        </div>
        <Typography className=" text-justify">
          Meanwhile, the Administrative Bill is incorporated in Senate Bill (SB)
          No. 2466, introduced by Sen. Sonny Angara, and was read for the first
          reading on 06 November 2023. This was subsequently referred to the
          Committee on Finance. <br /> <br />
          Here are the GPPB and its TSO’s initial proposed revisions: <br />
          <br />
        </Typography>
        <div>
          <ol
            style={{
              listStyleType: "lower-latin",
            }}
            className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
          >
            <li>
              {" "}
              <span className="ml-2 text-justify">
                Embed the principles of open government in the procurement
                system to enhance transparency and accountability in all
                government procurement transactions;
              </span>
            </li>

            <li>
              {" "}
              <span className="ml-2 text-justify">
                Streamline the procurement process through digitalization and
                the adoption of innovative solutions to enhance operational
                efficiency and effectiveness of the procurement process;
              </span>
            </li>

            <li>
              {" "}
              <span className="ml-2 text-justify">
                Institutionalize strategic procurement planning, and the tools
                and approaches that may be adopted by procuring entities to
                increase the success rates of procurement transactions and
                enhance results and outcomes of the procurement projects. This
                includes early procurement activities, the engagement of a
                procurement agent, renewal of regular and recurring services,
                pooled procurement, use of framework agreements, and design ad
                build scheme for Infrastructure Projects;
              </span>
            </li>

            <li>
              {" "}
              <span className="ml-2 text-justify">
                Incorporate sustainable public procurement principles beginning
                with the adoption of green procurement strategies, use of life
                cycle assessment, and inclusion of social considerations in the
                design and requirements of procurement projects like gender
                parity and women’s empowerment, thereby achieving value for
                money while generating maximum economic and social benefits;
              </span>
            </li>

            <li>
              {" "}
              <span className="ml-2 text-justify">
                Improve the modalities of procurement by providing Procuring
                Entities flexibility to select the most appropriate and
                efficient method based on their specific needs, in line with the
                fit-for-purpose approach and incorporating Shopping in Small
                Value Procurement which will include readily off-the-shelf goods
                and small value items with increased threshold of two million
                pesos (P2,000,000.00), among others.
              </span>
            </li>

            <li>
              {" "}
              <span className="ml-2 text-justify">
                Enhance participatory procurement by enabling active Civil
                Society Organization (CSO) participation in public monitoring
                through the Observers Portal to address the waning involvement
                of CSOs in procurement activities; and
              </span>
            </li>
            <li>
              {" "}
              <span className="ml-2 text-justify">
                Professionalization of public procurement through the
                development of specialized qualification standards for
                procurement positions; a competency and certification framework
                for the selection of procurement officers and professional
                development; and a code of ethics for public procurement
                professionals in the Philippines. This includes the
                institutional strengthening of the GPPB and its TSO to align its
                organizational structure and staffing with the technical and
                administrative support needed to implement all the procurement
                reforms included in the bill.
              </span>
            </li>
          </ol>
        </div>
        <br />
        <Typography className=" text-justify">
          These proposed principles were both incorporated in HB No. 9648 and SB
          No. 2466. Here are the other provisions introduced by the GPPB and its
          TSO and was adopted in the HoR Substitute Bill:
        </Typography>
        <ol
          style={{
            listStyleType: "lower-latin",
          }}
          className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
        >
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Includes qualitative criteria in evaluating
              bids using a predetermined quality-price ratio.​
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Institutionalizes strategic procurement planning prior to the
              actual procurement by incorporating various mechanisms or
              tools, such as:
              <ol className="list-inside ml-7 flex flex-col gap-2 font-sans">
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2 ">Market Scoping​</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">Multi-Year Contracting</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">Early Procurement</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">Activities</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">
                    Engagement of a Procurement Agent
                  </span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">
                    Renewal of Regular and Recurring Services
                  </span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">Pooled Procurement</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">Framework Agreement</span>
                </li>
                <li className="before:content-['-'] ">
                  {" "}
                  <span className="ml-2">
                    Engagement of a Procurement Agent
                  </span>
                </li>
              </ol>
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Provides for the adoption of a simpler mechanism for
              price escalation.
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Adds the use of Life-Cycle Assessment (LCA)
              and LCC Analysis as procurement strategies that may be used
              in designing procurement projects. 
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Adds sustainable procurement as a principle to align
              with economic, environmental, and social objectives and promote
              responsible business practices that benefit
              organizations and society as a whole. ​
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2">Adopts inclusive procurement program.​</span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Introduces Green Public Procurement in procuring goods,
              infrastructure projects and consulting services with reduced
              environmental impact throughout their lifecycle.
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Taps into developing Green Local Market through the Department of
              Trade and industry.
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Amplifies the 3 major roles of the GPPB, to wit: (i) Formulation
              of the IRR, issuances, and manuals; (ii) Establishment of a
              Professionalization Program; and (iii) Establishment and
              implementation of a Strategic Procurement Monitoring Program.
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Highlights the establishment and institutionalization of the
              Inter-Agency Technical Working Group (IATWG). The IATWG will
              provide subject matter expertise to the GPPB in the formulation
              and review of policies, rules, and regulations related to
              government procurement.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Provides for the establishment of an Integrated System to cover
              procurement planning until payment of procurement contracts.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Mandates the GPPB to analyze data from PhilGEPS and submitted
              reports to assist PEs in their strategic procurement planning,
              formulate procurement policies, detect trends or pattern to
              prevent fraud and corruptive practices, and promote public
              awareness on procurement.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Authorizes the GPPB to establish a single portal that would enable
              Procuring Entities to have a seamless interconnected database of
              ongoing projects, licenses, permits and other relevant information
              that would help them in determining the qualification of a certain
              bidder.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Introduces a new method of procurement for infrastructure
              projects, i.e. Design and Build Procurement, which leverages on
              emerging technologies and innovative solutions in engineering and
              construction.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Mandates that all bidders disclose their beneficial ownership (BO)
              information to participate in government procurement, and for SEC
              to share the said BO information of corporations.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="ml-2 text-justify">
              Clarifies the prioritization and preference to domestic bids that
              are substantially grown, produced, and manufactured in the
              Philippines with DTI Domestic Bid Certificate while allowing the
              participation of foreign bids.
            </span>
          </li>
        </ol>
        <br />

        <br />
        <div className="flex gap-2">
          <Typography className=" text-justify">
            In February 2024, the Senate Committee on Finance held TWG hearings
            to discuss proposed amendments to RA No. 9184. Following this, on
            March 2024, SB No. 2593, also known as the New Government
            Procurement Reform Act, was filed by several committees including
            Finance, Sustainable Development Goals, Innovation and Futures
            Thinking, National Defense and Security, Pease, Unification and
            Reconciliation, Local Government, Civil Services, Government
            Reorganization, and Professional regulation.
            <br />
            Upon the Sponsorship of the Chairperson of Senate Committee on
            Finance of SB No. 2593, several Plenary Hearing was conducted by the
            Senate from March to May 2024, within which period, the GPPB-TSO has
            been actively coordinating with the Office of Sen. Angara and
            supporting the Sponsor. This includes discussion on procurement
            timelines and different procurement modalities with the objective of
            simplifying the processes.
          </Typography>
          <img
            className=" w-3/5 rounded-lg object-cover object-left self-stretch mt-1 mb-7 shadow-md"
            src={"/about3.png"}
            alt="nature image"
          />
        </div>
        <br />
        <Typography className=" text-justify">
          After the period of interpellation and amendments, the Senate approved
          on third reading SB No. 2593 on 21 May 2024, with unanimous support
          from all Senators.
          <br />
          <br />
          The legislative journey of the proposed amendments to RA No. 9184
          culminated in the ratification of the Bicameral Conference Committee
          Report on SB No. 2593 and HB No. 9648 on 22 May 2024.
          <br />
          <br />
          The ratified Bill is tentatively expected to be enacted into law in
          June 2024. Thereafter, the GPPB has 180 calendar days to develop the
          IRR for the newly enacted Government Procurement Law.{" "}
        </Typography>
      </Card>
    </div>
  );
}
