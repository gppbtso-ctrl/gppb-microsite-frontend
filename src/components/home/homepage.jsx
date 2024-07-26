"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronCircleUp,
  faChevronDown,
  faEnvelope,
  faPhone,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Image from "next/image";

import { useWindowSize } from "@uidotdev/usehooks";
gsap.registerPlugin(ScrollTrigger);

export default function HomePageComponent() {
  const size = useWindowSize();
  const container = useRef();
  const containerAbout = useRef();
  const aboutSection = useRef();
  const scrollDown = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const arrowTl = useRef();

  useGSAP(
    () => {
      gsap.from(".animText", {
        yPercent: 150,
        skewY: 6,
        duration: 0.5,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });

      let getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);
      gsap.fromTo(
        ".bgAnimate",
        { backgroundPosition: `50% 0px` },
        {
          backgroundPosition: `50% ${
            -window.innerHeight * getRatio(container.current)
          }px`,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: container }
  ); // <-- magic

  useGSAP(
    () => {
      arrowTl.current = gsap
        .timeline({ repeat: -1 })
        .to(".animateScrollButton", { y: "12", ease: "power1", duration: 0.4 })
        .to(".animateScrollButton", {
          y: "0",
          ease: "power1.out",
          duration: 0.2,
        })
        .to(".animateScrollButton", { y: "8", ease: "power1", duration: 0.2 })
        .to(".animateScrollButton", {
          y: "0",
          ease: "power1.out",
          duration: 0.4,
        });
    },

    { scope: scrollDown }
  );

  useGSAP(
    () => {
      tl2.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSection.current,

            start: "top 55%",
            bottom: "bottom ",
          },
        })
        .from(".animText", {
          yPercent: 150,
          duration: 0.5,
          skewy: 6,
          ease: "power4.out",
          stagger: 0.3,
        })
        .from(".descriptionText", {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.2,
        });
    },
    { scope: aboutSection }
  );

  return (
    <>
      <MainNavbar />
      <div className="relative min-h-screen">
        <section
          class="relative flex flex-col min-h-screen bg-slate-800 text-white  bg-blend-overlay"
          ref={container}
        >
          <div
            class={`absolute top-0 left-0 flex-1  flex items-center bg-[50%_0px] bg-no-repeat bg-cover bg-fixed bg-[url('/Home.png')] z-10 w-full h-full bgAnimate`}
          >
            <div class="text-center justify-start w-full max-w-[55.5rem] mx-5 lg:mx-[5vw] flex flex-col space-y-5 ">
              <div className="h-[2rem] lg:h-[4rem] w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl font-normal text-left font-sans uppercase animText drop-shadow-sm">
                  Welcome To The
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem] w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-normal uppercase animText">
                  New Government
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-normal uppercase animText">
                  Procurement Act
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-normal uppercase animText">
                  or Republic Act 12009
                </Typography>
              </div>
              {/* <div className="relative lg:h-[3rem] overflow-hidden">
              <Link
                class="px-5 py-2 absolute left-0 w-full lg:w-full inline-block bg-cyan-500  hover:bg-cyan-400 transition-colors  animButton"
                href="/committees"
              >
                <Typography variant="h6" className="font-semibold antialiased tracking-wide  text-blue-gray-900  uppercase">Enter Site</Typography>

              </Link>
            </div> */}
            </div>
          </div>
          <div
            className="absolute bottom-2 left-[50%] -translate-x-1/2  mx-auto flex flex-col items-center mb-5 z-10"
            ref={scrollDown}
          >
            <FontAwesomeIcon
              className="text-[3.2rem] animateScrollButton"
              icon={faChevronDown}
            />
          </div>
        </section>
        <div className=" w-full  h-full top-10 z-0">
          <section
            ref={containerAbout}
            class=" flex flex-row justify-center  shadow-lg h-full  text-white  bg-gradient-to-b from-light-blue-900 to-[#0C2D48] bg-blend-overlay "
          >
            <div
              class="grow flex flex-col gap-2 max-w-[65rem] justify-start m-10 mt-[10rem] mx- w-full"
              ref={aboutSection}
            >
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl  lg:text-5xl text-center font-normal uppercase">
                  The New Government
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl   lg:text-5xl text-center font-normal uppercase">
                  Procurement Act or 
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl   lg:text-5xl text-center font-normal uppercase">
                REPUBLIC ACT 12009
                </Typography>
              </div>
              <div className="h-fit w-[100%] mt-5 relative overflow-hidden ">
                <Typography className="text-lg tracking-wide antialiased font-sans mt-5 text-justify descriptionText ">
                  The New Government Procurement Act (NGPA) Microsite is
                  dedicated to providing comprehensive information and updates
                  on the implementation of the NGPA, a legislative milestone
                  aimed at modernizing and improving the government procurement
                  process in the Philippines.
                </Typography>
                <Typography className="text-lg tracking-wide antialiased  font-sans mt-6 text-justify descriptionText ">
                  This platform serves as a central hub for all stakeholders
                  involved in public procurement, including government
                  officials, private sector representatives, and the general
                  public.
                </Typography>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                  The NGPA Microsite was developed pursuant to Government
                  Procurement Policy Board (GPPB) Resolution No. 04-2024, dated
                  7 June 2024. This Resolution approves the creation of specific
                  committees to formulate the necessary rules and regulations
                  for the effective implementation of the provisions of the NGPA
                  upon its enactment.
                </Typography>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-7 text-justify descriptionText ">
                  Key highlights from the Resolution include:
                </Typography>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                  className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
                >
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    The GPPB has been established under Republic Act (RA) No.
                    9184, also known as the Government Procurement Reform Act,
                    which took effect on January 26, 2003, with its revised
                    Implementing Rules and Regulations (IRR) taking effect on
                    October 28, 2016.{" "}
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    The GPPB, assisted by its Technical Support Office (TSO), is
                    mandated to oversee public procurement in the Philippines,
                    particularly formulation of procurement policies,
                    professionalization of public procurement, and performance
                    monitoring of procuring entities.{" "}
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    Recognizing the need to address gaps and challenges in RA
                    No. 9184, the GPPB initiated a comprehensive assessment of
                    the current procurement system from 2019 to 2021, using the
                    global standards of the Methodology for Assessing
                    Procurement Systems which was undertaken with technical
                    assistance from the World Bank and Asian Development Bank.{" "}
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    Following extensive consultations and legislative processes,
                    House Bill No. 9648 and Senate Bill No. 2593, known as the
                    New Government Procurement Act (NGPA), were approved and are
                    now awaiting the President&apos;s signature.
                  </li>
                </ul>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                  The GPPB&apos;s 2nd Regular Meeting on June 7, 2024, approved
                  the creation of specific committees to draft the rules and
                  regulations necessary for the NGPA&apos;s implementation.
                </Typography>

                <Typography className="text-lg  tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                  The Resolution emphasizes the principles of transparency,
                  competitiveness, efficiency, accountability, and
                  sustainability in government procurement and introduces key
                  enhancements, including electronic procurement systems,
                  procurement data analytics, and new evaluation criteria.
                </Typography>
                <Typography className="text-lg  tracking-wide antialiased font-sans mt-5  text-justify descriptionText ">
                  For easy reference, the GPPB Resolution No. 04-2024 can be
                  found here: XXX
                </Typography>

                <Typography className="text-lg tracking-wide antialiased font-sans mt-5 mb-3 text-justify descriptionText underline ">
                  Main Features of the Microsite
                </Typography>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                  className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
                >
                  <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                    <b>Committee Information:</b> Learn about the various
                    committees formed to draft the rules and regulations for the
                    NGPA.
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                    <b>Resource Library:</b> Access the matrix of provisions,
                    associated issuances, and other relevant documents related
                    to NGPA.{" "}
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                    <b>Activity Calendar:</b> Keep track of upcoming committee
                    meetings, stakeholder consultations, and other events
                    related to the NGPA.
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                    <b>Feedback Portal:</b> Provide your inputs and suggestions
                    to help in the formulation of the necessary rules and
                    regulations of the NGPA in order to shape the future of
                    government procurement in the Philippines.
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                    <b>Latest News and Updates:</b> Stay informed about the
                    newest developments in the NGPA implementation process as
                    they unfold.{" "}
                  </li>
                </ul>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-5 mb-3 text-justify descriptionText underline ">
                  Registration Procedures
                </Typography>

                <Typography className="text-lg tracking-wide antialiased font-sans mt-5.5  text-justify descriptionText">
                  To participate in the discussions and contribute to the NGPA
                  implementation, please follow these registration steps:
                </Typography>

                <ol
                  style={{
                    listStyleType: "decimal",
                  }}
                  className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
                >
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    <b>Create an Account:</b> Click on the &quot;Register&quot; button at
                    the top right corner of the homepage and fill in the
                    required information, including your name, email address,
                    and organization.
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    <b>Select Committees:</b> Browse through each Committee and
                    select a maximum of three (3) Committees that you are
                    interested in joining. You can apply to become a member by
                    providing a brief statement of your qualifications and
                    contributions you can offer.
                  </li>
                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    <b> Verify Your Email:</b> After registration, you will
                    receive a verification email. Click on the link provided to
                    verify your registered email address.
                  </li>

                  <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                    <b>Stay Engaged:</b> After joining, you will receive
                    notifications about committee meetings, discussions, and
                    other relevant activities. Participate actively to
                    contribute to the formulation of the NGPA rules and
                    regulations by posting comments on the posted provisions
                    under your selected committees.
                  </li>
                </ol>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText">
                  For any questions or assistance during the registration
                  process, please contact our support team at ngpa@gppb.gov.ph
                  or call (02) 5322-6222 (BAC).
                </Typography>
                <Typography className="text-lg tracking-wide antialiased font-sans mt-6  mb-3 text-justify descriptionText">
                  Thank you for visiting the NGPA Microsite. Your participation
                  and input are crucial to the success of the New Government
                  Procurement Act and the continuous improvement of our
                  nation&apos;s procurement system.
                </Typography>
              </div>
            </div>
          </section>
          <section class="relative flex flex-col h-fit  bg-gradient-to-b  from-[#0C2D48] to-[#003B73] bg-blend-overlay text-white  -mt-1  z-0">
            <div className="w-full mt-[3rem]  rounded-lg flex flex-col sm:flex-col md:flex-row gap-1 justify-between   p-2 px-[4rem]  backdrop-blur-md bg-gradient-to-b  from-[#0C2D48]/10 to-[#003B73]">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <Typography className="text-xl tracking-wide text-center antialiased font-sans uppercase">
                  Government Procurement
                </Typography>
                <Typography className="text-xl tracking-wide text-center antialiased font-sans uppercase">
                  Policy Board - Technical
                </Typography>
                <Typography className="text-xl tracking-wide text-center antialiased font-sans uppercase">
                  Support Office
                </Typography>

                <Typography className="text-sm mt-2 text-center lg:text-left tracking-wide  antialiased font-sans uppercase">
                  GPPB-TSO Building, Commonwealth Ave, <br />
                  UP Diliman Campus, Quezon City
                </Typography>

                <Typography
                  as={"a"}
                  href="/legal-notice"
                  className=" text-lg mt-2 tracking-wide font-light hover:text-blue-400 antialiased text-white underline cursor-pointer text-center md:text-left drop-shadow-xl"
                >
                  <span>Legal Notice Disclaimer</span>
                </Typography>

                <Typography className="text-lg mt-3 tracking-wide font-light  antialiased  flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <span>(02) 5322-6222 (Bac)</span>
                </Typography>

                <Typography className="text-lg mt-1 tracking-wide font-light  antialiased  flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <span>gppb@gppb.gov.ph</span>
                </Typography>
              </div>

              <div className=" flex  border-black flex-col  justify-end items-center pt-1 md:pt-3 mt-0 md:mt-[4rem] ">
                <div className=" mb-2 items-center drop-shadow-lg mr-5">
                  <Image
                    src={"/Logo Watermark 2024 - NGPA.png"}
                    width={300}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className=" flex ml-[3.8rem] mr-[5.2rem] drop-shadow-md border-0 border-t-[1px] border-white flex-col items-center justify-center py-3 md:flex-row md:justify-between">
              <Typography
                variant="small"
                className=" text-center font-[500] text-white antialiased drop-shadow-md mb-1 md:mb-0"
              >
                &copy; {new Date().getFullYear()}{" "}
                <a href="https://www.gppb.gov.ph/" className="">
                  GPPB-TSO
                </a>
                . All Rights Reserved.
              </Typography>

              <div className="flex gap-4 items-center  text-blue-gray-900 sm:justify-center">
                <Typography
                  as="a"
                  className=" antialiased text-white drop-shadow-md transition-opacity hover:opacity-100 hover:text-blue-gray-100"
                  href="https://www.gppb.gov.ph/"
                >
                  <svg
                    fill="currentColor"
                    version="1.1"
                    viewBox="0 0 46.748 46.748"
                    className="h-5 w-5"
                  >
                    <g>
                      <path d="M23.374,0c-4.232,0-8.197,1.13-11.621,3.097l1.152,0.687h3.729l1.267,0.94l0.402,0.031l0.951-0.961l1.051,0.035   l1.396,0.208l0.88,0.445l9.404,0.485l2.578,1.091L34.2,6.367l-1.911-0.309l-0.03,0.37l0.698,0.481l-0.91,0.182v0.546l-1.881,0.122   l1.426,1.334l0.242,1.092l-0.64,0.333l-2-1.637V8.122l0.484-0.758l-0.363-0.455L27.13,8.365l-1.729-0.152l-0.576-0.424   l-0.729,1.032l0.334,0.667l2.518,0.303l1.011,1.153l-0.253,0.334l-0.787-0.79l-0.365,0.394l0.617,0.813l-0.133,1.528l-1.616-0.002   l-0.081,1.233l1.365,0.829l0.475,0.627l-0.718,0.192l-2.548-1.942h-0.819l0.03,1.578l1.852,1.941l0.142,1.407l-0.933,0.777   l-2.121,0.759l0.211,0.789l-0.386,0.273l-0.433-0.667l0.061-0.516l-0.758-0.243l-0.426,0.576l0.06,1.093l1.496,1.204l0.15,0.909   l-0.905,0.603l-0.689-0.072l-1.234-1.4l-0.242,0.973l2.336,3.336l-0.152,0.484l-2.883-2.76v-2.791l-2.183-1.941l-1.74-0.167   l-0.987,0.368l-0.611,1.315l-0.325,2.443l-0.591,0.856l-0.593-0.138L9.407,22.13l0.107-1.114v-0.819L8.676,19.67l-3.58-0.585   l-1.65-0.081l-1.444-0.83L1.9,17.303H1.214c0,0-0.02,1.195-0.02,1.26s3.115,1.533,3.115,1.533l0.888,0.116l0.015,0.667   l-0.833,0.546l-2.661,1.927l-1.274,0.082l-0.435-0.437c-0.001,0.126-0.008,0.251-0.008,0.377c0,0.237,0.01,0.474,0.018,0.71   l0.234,0.117l2.599-0.547l0.485,0.223l-2.502,3.577l-0.403,0.385c2.085,10.772,11.561,18.909,22.942,18.909   c5.874,0,11.238-2.172,15.344-5.75l-0.336,0.148l-0.756,0.496l-2.669,1.637l-1.101,0.168v-0.5l0.358-0.295l2.104-1.496l1.313-0.182   l0.708-0.484l0.102-1.549l0.807-0.049l0.014,0.991l0.438-0.087l0.109,0.193c4.283-4.237,6.938-10.116,6.938-16.616   C46.747,10.465,36.282,0,23.374,0z M13.187,25.738l-0.92,0.343l-0.254-0.688l0.534-0.752l0.741,0.146L13.187,25.738z M30.157,27.68   l0.646,0.385l-0.052,0.705l0.677-0.018l0.729-0.385l2.608,1.184l0.101,1.404h0.547v0.466h-1.092v-1.153l-0.628,0.062l-0.588,0.626   l-1.616,0.104l-0.021-0.75h0.484l-0.02-0.365l-0.75-0.393l-1.334-0.191l-0.617-0.758L30.157,27.68z M27.28,30.938l0.049-0.281   l0.554-0.082l0.046,0.43l-0.342-0.038v0.25h-0.484v0.212h-0.471v-0.424h0.03L27.28,30.938z M26.903,30.734l-0.317-0.1v-0.219h0.409   L26.903,30.734z M26.729,27.896l0.016,1.971l-0.443,0.041v-0.667l-0.426-0.152l0.081,0.942h-0.546v-1.479h0.264l-0.014-0.238   L26.729,27.896z M26.382,30.503v0.231l-0.22,0.033v0.236h-0.304v0.189l-0.447,0.046v-0.235l0.287-0.27l0.197-0.231H26.382z    M22.043,27.2l2.116-1.147l0.281-0.25l0.233-0.631h0.365l0.121,0.623l0.25,0.104v1.998l-0.25,0.164v0.267l-0.402,0.364   l-0.228,0.576h-1.782l-0.706-0.934L22.043,27.2L22.043,27.2z M25.161,30.734v0.27h-0.486v-0.27H25.161z M20.226,30.127h0.566   v-0.203l-0.426-0.142l-2.972-3.642l0.507-0.404l2.085,1.879l-0.024,0.306l0.445,0.586l1.618-0.021l0.062,0.748L21.5,29.296   l-0.243-0.103l0.061,0.81l1.498-0.041l1.212,0.771l-3.661-0.16L20.226,30.127z M31.474,42.357l-0.85,0.47l-1.055-0.115l0.992-1.097   l0.93,0.102L31.474,42.357z M35.03,38.471l-2.871,2.7l-2.979-0.103l-0.973-2.137l-2.623,0.105l-3.236,1.111v-0.586l0.668-0.647   l0.081-3.315l1.112-0.77l0.997-0.012l1.88-2.144l1.188-0.09v0.444h0.404l0.992-1.407h1.38l1.175,0.706l-0.552,0.539l-0.655-0.135   l0.045,0.887l0.345,0.208l1.235,0.092l0.264-2.233l0.646,0.029l0.719,1.232l0.082,1.781l1.09,0.933l0.295,1.194L35.03,38.471z" />
                    </g>
                  </svg>
                </Typography>

                <Typography
                  as="a"
                  href="https://www.facebook.com/GovtProcurementPH"
                  className=" text-white antialiased drop-shadow-md text-xl transition-opacity hover:opacity-100 hover:text-blue-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>

                <Typography
                  as="a"
                  href="https://www.youtube.com/@governmentprocurementph9010"
                  className="text-white antialiased drop-shadow-md text-xl transition-opacity hover:opacity-100 hover:text-blue-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 96.875 96.875"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        d="M95.201,25.538c-1.186-5.152-5.4-8.953-10.473-9.52c-12.013-1.341-24.172-1.348-36.275-1.341
		c-12.105-0.007-24.266,0-36.279,1.341c-5.07,0.567-9.281,4.368-10.467,9.52C0.019,32.875,0,40.884,0,48.438
		C0,55.992,0,64,1.688,71.336c1.184,5.151,5.396,8.952,10.469,9.52c12.012,1.342,24.172,1.349,36.277,1.342
		c12.107,0.007,24.264,0,36.275-1.342c5.07-0.567,9.285-4.368,10.471-9.52c1.689-7.337,1.695-15.345,1.695-22.898
		C96.875,40.884,96.889,32.875,95.201,25.538z M35.936,63.474c0-10.716,0-21.32,0-32.037c10.267,5.357,20.466,10.678,30.798,16.068
		C56.434,52.847,46.23,58.136,35.936,63.474z"
                      />
                    </g>
                  </svg>
                </Typography>
              </div>
            </div>
          </section>
        </div>
        <ScrollToTop
          smooth
          className=" !bg-transparent !shadow-none ml-[10rem] z-50"
          component={
            <p className="text-[2.5rem] ml-5 mt-5 lg:ml-0 lg:mt-0 text-white">
              <FontAwesomeIcon icon={faChevronCircleUp} />
            </p>
          }
        />
      </div>
    </>
  );
}
