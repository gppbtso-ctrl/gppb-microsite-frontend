"use client";

import useLoading from "@/utils/use-loading";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function LegalNotice() {
  const loading = useLoading(1200);
  return (
    <div className="relative flex justify-center items-center z-10">
      <Card className="relative p-10 py-5 -mb-10 max-w-4xl rounded-none flex shadow-none flex-col gap-3">
        <Typography
          variant="h5"
          className="font-sans text-center font-extrabold drop-shadow-sm"
        >
          Legal Notice
        </Typography>
        <Typography className=" text-justify">
          This Legal Notice indicates the specific data privacy and protection
          measures for the use of the NGPA Microsite of the GPPB-TSO, as well as
          the Terms of Use for accessing information herein.
        </Typography>
        <Typography className=" text-justify">
          <span className="block font-semibold underline">
            Data Privacy and Protection Measures
          </span>{" "}
          These measures establish your rights and responsibilities regarding
          the use of this NGPA Microsite, in compliance with the Philippine Data
          Privacy Act of 2012 (Republic Act No. 10173). Link:{" "}
          <Link href={"#"} className="text-blue-500 underline">
            {" "}
            https://privacy.gov.ph/data-privacy-act/
          </Link>
        </Typography>

        <span className=" text-justify font-sans">
          <span className="block font-bold">
            1. Collection and Use of Personal Data
          </span>{" "}
          The NGPA Microsite collects personal data during the registration
          process, including your name, email address, organization, and any
          additional information provided in your profile. This data is used to:
          <ul className="list-[disc] ml-12 mt-2">
            <li>
              Facilitate participation in discussions and committee activities.{" "}
            </li>
            <li>
              Send notifications about committee meetings, discussions, and
              other relevant activities.{" "}
            </li>
            <li>Improve user experience and site functionality. </li>
          </ul>
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">
            2. Data Sharing and Disclosure
          </span>{" "}
          Your personal data will only be shared with authorized personnel
          within the GPPB-TSO and relevant committee members. It will not be
          disclosed to third parties without your explicit consent, unless
          required by law.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">
            3. Data Sharing and Disclosure
          </span>{" "}
          We employ appropriate security measures to protect your personal data
          from unauthorized access, disclosure, alteration, and destruction.
          However, please be aware that no method of transmission over the
          Internet or method of electronic storage is completely secure.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">4. Data Security</span> Your
          personal data will be retained for as long as necessary to fulfill the
          purposes outlined in this Legal Notice, or as required by law.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">5. User Rights</span> In accordance
          with the Philippines National Privacy Act, you have the right to:
          <ul className="list-[disc] ml-12 mt-2">
            <li>Access your personal data.</li>
            <li>Request correction of any inaccurate or incomplete data.</li>
            <li>Object to or restrict the processing of your data. </li>
            <li>
              Request deletion of your data, subject to legal obligations.{" "}
            </li>
          </ul>
          <span className="mt-2 block">
            To exercise these rights, please contact{" "}
            <Link className="text-blue-600 underline" href={"ngpa@gppb.gov.ph"}>
              ngpa@gppb.gov.ph
            </Link>
            .
          </span>
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold underline">Terms of Use</span> These
          terms govern your access to and use of the NGPA Microsite, including
          any content, functionality, and services offered on or through the
          site.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">1. Acceptance of Terms</span> By
          accessing and using the NGPA Microsite, you agree to comply with and
          be bound by this Legal Notice and our Terms of Use. If you do not
          agree, please refrain from using the site.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">2. Intellectual Property </span>All
          content on the NGPA Microsite, including text, graphics, logos, and
          documents, is the property of GPPB-TSO and is protected by
          intellectual property laws. Unauthorized use or reproduction is
          prohibited.
        </span>

        <span className=" text-justify font-sans">
          <span className="block font-bold">3. User Conduct </span>Users are
          expected to use the NGPA Microsite responsibly and respectfully. Any
          form of abusive, defamatory, or illegal activity is strictly
          prohibited and may result in deletion of such comments or entries as
          well as termination of access.
        </span>
      </Card>
    </div>
  );
}
