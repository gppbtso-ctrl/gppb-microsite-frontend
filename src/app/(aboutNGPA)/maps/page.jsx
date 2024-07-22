"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function Maps() {
  const loading = useLoading(1200);

  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative shadow-none p-7 m-3 max-w-[67rem] rounded-none flex flex-col gap-3">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl  h-full  flex-none shadow-lg "
        >
          {Array.from({ length: 8 }, (_, i) => i + 1).map((number, index) => (
            <Image
              key={index}
              src={`/maps-pic${number}.jpg`}
              alt="image 1"
              className="max-h-[33rem] w-full object-fill"
              width={500}
              height={500}
            />
          ))}

          {Array.from({ length: 8 }, (_, i) => i + 1).map((number, index) => (
            <Image
              key={index}
              src={`/maps2-pic${number}-min.jpg`}
              alt="image 1"
              className="max-h-[33rem] w-full object-fill "
              width={500}
              height={500}
            />
          ))}
        </Carousel>
        <Typography variant="h5" className="font-sans text-center ">
          METHODOLOGY FOR ASSESSING PROCUREMENT SYSTEMS (MAPS){" "}
        </Typography>
        <Typography className=" text-justify ">
          &nbsp; &nbsp; &nbsp; The Government Procurement Policy Board (GPPB),
          with the technical assistance of the World Bank (WB) and Asian
          Development Bank (ADB), conducted the assessment of the Philippine
          Public Procurement System using the 2018 updated Methodology for the
          Assessment of Procurement Systems (MAPS) of the Organisation for
          Economic Co-operation and Development&apos;s Development Assistance
          Committee.{" "}
        </Typography>
        <Typography className=" text-justify">
          &nbsp; &nbsp; &nbsp; At the outset, the MAPS is a tool for evaluating
          the government procurement performance of a country. Using the MAPS,
          opportunities for, and challenges to, the country&apos;s procurement
          system are identified to serve as a guide to the government in
          enhancing its current public procurement framework and processes to
          make it more responsive to the needs of its people. The MAPS final
          assessment findings shall be officially released as Country
          Procurement Assessment Report (CPAR) to the requesting country.
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
          Secretariat, then second, the MAPS Assessment&apos;s Technical
          Advisory Group (ATAG) considering that it will be published as a CPAR.
          Before they can publish the CPAR, the WB wanted to make sure that the
          data by which the report was based were sufficient and reliable,
          hence, another meeting with the WB was held in October 2022.
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
        <table className="w-full min-w-max table-auto text-left mt-2">
          <thead>
            <tr>
              <th className="border border-black  bg-blue-500 p-4 ">
                <Typography color="white" className="font-medium leading-none">
                  Key Areas for Improvement and World Bank Recommendations
                </Typography>
              </th>
              <th className="border border-black bg-blue-500  p-4 ">
                <Typography color="white" className="font-medium leading-none">
                  GPPB Updates
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (a){" "}
                  <u>
                    <b>Rules on Participation</b>
                  </u>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Assess whether the restrictive eligibility requirements
                      concerning licensing and nationality/ establishment
                      deliver the desired outcomes and achieve increased
                      competition, reduced cost of bidding, and best value for
                      money in public procurement.{" "}
                    </li>
                  </ol>
                </span>
              </td>
              <td className={`p-4 break-words max-w-[7vw] border border-black`}>
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-5 text-justify"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      The <u>registration or licensing of  Foreign Bidders</u>{" "}
                      was based on the requirements of the Securities and
                      Exchange Commission [e.g. Foreign Bidders in case
                      Consulting Services under Section 37.1.4(iv) of the IRR],
                      and the procurement rules have adhered to and following
                      the relevant SEC rules on the matter. {" "}
                    </li>
                    <li>
                      Nonetheless, the GPPB has already approved GPPB Resolution
                      No. 09-2022 which requested the SEC to create a special
                      basket (fast lane) for winning foreign bidders for
                      purposes of registration and award of contract. To date,
                      the GPPB-TSO is awaiting the SEC&apos;s comments and
                      updates regarding this matter. .{" "}
                    </li>
                    <li>
                      On the other hand, the IRR of the amended Foreign
                      Investments Act (RA No. 11647) was already in effect on 27
                      July 2022 and the IRR of the amended Public Service Act
                      (RA No. 11659) took effect last 4 April 2023. In addition,
                      on 27 June 2022, the 12th Regular Foreign Investment
                      Negative List (RFINL) was approved, with the inclusion of
                      aligning the same with the amended Foreign Investments Act
                      and amended Public Service Act.  These may already address
                      the eligibility restrictions and licensing requirements of
                      foreign bidders.{" "}
                    </li>
                    <li>
                      Further, the Supreme Court already ruled in{" "}
                      <b>
                        <i>
                          Philippine Contractors Accreditation Board v. Manila
                          Water Company, Inc.
                        </i>
                      </b>{" "}
                      that foreign corporations may apply for a PCAB Regular
                      License since a corporation engaged in the construction
                      industry is not engaged in the exercise of a profession.
                      The Constitution did not reserve the construction business
                      exclusively to Filipinos and current laws do not prohibit
                      foreigners from entering the same projects as Filipinos in
                      the construction industry.{" "}
                    </li>
                    <li>
                      Once the case attains finality, the Supreme Court’s ruling
                      would effectively lift the foreign ownership restrictions
                      on engaging in construction projects in the Philippines,
                      save only for those that remain under certain special
                      laws.{" "}
                    </li>
                    <li>
                      The GPPB-TSO recommends reviewing and revising the rules
                      and regulations for infrastructure projects to align with
                      the court ruling, if finalized.{" "}
                    </li>
                  </ol>
                </span>
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (b){" "}
                  <b>
                    <u>Procurement Methods</u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Amend the legal framework to provide for fit-for-purpose
                      competitive procedures for procurements with more complex
                      needs where prequalification and/or carefully structured
                      negotiation, respecting procurement principles, may be
                      beneficial.{" "}
                    </li>
                  </ol>
                </span>
              </td>
              <td className={`p-4 break-words max-w-[7vw] border border-black`}>
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-5 text-justify"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      The concept of “pre-qualification” has already been
                      abandoned and replaced by the “simple eligibility check”
                      as enshrined under RA No. 9184.{" "}
                    </li>
                    <li>
                      Nonetheless, the GPPB-TSO recognizes the importance of
                      implementing fit-for-purpose competitive procedures in
                      line with merit-based selection criteria or qualification
                      for bidders. In this regard,{" "}
                      <b>
                        the GPPB-TSO deems that there may be a need to explore
                        the same as applied to highly complex, technical,
                        scientific, or sophisticated Procurement Projects.
                      </b>
                    </li>
                    <li>
                      The GBB-TSO’s concern in this recommendation is on the
                      negotiations factor considering that the current public
                      procurement professionals may not be capacitated enough to
                      undertake the same. This requires a certain level of
                      expertise such as supply chain management and market
                      adeptness.
                    </li>

                    <li>
                      <b>
                        The GPPB-TSO recommends formulating further steps in
                        capacity building of procurement practitioners
                      </b>{" "}
                      i.e., the formulation of organic modules on the
                      procurement of highly complex, technical, scientific or
                      sophisticated Goods, Civil Works, and Consulting Services
                      with the assistance of Development Partners, such as the
                      World Bank.
                    </li>
                  </ol>
                </span>
              </td>
            </tr>

            <tr>
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (c){" "}
                  <b>
                    <u>Support to Value for Money</u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 flex flex-col gap-3">
                    <li>
                      Comprehensive review of the Philippine Bidding Documents
                      (PBDs), including contract conditions which fall short in
                      addressing topics such as reference to abnormally low
                      bids; price adjustment for long-term contracts; adopting
                      contract conditions not using incorporation by reference
                      but by setting out clearly the terms and conditions, among
                      others.{" "}
                    </li>
                    <li>
                      Amend provisions of the legal framework that prevent
                      achieving best value for money, such as the licensing
                      requirements that potentially bars participation of
                      foreign bidders and the lack of provision on the use of
                      Life Cycle Costing (LCC) in procurement stages.{" "}
                    </li>
                  </ol>
                </span>
              </td>
              <td className={`p-4 break-words max-w-[7vw] border border-black`}>
                <span
                  color="blue-gray"
                  className="font-normal block ml-5 text-justify font-sans"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      As improvements to efficiency, the GPPB-TSO, with the help
                      of Development Partners, provided easy access to the PBDs
                      through the PBD Builder.
                    </li>
                    <li>
                      However, the GPPB-TSO deems that the foregoing contract
                      price concerns cannot be addressed by the review of the
                      PBDs, but rather through efficient procurement and budget
                      planning of procuring entities (PEs) considering that the
                      PE must be able to achieve budget predictability through
                      the conduct of project costing to determine the Approved
                      Budget for Contract (ABC) of projects.
                    </li>
                    <li>
                      Thus, the GPPB-TSO has determined that the issue behind
                      the recommendation is the ABC (project costing)
                      considering that the CPARs over the years have been
                      raising concerns on having a ceiling bid price for
                      Procurement Projects. This is in view that the WB and ADB
                      do not adopt a ceiling bid price for projects because they
                      have the concept of overruns.
                    </li>

                    <li>
                      At the outset, the rationale behind ABC and project
                      costing is for budget predictability since the
                      Constitution requires that a project must have a budget
                      passed by the Congress before this can be contracted out
                      to supplier, contractor or consultant, thus they are not
                      allowed any overruns.
                    </li>
                    <li>
                      Bearing this in mind,{" "}
                      <b>
                        the GPPB-TSO underscores efficient procurement and
                        budget planning of procuring entities (PEs) considering
                        that the PE must be able to achieve budget
                        predictability through the conduct of project costing to
                        determine the Approved Budget for Contract
                      </b>{" "}
                      of projects. For Multi-Year Contracts, it is imperative
                      that the PE forecasts the full project cost during its
                      budget planning and preparation although the same would be
                      streamed over a specified number of years.
                    </li>
                    <li>
                      The existing rules provide for price escalation, but they
                      are very rigid with the extraordinary circumstance
                      requirement.{" "}
                    </li>
                    <li>
                      Nonetheless, The GPPB-TSO deems that{" "}
                      <b>
                        it is imperative to have a simpler mechanism under the
                        law
                      </b>{" "}
                      considering that the current process would entail a long
                      process where the NEDA determines the extraordinary
                      circumstances, evaluates the price escalation claims, and
                      then endorses to the GPPB for approval.{" "}
                    </li>
                    <li>
                      In promoting the best value for money, emphasis must be
                      given to two aspects: (1) procurement planning and (2)
                      contract implementation.{" "}
                    </li>
                    <li>
                      PEs must be able to properly implement project costing and
                      efficient formulation of technical specifications,
                      resulting in a more predictable and responsive ABC of
                      projects.{" "}
                    </li>
                    <li>
                      Currently, the GPPB-TSO is working closely with World Bank
                      consultants in preparing a manual for drafting technical
                      specifications and preparing cost estimates for the
                      procurement of goods, works, and consulting services.{" "}
                    </li>
                    <li>
                      In addition, Life Cycle Costing (LCC) is being considered
                      as a factor, among others, in the selection criteria for
                      bidders of government contracts. LCC is an effective risk
                      management strategy that enables PEs to consider risk
                      triggers in their planning process and consider mitigation
                      techniques and accompanying costs in their project
                      specifications.{" "}
                    </li>
                    <li>
                      Presently,{" "}
                      <b>
                        the GPPB-TSO is exploring to include LCC as selection
                        criteria for bidders in procurement contracts, then
                        eventually, would become a requirement during the
                        contract implementation
                      </b>
                      . Moreover, the ongoing hearings on the RA No. 9184
                      amendment bills have also included this, as one of the
                      provisions.{" "}
                    </li>
                  </ol>
                </span>
              </td>
            </tr>
            <tr>
              {/* Keys chubaness */}
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (d){" "}
                  <b>
                    <u>Complaints Review Mechanism</u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Establishment of an independent administrative procurement
                      review body that would further improve trust in the system
                      and better competition, in line with the United Nations
                      Convention against Corruption (UNCAC) recommendations, and
                      international good practices.
                    </li>
                  </ol>
                </span>
              </td>
              {/* GPPB Updates */}
              <td
                className={`p-4 break-words max-w-[7vw] border border-black align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal block ml-5 font-sans text-justify"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      To ensure efficiency and fairness in resolving
                      procurement-related protests and disputes, it has been
                      included in the proposals to amend RA No. 9184 for the
                      establishment of an independent body, within the GPPB and
                      its TSO or as a new body, much like those established
                      before the Insurance Commission (IC) or Philippine
                      Competition Commission (PCC).
                    </li>
                    <li>
                      <b>
                        The GPPB-TSO would undertake a study to determine the
                        need to establish an independent body, or even within an
                        existing office to review protests of bidders. It would
                        also be imperative to tap alternative dispute resolution
                        mechanisms to immediately address and improve trust in
                        the system.
                      </b>
                    </li>
                  </ol>
                </span>
              </td>
            </tr>
            <tr>
              {/* Keys chubaness */}
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (e){" "}
                  <b>
                    <u>Sustainable Public Procurement </u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Consider the incorporation of sustainable public
                      procurement criteria and use of Life Cycle Costing (LCC)
                      principles at all stages of the procurement cycle
                      including reference to green procurement in technical
                      specifications.
                    </li>
                  </ol>
                </span>
              </td>
              {/* GPPB Updates */}
              <td
                className={`p-4 break-words max-w-[7vw] border border-black align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal block ml-5 text-justify font-sans "
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      Updates on the Green Public Procurement Initiatives:
                      <br />
                      <ol className="list-[lower-alpha] mt-2 ml-[2.5rem]">
                        <li>
                          The GPPB has already designated the focal persons for
                          Green Public Procurement through GPPB Resolution No.
                          08-2022.{" "}
                        </li>
                        <li>
                          The first GPP Planning Workshop for Focal Persons was
                          conducted last 01 December 2022 which launched the
                          Sustainable Consumption and Production (SCP) in the
                          Philippines and Group planning on work packages:
                          Monitoring & Evaluation (M&E) System, Standard
                          Operating Procedures (SOPs), and SCP pilot projects.{" "}
                        </li>
                        <li>
                          Kick-off and Planning Workshop for the Scaling of SCP
                          in the Philippines was held on 20-22 February 2023
                          which identified all pilot agencies with product
                          categories.{" "}
                        </li>
                      </ol>
                    </li>
                    <li>
                      For the next step, the GPPB-TSO recommends that the pilot
                      agencies for the identified GPP product categories be
                      recognized and would implement the same to come up with
                      the green specifications and toolkits. This would pave the
                      way for developing future GPP training modules.
                    </li>
                  </ol>
                </span>
              </td>
            </tr>

            <tr>
              {/* Keys chubaness */}
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (f){" "}
                  <b>
                    <u>
                      Strategy and enabling environment for professionalization
                      of procurement function{" "}
                    </u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Update the strategy and the roadmap for public procurement
                      professionalization to provide an enabling environment for
                      informed use of well-documented discretion by procurement
                      professionals to get results and improve service delivery.
                    </li>
                  </ol>
                </span>
              </td>
              {/* GPPB Updates */}
              <td
                className={`p-4 break-words max-w-[7vw] border border-black align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal block ml-5 text-justify font-sans"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      Through the initiatives of the Capacity Development
                      Division of the GPPB-TSO, the following are currently the
                      professionalization programs available for PEs and
                      procurement practitioners alike:
                      <br />
                      <ol className="list-[lower-alpha] mt-2 ml-[2.5rem]">
                        <li>
                          Conduct of Public Procurement Specialist Certification
                          Course in partnership with SUCs and moving forward, to
                          include Private Higher Educational Institutions (HEIs)
                        </li>
                        <li>
                          Annual Conduct of Digital Learning Series (3 levels)
                          for public procurement practitioners.
                        </li>
                        <li>
                          Periodic Knowledge and Skills Enhancement
                          Training-Workshop for GPPB Recognized Trainers
                        </li>
                      </ol>
                    </li>
                    <li>
                      Additionally, the GPPB-TSO is actively engaging private
                      organizations and higher education institutions to
                      establish collaborative partnerships for the provision of
                      Certification courses in the field of public procurement.
                    </li>
                    <li>
                      On a different note, with the ongoing proposals to amend
                      RA No. 9184, it is recommended to continue support
                      including the establishment of a Procurement Management
                      Institute that would pave the way for the future
                      professionalization of procurement practitioners, in
                      coordination with the Professional Regulatory Commission.{" "}
                    </li>
                    <li>
                      <b>
                        The GPPB-TSO recommends laying the groundwork for
                        professionalizing procurement practitioners by defining
                        job levels for them and then establishing a code of
                        conduct and ethical standards for government
                        procurement.{" "}
                      </b>
                    </li>
                  </ol>
                </span>
              </td>
            </tr>

            <tr>
              {/* Keys chubaness */}
              <td
                className={`p-4 border h-full border-black w-[20vw] break-words align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal font-sans block ml-3 text-justify"
                >
                  (g){" "}
                  <b>
                    <u>E-procurement system</u>
                  </b>
                  <ol className="list-[lower-roman] ml-10 ">
                    <li>
                      Consider ways to further strengthen the effectiveness of
                      GPPB-TSO as a regulatory and normative organization to
                      lead the procurement reform at the country level with all
                      required resources and technology support, especially
                      PhilGEPS.
                    </li>
                    <li>
                      The current procurement data are not validated against any
                      budget or financial management system.{" "}
                    </li>
                    <li>
                      The current information in PhilGEPS is insufficient to
                      provide input to substantiate measurements of GDP or
                      government expenditure.{" "}
                    </li>
                    <li>
                      Absence of an integrated system from budgeting to
                      recording of transactions in procurement process and
                      contract management and payment of invoices{" "}
                    </li>
                  </ol>
                </span>
              </td>
              {/* GPPB Updates */}
              <td
                className={`p-4 break-words max-w-[7vw] border border-black align-top`}
              >
                <span
                  color="blue-gray"
                  className="font-normal block ml-5 text-justify font-sans"
                >
                  <ol className="list-[decimal] flex flex-col gap-2">
                    <li>
                      The GPPB has already approved the conditional pioneer
                      implementation of the Electronic Bidding (e-Bidding)
                      Facility in the mPhilGEPS through GPPB Resolution No.
                      10-2022 as well as the approval of the revised e-Bidding
                      Guidelines through GPPB Resolution No. 12-2022.
                    </li>
                    <li>
                      However, it must be noted that there have been a couple of
                      legislative proposals to centralize E-Governance and
                      E-Commerce programs, including government procurement.
                    </li>
                    <li>
                      In line with this, the GPPB-TSO recommends the periodic
                      update of the implementation plan of the mPhilGEPS to
                      synchronize legislative efforts in creating a centralized
                      system of E-Governance and E-Commerce.
                    </li>
                    <li>
                      Also, in the interest of ensuring the full implementation
                      of the mPhilGEPS Facility to all PEs, the GPPB-TSO
                      recommends confirming with the DICT and PhilGEPS:
                      <ol className="list-[lower-alpha] mt-2 ml-[2.5rem]">
                        <li>ICT infrastructure readiness of all PEs; and </li>
                        <li>
                          Information dissemination programs to all prospective
                          bidders.{" "}
                        </li>
                      </ol>
                    </li>
                  </ol>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <Typography className="text-justify mt-5">
          {" "}
          &nbsp; &nbsp; &nbsp; The GPPB and its TSO, in collaboration with the
          WB and ADB, officially launched the MAPS Final Assessment Report on 26
          September 2023 at the Shangri-la Plaza, Mandaluyong City. During the
          launching, the priority recommendations in the MAPS Final Assessment
          Report were presented, wherein the MAPS Steering Committee and invited
          stakeholders from various stakeholders and development partners had
          the opportunity to offer valuable comments and insights that may serve
          as a guide to the GPPB in formulating strategies and policies to
          enhance the country&apos;s procurement system and meet the
          government&apos;s evolving needs.
        </Typography>

        <Typography className="text-justify mt-2 ">
          {" "}
          &nbsp; &nbsp; &nbsp; The recommendations in the MAPS Final Assessment
          Report were used as guidance and adopted in the recommendations of the
          GPPB and its TSO in the amendments of RA No. 9184.
        </Typography>

        <Typography>
          <Link
            href="/MAPS-Assessment-report-philippines-volumeI.pdf"
            target="__blank"
            className="ml-1 text-blue-800 underline font-semibold tracking-wide"
          >
            Referrence Link
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
