import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Link as Links } from "@heroui/link";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Divider } from "@heroui/divider";

export const Footer = () => {
  return (
    <footer className="bg-[#1111]">
      <div className="container mx-auto w-full p-4">
        <div className="lg:flex lg:justify-between py-12">
          <div className="mb-6 lg:mb-0 w-full max-w-md space-y-6">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="/img/SafariRentACarLogo.png"
                className="h-12 me-3"
                alt="Safari Rent A Car Logo"
              />
            </a>

            <p className="">
              SAFARI RENT A CAR, INC. is one of the Philippines' leading
              Business to Business and Personal car rental organizations
              offering Short and Long-Term, Full Service Operating Lease (FSOL)
              since 1993. Our Quality Management System is Certified according
              to ISO 9001.
            </p>

            <div className="space-y-4">
              <div className="w-full max-w-37.5">
                <img
                  src="/img/ISO CERTIFIED.png"
                  className="h-16 me-3"
                  alt="Safari Rent A Car Logo"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Company
              </h2>
              <ul className="text-body font-medium space-y-4">
                <li>
                  <Link
                    href={siteConfig.links.home}
                    className="hover:underline"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.about}
                    className="hover:underline"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.services}
                    className="hover:underline"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.locations}
                    className="hover:underline"
                  >
                    Our Locations
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.careers}
                    className="hover:underline"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.contact}
                    className="hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Follow us
              </h2>
              <ul className="text-body font-medium space-y-4">
                <li>
                  <Link
                    href={siteConfig.links.facebook}
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.links.instagram}
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>

                <li>
                  <Link
                    href={siteConfig.links.linkedin}
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Legal
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link
                    href={siteConfig.links.policy}
                    className="hover:underline"
                  >
                    Data Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2026{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Safari Rent A Car, INC.
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <Link href={siteConfig.links.policy} className="hover:underline">
              Data Privacy Policy
            </Link>

            <Divider orientation="vertical" className="h-5" />

            <div className="flex flex-wrap gap-1">
              <Links
                isExternal
                aria-label="Twitter"
                href={siteConfig.links.facebook}
              >
                <FaSquareFacebook size={24} className="text-default-500" />
              </Links>
              <Links
                isExternal
                aria-label="Discord"
                href={siteConfig.links.instagram}
              >
                <FaInstagramSquare size={24} className="text-default-500" />
              </Links>
              <Links
                isExternal
                aria-label="Github"
                href={siteConfig.links.linkedin}
              >
                <FaLinkedin size={24} className="text-default-500" />
              </Links>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
