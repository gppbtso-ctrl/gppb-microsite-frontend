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
import { faCalendar, faChevronCircleUp, faChevronDown, faEnvelope, faPhone, faUpDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
gsap.registerPlugin(ScrollTrigger);

export default function CommitteeLayout({ children }) {
  const container = useRef();
  const containerAbout = useRef();
  const aboutSection = useRef();
  const scrollDown = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const arrowTl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom 55%",
            toggleActions: "play reverse play play",
      
          },
        })
        .from(".animText", {
          yPercent: 150,
          skewY: 6,
          duration: 0.5,
          ease: "power4.out",

          stagger: {
            amount: 0.3,
          },
        })
        .from(".animButton", {
          y: 50,
          ease: "power.out",
        });
    },
    { scope: container }
  ); // <-- magic

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerAbout.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
      });
    },

    { scope: containerAbout }
  );

  useGSAP(
    () => {
      arrowTl.current = gsap
      .timeline({repeat:-1})
      .to('.animateScrollButton',{ y: '12', ease: 'power1', duration:0.4 })
      .to('.animateScrollButton',{ y: '0', ease: 'power1.out', duration:0.2 })
      .to('.animateScrollButton',{ y: '8', ease: 'power1', duration:0.2 })
      .to('.animateScrollButton',{ y: '0', ease: 'power1.out', duration:0.4 })
    },

    { scope: scrollDown }
  );


  useGSAP(
    () => {
      tl2.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSection.current,
            start: "top top",
            bottom: "bottom",
            toggleActions: "restart play resume reset",
           
          },
        })
        .from(".animText", {
          yPercent: 150,
          duration: 0.9,
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
    <MainNavbar/>
    <div className="relative min-h-screen">
      <section class="relative flex flex-col min-h-screen bg-slate-800 text-white  bg-blend-overlay  bg-cover  bg-[url('/Home.png')] z-10">
        <div class="flex-1  flex items-center">
          <div
            ref={container}
            class="text-center justify-start w-full max-w-[45.5rem] mx-5 lg:mx-[5vw] flex flex-col space-y-5"
          >
            <div className="h-[2rem] lg:h-[4rem] w-[100%] relative overflow-hidden">
              <Typography className="absolute text-4xl lg:text-7xl text-left font-sans uppercase animText">
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
                (NGPA) Microsite
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
        <div className="absolute bottom-2 left-[50%] -translate-x-1/2  mx-auto flex flex-col items-center mb-5" ref={scrollDown}>
        <FontAwesomeIcon className="text-[3.2rem] animateScrollButton" icon={faChevronDown} />
        </div>
      </section>
      <div className="absolute w-full  h-full top-10 z-0">
        <section
          ref={containerAbout}
          class=" flex flex-row justify-center  shadow-lg min-h-[200vh]  text-white  bg-gradient-to-b from-light-blue-900 to-[#0C2D48] bg-blend-overlay "
        >
          <div
            class="grow flex flex-col gap-2 max-w-[65rem] justify-start m-10 mt-[25rem] mx- w-full"
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
            <div className="h-fit w-[100%] mt-5 relative overflow-hidden ">
              <Typography className="text-lg tracking-wide antialiased font-sans mt-5 text-justify descriptionText ">
              The New Government Procurement Act (NGPA) Microsite is dedicated to providing comprehensive information and updates
                on the implementation of the NGPA, a legislative milestone aimed
                at modernizing and improving the government procurement process
                in the Philippines.
              </Typography>
              <Typography className="text-lg tracking-wide antialiased  font-sans mt-6 text-justify descriptionText ">
                This platform serves as a central hub for all stakeholders
                involved in public procurement, including government officials,
                private sector representatives, and the general public.
              </Typography>
              <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                The NGPA Microsite is established in accordance with Government
                Procurement Policy Board (GPPB) Resolution No. 04-2024, dated 7
                June 2024. This Resolution approves the creation of specific
                committees to formulate the necessary rules and regulations for
                the effective implementation of the provisions of the NGPA upon
                its enactment.
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
                  Recognizing the need to address gaps and challenges in RA No.
                  9184, the GPPB initiated a comprehensive assessment of the
                  current procurement system from 2019 to 2021, using the global
                  standards of the Methodology for Assessing Procurement Systems
                  which was undertaken with technical assistance from the World
                  Bank and Asian Development Bank.{" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                  Following extensive consultations and legislative processes,
                  House Bill No. 9648 and Senate Bill No. 2593, known as the New
                  Government Procurement Act (NGPA), were approved and are now
                  awaiting the President&apos;s signature.
                </li>
              </ul>
              <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                The GPPB&apos;s 2nd Regular Meeting on June 7, 2024, approved the
                creation of specific committees to draft the rules and
                regulations necessary for the NGPA&apos;s implementation.
              </Typography>

              <Typography className="text-lg  tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                The Resolution emphasizes the principles of transparency,
                competitiveness, efficiency, accountability, and sustainability
                in government procurement and introduces key enhancements,
                including electronic procurement systems, procurement data
                analytics, and new evaluation criteria.
              </Typography>
              <Typography className="text-lg  tracking-wide antialiased font-sans mt-5  text-justify descriptionText ">
                For easy reference, the GPPB Resolution No. 04-2024 can be found
                here: XXX
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
                  associated issuances, and other relevant documents related to
                  NGPA.{" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                  <b>Activity Calendar:</b> Keep track of upcoming committee
                  meetings, stakeholder consultations, and other events related
                  to the NGPA.
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                  <b>Feedback Portal:</b> Provide your inputs and suggestions to
                  help in the formulation of the necessary rules and regulations
                  of the NGPA in order to shape the future of government
                  procurement in the Philippines.
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                  <b>Latest News and Updates:</b> Stay informed about the newest
                  developments in the NGPA implementation process as they
                  unfold.{" "}
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
                  <b>Create an Account:</b> Click on the Register button at
                  the top right corner of the homepage and fill in the required
                  information, including your name, email address, and
                  organization.{" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                  <b>Verify Your Email:</b> After registration, you will receive
                  a verification email. Click on the link provided to verify
                  your email address.{" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                  <b> Complete Your Profile:</b> Once your email is verified,
                  log in to your account and complete your profile by providing
                  additional details such as your expertise and areas of
                  interest.{" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                  <b>Join Committees:</b> Browse through each Committee and
                  select a maximum of three (3) Committees that you are
                  interested in joining. You can apply to become a member by
                  providing a brief statement of your qualifications and
                  contributions you can offer.
                </li>
                <li className="text-lg tracking-wide antialiased font-sans mt-1 text-justify descriptionText ">
                <b>Stay Engaged:</b> After joining, you will receive notifications about committee meetings, discussions, and other relevant activities. Participate actively to contribute to the formulation of the NGPA rules and regulations. 
                </li>
              </ol>
              <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText">
                For any questions or assistance during the registration process,
                please contact our support team at ngpa@gppb.gov.ph or call (02) 5322-6222 (BAC).
              </Typography>
              <Typography className="text-lg tracking-wide antialiased font-sans mt-6  mb-3 text-justify descriptionText">
                Thank you for visiting the NGPA Microsite. Your participation
                and input are crucial to the success of the New Government
                Procurement Act and the continuous improvement of our nation&apos;s
                procurement system.
              </Typography>
            </div>
          </div>
        </section>
        <section class="relative flex flex-col min-h-[40vh]  bg-gradient-to-b  from-[#0C2D48] to-[#003B73] bg-blend-overlay text-white    z-10">
          <div className=" mt-[3rem] mb-2 mx-2 rounded-lg flex flex-col gap-1 border border-blue-800/15 p-10 px-14 shadow-lg backdrop-blur-md bg-gradient-to-b  from-[#0C2D48]/10 to-[#003B73]">
          <Typography className="text-xl tracking-wide antialiased font-sans uppercase">
            Government
          </Typography>
          <Typography className="text-xl tracking-wide  antialiased font-sans uppercase">
          Procurement Policy
          </Typography>
          <Typography className="text-xl tracking-wide  antialiased font-sans uppercase">
          Board - Technical 
          </Typography>
          <Typography className="text-xl tracking-wide  antialiased font-sans uppercase">
          Support Office
          </Typography>

          <Typography className="text-sm mt-2 tracking-wide  antialiased font-sans uppercase">
         GPPB-TSO Building, Commonwealth Ave, <br/>UP Diliman Campus, Quezon City
          </Typography>

          <Typography className="text-lg mt-3 tracking-wide font-light  antialiased  flex gap-2 items-center">
          <FontAwesomeIcon icon={faPhone}/> <span>(02) 5322-6222 (Bac)</span>
          </Typography>

          <Typography className="text-lg mt-1 tracking-wide font-light  antialiased  flex gap-2 items-center">
          <FontAwesomeIcon icon={faEnvelope}/>   <span>gppb@gppb.gov.ph</span>
          </Typography>

          <div className="w-fit  -ml-2 p-4 px-2  rounded-xl border border-blue-500/15 flex gap-4 mt-2 text-blue-gray-900 shadow-lg">
          <Typography
            as="a"
            href="https://www.facebook.com/GovtProcurementPH"
            className="opacity-80 text-white text-xl transition-opacity hover:opacity-100"
          >
            <svg
              className="h-7 w-7"
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
           className="opacity-80 text-white text-xl transition-opacity hover:opacity-100"
          >
            <svg
              className="h-7 w-7"
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
      <ScrollToTop smooth className=" !bg-transparent !shadow-none ml-[10rem]" component={<p className="text-[2.5rem] ml-5 mt-5 lg:ml-0 lg:mt-0 text-white"><FontAwesomeIcon icon={faChevronCircleUp}/></p>} />
    </div>
    
    </>);
}
