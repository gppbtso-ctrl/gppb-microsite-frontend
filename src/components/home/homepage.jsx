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
      gsap.from(".parralaxImage", {
        yPercent: 50,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '.parralaxImage',
          start: "top bottom", // Adjust this as needed
          end: "bottom top",   // Adjust this as needed
          scrub: true,     
          markers:true    // Makes the animation link to the scroll position
        },
      });

    },
    { scope: containerAbout }
  ); //


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
          yPercent: 100,
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
      <MainNavbar  isHomePage={true}/>
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
                <Typography className="absolute text-4xl lg:text-7xl text-left font-hanken-grotesk font-medium uppercase animText drop-shadow-sm">
                  Welcome To The
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem] w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-hanken-grotesk font-medium uppercase animText">
                  New Government
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-hanken-grotesk font-medium uppercase animText">
                  Procurement Act
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-7xl text-left  font-hanken-grotesk font-medium uppercase animText">
                  (NGPA) Microsite
                </Typography>
              </div>

              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="absolute text-4xl lg:text-6xl text-left  font-normal font-anonymous-pro  animText">
                  Republic Act No.12009
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
            class="relative flex flex-row justify-center  shadow-lg h-full  text-black  bg-white bg-blend-overlay "
          >
            <Image width={500} height={500} src={'/hor-pic2.jpg'} className="absolute top-[50rem] left-[10rem] rounded-md drop-shadow-md opacity-25 parralaxImage" />
            <Image width={500} height={500} src={'/hor-pic2.jpg'} className="absolute bottom-[60vh] left-[70vw] opacity-30  parralaxImage"/>
            <div
              class="grow flex flex-col gap-1 max-w-[65rem] justify-start m-10 mt-[8rem] mx- w-full"
              ref={aboutSection}
            >
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl  lg:text-5xl text-center font-normal uppercase">
                  The New Government
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl   lg:text-5xl text-center font-normal uppercase">
                  Procurement Act 
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl   lg:text-5xl text-center font-normal uppercase">
                 (NGPA) Microsite
                </Typography>
              </div>
              <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
                <Typography className="animText text-3xl   lg:text-4xl text-center font-normal font-anonymous-pro ">
                Republic Act No. 12009
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
         <FooterWithSocialLinks/>
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
