import React, { startTransition } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  KeyIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth";

const profileMenuItems = [
  {
    label: "Users",
    icon: UserCircleIcon,
  },
  {
    label: "Calendar Activities",
    icon: CalendarDaysIcon,
  },
  {
    label: "Change Password",
    icon: KeyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ decodedToken, removeToken }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    startTransition(() => {
      closeMenu();
      AuthService.logout();
      router.push("/login");
      setTimeout(() => {
        removeToken();
      }, 200);
    });
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          size="sm"
          className="flex items-center gap-1 rounded-none lg:ml-auto"
        >
          <span className="font-montserrat font-semibold text-black">
            {decodedToken.first_name}
          </span>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 z-50">
        {profileMenuItems.map(({ label, icon }, key) => {
          if (label === "Users" && decodedToken?.role !== "ADMIN" || label === "Calendar Activities" && decodedToken?.role !== "ADMIN") {
            return null;
          }

          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={
                label === "Sign Out"
                  ? handleLogout
                  : label === "Users"
                  ? () => router.push("/users")
                  : label === "Calendar Activities"
                  ? () => router.push("/calendar-activities")
                  : label === "Change Password"
                  ? () => router.push("/change-password")
                  : closeMenu
              }
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
