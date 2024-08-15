"use client";

import LoadingScreen from "@/components/loading/loading";
import truncateString from "@/utils/truncate_string";
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
      {loading ? <LoadingScreen /> : null}
      <Card className="relative shadow-none p-2 md:p-7 m-3 w-full max-w-[65rem] min-h-[120vh] md:min-h-[54vh] rounded-none flex flex-col gap-2">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl  h-full  flex-none shadow-lg "
        ></Carousel>
        <Typography variant="h4" className="font-sans text-center uppercase">
          NGPA Related News{" "}
        </Typography>
        <Typography className=" text-justify font-semibold mt-2">
          List of related news about the House and Senate Hearings for NGPA
          microsite:
        </Typography>

        <Typography className="text-justify ml-3 mt-1  break-words text-wrap max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">1.</span> Ceremonial Signing of the New
          Government Procurement Act and Anti-Financial Account Scamming Act.{" "}
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className="inline text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=WngCZStGKvo&t=2s&pp=ygU2UGxlbmFyeSBIZWFyaW5nIG9uIHRoZSBIb3VzZSBCaWxsIEFtZW5kaW5nIFJBIE5vLiA5MTg0"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=WngCZStGKvo&t=2s&pp=ygU2UGxlbmFyeSBIZWFyaW5nIG9uIHRoZSBIb3VzZSBCaWxsIEFtZW5kaW5nIFJBIE5vLiA5MTg0",
              70
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3  text-wrap max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">2.</span> The New Government Procurement Act:
          Greatest reform to combat graft and corruption in recent history BY
          AMENAH F. PANGANDAMAN, DBM SECRETARY. <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://mb.com.ph/2024/7/24/the-new-government-procurement-act-greatest-reform-to-combat-graft-and-corruption-in-recent-history?fbclid=IwY2xjawEPzD5leHRuA2FlbQIxMAABHU47KU-qL7E347d5NaquCSBJeMR8YGD1_XLWCmjZawMUaHYLPLlCyiQ5gQ_aem_Zu9vPbOLnHgwU6RTGcBvlQ"
            }
            target="_blank"
          >
            {truncateString(
              "https://mb.com.ph/2024/7/24/the-new-government-procurement-act-greatest-reform-to-combat-graft-and-corruption-in-recent-history?fbclid=IwY2xjawEPzD5leHRuA2FlbQIxMAABHU47KU-qL7E347d5NaquCSBJeMR8YGD1_XLWCmjZawMUaHYLPLlCyiQ5gQ_aem_Zu9vPbOLnHgwU6RTGcBvlQ  ",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 text-warp break-words max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">3.</span> Pangandaman lauds Congress as New
          Gov’t Procurement Act inches closer to becoming a law <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://newsinfo.inquirer.net/1943736/pangandaman-lauds-congress-as-new-govt-procurement-act-inches-closer-to-becoming-a-law#:~:text=Pangandaman%20lauds%20the%20leadership%20and,2593%20and%20House%20Bill%20No"
            }
            target="_blank"
          >
            {truncateString(
              "https://newsinfo.inquirer.net/1943736/pangandaman-lauds-congress-as-new-govt-procurement-act-inches-closer-to-becoming-a-law#:~:text=Pangandaman%20lauds%20the%20leadership%20and,2593%20and%20House%20Bill%20No",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full break-words">
          {" "}
          <span className="mr-1">4.</span> Senate ratifies bill amending
          government procurement reform law
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.philstar.com/headlines/2024/05/25/2357731/senate-ratifies-bill-amending-government-procurement-reform-law"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.philstar.com/headlines/2024/05/25/2357731/senate-ratifies-bill-amending-government-procurement-reform-law",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">5.</span> Angara: New gov&apos;t procurement act to
          curb wastage, boost efficiency (PIA)
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={"https://www.pna.gov.ph/articles/1225469"}
            target="_blank"
          >
            {truncateString("https://www.pna.gov.ph/articles/1225469", 90)}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">6.</span> LEDAC priority bills yet to hurdle
          House, Senate | ANC
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={"https://www.youtube.com/watch?v=opsJfUxBO2k"}
            target="_blank"
          >
            {truncateString("https://www.youtube.com/watch?v=opsJfUxBO2k", 90)}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full break-words">
          {" "}
          <span className="mr-1">7.</span> 3rd LEDAC Meeting
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=oKBNVXLBrgs&pp=ygUVTEVEQUMgcHJvY3VyZW1lbnQgbGF3"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=oKBNVXLBrgs&pp=ygUVTEVEQUMgcHJvY3VyZW1lbnQgbGF3",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full break-words">
          {" "}
          <span className="mr-1">8.</span> Committee on Finance (17 October 2023)
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=n1MnhgEoBS8&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=n1MnhgEoBS8&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">9.</span>  PCO Press Briefing with DBM, PS-DBM & GPPB 08/22/2023 
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=fnTXjcDoHVA"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=fnTXjcDoHVA",
              90
            )}
          </Link>
        </Typography>

        
        <Typography className="text-justify ml-3 max-w-[80vw] md:max-w-full break-words">
          {" "}
          <span className="mr-1">10.</span>  Senate committee on finance holds hearing | ABS-CBN News
          <br />
          <span className="inline-block mr-1">Link:</span>
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=AOi84wDxpl0&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=AOi84wDxpl0&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D",
              90
            )}
          </Link>
        </Typography>

        <Typography className="text-justify ml-3 break-words max-w-[80vw] md:max-w-full">
          {" "}
          <span className="mr-1">11.</span>  
          <Link
            className=" text-justify text-blue-800 font-semibold hover:text-blue-400"
            href={
              "https://www.youtube.com/watch?v=AOi84wDxpl0&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D"
            }
            target="_blank"
          >
            {truncateString(
              "https://www.youtube.com/watch?v=AOi84wDxpl0&pp=ygUoY29tbWl0dGVlIG9uIGZpbmFjZSBoZWFyaW5nIDIwMjMgb2N0b2Jlcg%3D%3D",
              90
            )}
          </Link>
        </Typography>
        
        
      
        <Typography className=" text-justify ml-3 mt-5 max-w-[80vw] md:max-w-full break-words">
          {" "}
          <span className="font-semibold">Senate tackles New Government Procurement Act:</span> Senate President Juan Miguel “Migz” F. Zubiri presides over the plenary session Tuesday, April 30, 2024 as the Senate begins to discuss Senate Bill No. 2593 or the New Government Procurement Act. The measure has been identified by the Senate President as one of the 20 priority bills the Senate hopes to finish before it adjourns sine die in May. The bill seeks to improve and modernize the two- decade old government procurement system in the country. (Bibo Nueva España/Senate PRIB) 
        </Typography>
        
       <Image width={550} height={500} src={'/migz.png'} className="ml-3 drop-shadow-md shadow-sm"/>
   
      </Card>
    </div>
  );
}
