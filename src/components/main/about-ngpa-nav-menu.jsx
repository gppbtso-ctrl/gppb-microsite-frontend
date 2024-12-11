// test
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
import { usePathname } from "next/navigation";


const aboutUrls = ['/maps','/different-bill-versions','/lrd-research-works','/ngpa-related-news','/hor-hearings','/op-meetings','/other-key-activities','/proposed-provisions','/sectoral-consultations','/senate-hearings'] 



function NavListMenuAboutNGPA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname()


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
              className={`${pathname === ''} flex items-center gap-1 px-2 rounded-none hover:text-blue-400 ${aboutUrls.includes(pathname) && 'text-blue-500'} `}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/maps' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/lrd-research-works' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/sectoral-consultations' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/other-key-activities' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/op-meetings' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/different-bill-versions' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/hor-hearings' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/senate-hearings' && 'text-blue-500'}`}
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

            <ul className="flex flex-col max-w-[12rem]">
              <Typography className="text-xs font-semibold p-2 w-[12rem] min-h-[3rem] flex flex-col justify-center">
                Others
              </Typography>
              <Link href="/proposed-provisions">
                <MenuItem className="flex items-center gap-3 rounded-lg min-h-[4rem]">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                       className={`flex items-center text-sm font-bold ${pathname === '/proposed-provisions' && 'text-blue-500'}`}
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
                      className={`flex items-center text-sm font-bold ${pathname === '/ngpa-related-news' && 'text-blue-500'}`}
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
              <Link href={'https://www.gppb.gov.ph/category/ngpa-series/'} target="__blank">
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                  NGPA Series
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  ></Typography>
                </div>
              </MenuItem>
            </Link>
              <Link href={'https://www.gppb.gov.ph/draft-irr-of-ra-12009/'} target="__blank">
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                  Draft IRR of RA 12009
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

          <ul className="flex flex-col gap-1 max-w-[12rem]">
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
            <Link href={'https://www.gppb.gov.ph/category/ngpa-series/'} target="__blank">
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                  NGPA Series
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  ></Typography>
                </div>
              </MenuItem>
            </Link>
            <Link href={'https://www.gppb.gov.ph/draft-irr-of-ra-12009/'} target="__blank">
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold w-full"
                  >
                  Draft IRR of RA 12009
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
