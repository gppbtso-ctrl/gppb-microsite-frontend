"use client";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "@/components/footer";
import { MainNavbar } from "@/components/navbar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function CommitteeLayout({ children }) {
  const container = useRef();
  const containerAbout = useRef();
  const aboutSection = useRef();
  const tl = useRef();
  const tl2 = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom 55%",
            toggleActions: "play reverse play play",
            markers: true,
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
        end: "bottom 85%",
        markers: true,
        pin: true,
      });
    },

    { scope: containerAbout }
  );

  useGSAP(
    () => {
      tl2.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSection.current,
            start: "top top",
            bottom: "bottom",
            scrub: true,
            markers: {
              startColor: "white",
              endColor: "white",
              fontSize: "18px",
              fontWeight: "bold",
              indent: 20,
            },
          },
        })
        .from(".animText", {
          yPercent: 150,
          duration: 2,
          ease: "power4.out",
          stagger: 1,
        })
        .from(".descriptionText", {
          yPercent: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 1,
        });
    },
    { scope: aboutSection }
  );

  return (
    <div className="relative min-h-screen">
      <section class="relative flex flex-col min-h-screen bg-slate-800 text-white  bg-blend-overlay  bg-cover  bg-[url('/Home.png')] z-10">
        <div class="flex-1  flex items-center">
          <div
            ref={container}
            class="text-center justify-start w-full max-w-[45.5rem] mx-5 lg:mx-[5vw] flex flex-col space-y-5"
          >
            <div className="h-[2rem] lg:h-[4rem] w-[100%] relative overflow-hidden">
              <Typography className="absolute text-4xl lg:text-7xl text-left font-normal uppercase animText">
                Welcome
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
            <div className="relative lg:h-[3rem] overflow-hidden">
              <a
                class="px-5 py-2 absolute left-0 w-full lg:w-full inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors  animButton"
                href=""
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute w-full  h-full top-10 z-0">
        <section
          ref={containerAbout}
          class=" flex flex-row justify-center  min-h-[200vh] bg-slate-800 text-white bg-light-blue-900 bg-blend-overlay "
        >
          <div
            class="grow flex flex-col gap-2 max-w-[65rem] justify-start m-10 mt-[30rem] mx- w-full"
            ref={aboutSection}
          >
            <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
              <Typography className="animText text-3xl  lg:text-5xl text-center font-normal uppercase">
                The New Governement
              </Typography>
            </div>
            <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
              <Typography className="animText text-3xl   lg:text-5xl text-center font-normal uppercase">
                Procurement Act
              </Typography>
            </div>
            <div className="h-fit w-[100%] mt-5 relative overflow-hidden ">
              <Typography className="text-lg tracking-wide antialiased font-sans mt-5 text-justify descriptionText ">
                is dedicated to providing comprehensive information and updates
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
              <span className="text-lg tracking-wide antialiased font-sans mt-6 text-justify descriptionText ">
                Key highlights from the Resolution include:
              </span>
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
                  awaiting the President's signature.
                </li>
              </ul>
              <Typography className="text-lg tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                The GPPB's 2nd Regular Meeting on June 7, 2024, approved the
                creation of specific committees to draft the rules and
                regulations necessary for the NGPA's implementation.
              </Typography>

              <Typography className="text-lg  tracking-wide antialiased font-sans mt-6  text-justify descriptionText ">
                The Resolution emphasizes the principles of transparency,
                competitiveness, efficiency, accountability, and sustainability
                in government procurement and introduces key enhancements,
                including electronic procurement systems, procurement data
                analytics, and new evaluation criteria.
              </Typography>
              <Typography className="text-lg  tracking-wide antialiased font-sans mt-5  text-justify descriptionText ">
              For easy reference, the GPPB Resolution No. 04-2024 can be found here: XXX 
              </Typography>
              
              <Typography className="text-lg tracking-wide antialiased font-sans mt-5  text-justify descriptionText underline ">
              Main Features of the Microsite 
              </Typography>
              <ul
                style={{
                  listStyleType: "disc",
                }}
                className=" list-inside ml-5 flex flex-col gap-2 font-sans text-justify"
              >
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                <b>Committee Information:</b> Learn about the various committees formed to draft the rules and regulations for the NGPA. 
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                <b>Resource Library:</b> Access the matrix of provisions, associated issuances, and other relevant documents related to NGPA. {" "}
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                <b>Activity Calendar:</b> Keep track of upcoming committee meetings, stakeholder consultations, and other events related to the NGPA. 
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                <b>Feedback Portal:</b> Provide your inputs and suggestions to help in the formulation of the necessary rules and regulations of the NGPA in order to shape the future of government procurement in the Philippines. 
                </li>
                <li className="text-lg tracking-wide antialiased font-sans  text-justify descriptionText ">
                <b>Latest News and Updates:</b> Stay informed about the newest developments in the NGPA implementation process as they unfold.                 </li>
              </ul>
   

 


        
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
