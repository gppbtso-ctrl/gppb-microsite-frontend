import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks({className}) {
  return (
    <footer className=" w-full">
      <div className="mx-auto w-full  ">
        <section class={`${className} relative flex flex-col  w-full z-10  shadow-md gap-0.5 pt-[3rem] pb-4 px-16 backdrop-blur-3xl bg-gradient-to-b from-white/95 to-blue-500/95`}>
          <div className="flex flex-col md:flex-row justify-between mb-0 md:mb-3">
            <div className="">
              <Typography className="text-xl tracking-wide antialiased font-sans uppercase drop-shadow-md text-center md:text-left">
                Government Procurement Policy
              </Typography>

              <Typography className="text-xl tracking-wide  antialiased font-sans uppercase drop-shadow-md text-center md:text-left">
                Board - Technical Support Office
              </Typography>

              <Typography className="text-sm mt-2 tracking-wide  antialiased font-sans uppercase drop-shadow-md text-center md:text-left">
                GPPB-TSO Building, Commonwealth Ave, <br />
                UP Diliman Campus, Quezon City
              </Typography>

              <Typography className="text-lg mt-3 tracking-wide font-light  antialiased  flex gap-2 justify-center md:justify-start items-center drop-shadow-md ">
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span>(02) 5322-6222 (BAC)</span>
              </Typography>

              <Typography className="text-lg mt-1 tracking-wide font-light  antialiased  flex gap-2 justify-center md:justify-start items-center drop-shadow-md  ">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span>gppb@gppb.gov.ph</span>
              </Typography>

              <Typography className="text-center md:text-left md:w-fit  text-md mt-2 tracking-wide font-light hover:text-blue-50 antialiased text-black underline  drop-shadow-md transition-all duration-200">
                <Link href="/legal-notice">
                  <span>Legal Notice Disclaimer</span>
                </Link>
              </Typography>
            </div>

            <div className="flex flex-col gap-1 justify-end mb-3 md:mb-1 items-center drop-shadow-md">
              {/* <Image
                src={"/Logo Watermark 2024 - NGPA.png"}
                width={300}
                height={500}
              /> */}
            </div>
          </div>

          <div className="mb-1 flex w-full drop-shadow-md border-0 border-t-[1px] border-blue-gray-800 flex-col items-center justify-center pt-3 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className=" text-center font-[500] text-black antialiased drop-shadow-md mb-1 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://www.gppb.gov.ph/" className="">
                GPPB-TSO
              </a>
              . All Rights Reserved.
            </Typography>

            <div className="flex gap-4 items-center  text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                className="opacity-75 antialiased text-black drop-shadow-md transition-opacity hover:opacity-100 hover:text-blue-gray-100"
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
                className="opacity-75 text-black antialiased drop-shadow-md text-xl transition-opacity hover:opacity-100 hover:text-blue-gray-100"
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
                className="opacity-75 text-black antialiased drop-shadow-md text-xl transition-opacity hover:opacity-100 hover:text-blue-gray-100"
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
    </footer>
  );
}
