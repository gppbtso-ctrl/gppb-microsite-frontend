import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenuAboutNGPA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis:12.3 }}
        placement="bottom"
    
      >
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="font-semibold font-montserrat uppercase "
          >
            <Button
              className="flex items-center gap-1 px-2 rounded-none hover:text-blue-400"
              variant="text"
              size="sm"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About NGPA
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </Typography>
     
          
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl  backdrop-blur-2xl bg-white/90 rounded-md lg:block">
          <div className="w-full flex gap-2">
            <ul className="flex flex-col max-w-[12rem] min-h-14">
              <Typography className="text-xs font-semibold p-2 w-[12rem] min-h-[3rem] ">
                Preliminary Activities and Sectoral Consultations{" "}
              </Typography>
              <Link href="/maps">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      MAPS
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      Details and documents related to the MAPS
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/lrd-research-works">
                <MenuItem className="flex items-center gap-3 rounded-lg  min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      LRD Research
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      Related to Studies
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/sectoral-consultations">
                <MenuItem className="flex items-center gap-3 rounded-lg  min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      Sectoral Consultations
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      Information on consultations with various stakeholders
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/other-key-activities">
                <MenuItem className="flex items-center gap-3 rounded-lg  min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      Other Key Activities
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      OGP, DSA with SEC re Beneficial Ownership
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
            </ul>
            <ul className="flex flex-col max-w-[12rem]">
              <Typography className="text-xs font-semibold p-2 w-[12rem] min-h-[3rem] flex flex-col justify-center">
                Legislative Journey
              </Typography>
              <Link href="/op-meetings">
                <MenuItem className="flex items-center gap-3 rounded-lg  min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      OP meetings
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      LEDAC, OES presentation
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/different-bill-versions">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      Different Bill Versions
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      {" "}
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/hor-hearings">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      HOR Hearings
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      {" "}
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/senate-hearings">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      Senate Hearings
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      {" "}
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
            </ul>

            <ul className="flex flex-col w-[12rem]">
              <Typography className="text-xs font-semibold p-2 w-[12rem] min-h-[3rem] flex flex-col justify-center">
                Others
              </Typography>
              <Link href="/proposed-provisions">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold w-full"
                    >
                      GPPB-TSO Proposed Provisions
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    ></Typography>
                  </div>
                </MenuItem>
            </Link>
              <Link href={'/ngpa-related-news'}>
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold w-full"
                    >
                  NGPA Related News
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    ></Typography>
                  </div>
                </MenuItem>
              </Link>
            </ul>
          </div>
        </MenuList>
      </Menu>
      {/* MOBILE VIEW */}
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>
        <div className="max-h-[50vh] overflow-auto">
          <ul className="flex flex-col gap-1 min-h-14">
            <Typography className="text-xs font-semibold p-2 py-5 text-black -mb-2">
              Preliminary Activities and Sectoral Consultations{" "}
            </Typography>
            
            <Link href={'/maps'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    MAPS
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    Details and documents related to the MAPS
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/lrd-research-works'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    LRD Research
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    Related to Studies
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/sectoral-consultations'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Sectoral Consultations
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    Information on consultations with various stakeholders
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/other-key-activities'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Other Key Activities
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    OGP, DSA with SEC re Beneficial Ownership
                  </Typography>
                </div>
              </MenuItem>
          </Link>
          </ul>
          <ul className="flex flex-col gap-1 max-w-[12rem]">
            <Typography className="text-xs font-semibold p-2 text-black py-5 -mb-2 flex flex-col justify-center">
              Legislative Journey
            </Typography>
            <Link href={'/op-meetings'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    OP meetings
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    LEDAC, OES presentation
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/different-bill-versions'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Different Bill Versions
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {" "}
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/hor-hearings'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    HOR hearings
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {" "}
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/senate-hearings'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold text-black"
                  >
                    Senate hearings
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {" "}
                  </Typography>
                </div>
              </MenuItem>
            </Link>
          </ul>

          <ul className="flex flex-col gap-1 w-[12rem]">
          <Typography className="text-xs font-semibold p-2 text-black py-5 -mb-2 flex flex-col justify-center">
              Others
            </Typography>
            <Link href={'/proposed-provisions'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                    GPPB-TSO Proposed Provisions
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  ></Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'/ngpa-related-news'}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                   NGPA Related News
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  ></Typography>
                </div>
              </MenuItem>
            </Link>
          </ul>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

export default NavListMenuAboutNGPA;
