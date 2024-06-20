"use client";

import AuthService from "@/services/auth";
import useAuthStore from "@/store/authStore";
import {
  Button,
  Collapse,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import ProfileMenu from "./navbar-profilemenu";

export const MainNavbar = () => {
  const [isPending, startTransition] = useTransition();
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  return (
    <Navbar className="sticky top-0 z-40 h-max max-w-full rounded-none p-0  lg:px-8 lg:pl-0 lg:py-0 shadow-none border-none">
      <div className="flex items-center justify-between text-blue-gray-900 font-montserrat ">
        <div className=" bg-blue-600  h-14 flex items-center justify-center group hover:bg-black transition-all  duration-300 ">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className=" cursor-pointer  px-3 text-white group-hover:text-blue-gray-50 font-semibold font-montserrat transition-all  duration-300 "
          >
            GPPB-TSO
            <span className="text-black text-2xl group-hover:text-blue-600 transition-all  duration-300">
              .
            </span>
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block rounded-none hover:text-blue-400"
            onClick={() => router.push("/committees")}
          >
            <span className="font-montserrat">Committees</span>
          </Button>
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block rounded-none hover:text-blue-400 "
            onClick={() => router.push("/aboutus")}
          >
            <span className="font-montserrat">About NGPA</span>
          </Button>
          {/* <div className="mr-4 hidden lg:block">{navList}</div> */}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <div className="flex items-center gap-x-3">
            {loaded ? (
              !decodedToken ? (
                <>
                  {" "}
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block rounded-none hover:text-blue-400"
                    onClick={() => router.push("/login")}
                  >
                    <span className="font-montserrat">Log In</span>
                  </Button>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block rounded-none hover:text-blue-400"
                    onClick={() => router.push("/register")}
                  >
                    <span className="font-montserrat">Sign in</span>
                  </Button>
                </>
              ) : (
                <>
                  {decodedToken.role === "ADMIN" ? (
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block rounded-none"
                    >
                      <span className="font-montserrat text-blue-700">
                        Users
                      </span>
                    </Button>
                  ) : null}

                  {/* <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block rounded-none"
                    onClick={handleLogout}
                  >
                    <span className="font-montserrat">Logout</span>
                  </Button> */}
                  <ProfileMenu
                    decodedToken={decodedToken}
                    removeToken={removeToken}
                  />
                </>
              )
            ) : (
              <>
                {" "}
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block rounded-none  pointer-events-none cursor-none"
                >
                  <span className="font-montserrat">Log In</span>
                </Button>
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block rounded-none pointer-events-none cursor-none"
                >
                  <span className="font-montserrat">Sign in</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="py-2 px-3">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="#" className="flex items-center">
                Pages
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="#" className="flex items-center">
                Pages
              </a>
            </Typography>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 mt-1">
          <Button fullWidth variant="text" size="sm" className="rounded-none">
            <span>Log In</span>
          </Button>
          <Button
            fullWidth
            variant="gradient"
            size="sm"
            className=" rounded-none"
          >
            <span>Sign in</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
