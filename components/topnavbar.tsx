import Link from "next/link";
import { LocationIcon, MailIcon, PhoneIcon } from "./icons";
import { Divider } from "@heroui/divider";

export const TopNavbar = () => {
  return (
    <div className="hidden lg:flex bg-[#009c00] text-white text-sm">
      <div className="container w-full mx-auto px-6 py-2">
        <div className="flex justify-between">
          <div className="flex justify-start gap-4 flex-wrap">
            {/* Email */}
            <a
              href="mailto:info@safari.ph"
              className="flex items-center gap-2 hover:underline"
            >
              <MailIcon className="text-white/90 w-4 h-4" />
              <span>info@safari.ph</span>
            </a>

            <Divider orientation="vertical" className="h-4 bg-white/40" />

            {/* Location */}
            <Link
              href="https://maps.google.com/?q=1839+Eureka+St,+Brgy.+La+Paz,+Makati+City"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <LocationIcon className="text-white/90 w-4 h-4" />
              <span>1839 Eureka St, Brgy. La Paz, Makati City</span>
            </Link>
          </div>

          <div className="flex justify-start gap-4 flex-wrap">
            <a
              href="mailto:info@safari.ph"
              className="flex items-center gap-2 hover:underline"
            >
              <PhoneIcon className="text-white/90 w-4 h-4" />
              <span>(+63) 2-8886-9619</span>
            </a>
            <Divider orientation="vertical" className="h-4 bg-white/40" />
            <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
