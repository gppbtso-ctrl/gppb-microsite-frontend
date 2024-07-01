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
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
      .timeline({ 
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom 55%",
          toggleActions: "play reverse play play",
          markers:true,
      
        }})
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
        y:50,
        ease: "power.out",
      })
    },
    { scope: container }
  ); // <-- magic

  useGSAP(
    () => {
      tl.current = gsap
      .timeline({ 
        scrollTrigger: {
          trigger: containerAbout.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play play",
          markers:true,
      
        }})
      .from(".animText", {
        yPercent: 150,
        skewY: 6,
        duration: 0.5,
        ease: "power4.out",
        scrub:true,
        stagger: {
          amount: 0.3,
        },
      })
    },
    { scope: containerAbout }
  ); // <-- magic

  return (
    <>
      <section class="flex flex-col min-h-screen bg-slate-800 text-white  bg-blend-overlay  bg-cover  bg-[url('/Home.png')]">
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
      <section class="flex flex-row  min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-[url('/Contact_Wallpaper.png')]">
          <div class="grow text-center ">
            <h1 class="text-6xl font-semibold text-black">Welcome to my site!</h1>
            <p class="font-light text-3xl mt-5">The land of opportunity.</p>
            <a
              class="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10"
              href=""
            >
              Get Started
            </a>
          </div>
          <div ref={containerAbout} class="grow flex flex-col gap-2 max-w-[40rem] justify-start m-10 mt-[10rem] mx- w-full">
          <div className="h-[2rem] lg:h-[4rem]  w-[100%] relative overflow-hidden">
           <Typography className="animText absolute lg:text-5xl text-left  font-normal uppercase">About</Typography> 
           </div>
           <Typography className="  lg:text-5xl text-left  font-normal uppercase">New Governement</Typography>
           <Typography className="  lg:text-5xl text-left  font-normal uppercase">Procurement Act</Typography>
          </div>
       
      </section>
    </>
  );
}
