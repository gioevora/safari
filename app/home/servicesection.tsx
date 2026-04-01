import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { FaArrowRight, FaCar, FaCheck } from "react-icons/fa6";

export const ServiceSections = () => {
  const services = [
    {
      title: "LONG-TERM CAR RENTAL",
      items: [
        "1 Year or More Rental",
        "Include Fleet Management System (FMS)",
        "Flexible vehicle options",
        "24/7 service",
        "Negotiable terms",
      ],
    },
    {
      title: "SHORT-TERM CAR RENTAL",
      items: [
        "Daily or Weekly Rental",
        "Includes FMS",
        "Flexible vehicle options",
        "24/7 service",
        "Negotiable terms",
      ],
    },
  ];

  return (
   
    <section className="container mx-auto px-6 grow">
      <div className="flex flex-col gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-wrap">
              OUR CAR RENTAL SERVICES
            </h1>
            <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
          </div>

          <p className="text-default-500 text-xl max-w-5xl leading-7">
            Full-Service Operating Lease (FSOL) that is safe, reliable, and an
            industry-standard car rental solutions in Manila, providing mobility
            solutions for both corporate and personal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 pt-12">
          <div className="pt-12 space-y-4 bg-neutral-200 py-4 px-6 rounded-2xl shadow-md border-b-6 border-[#009c00]">
            <div className="flex items-center gap-4">
              <div className="bg-[#009c00] px-4 py-4 rounded-full">
                <FaCar color="white" size={32} />
              </div>

              <div>
                <h1 className="font-semibold text-xl">LONG-TERM CAR RENTAL</h1>
              </div>
            </div>

            <Divider className="my-4" />

            <div className="flex justify-center items-center">
              <div className="pt-2">
                <ul className="space-y-4">
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    1 Year or More Rental.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Includes Fleet Management System (FMS).
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Can request different vehicle brands/ make, upon
                    availability and approval.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    24/7 service, nationwide coverage.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Flexible, negotiable rates and terms.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 space-y-4 bg-neutral-200 py-4 px-6 rounded-2xl shadow-md border-b-6 border-[#009c00]">
            <div className="flex items-center gap-4">
              <div className="bg-[#009c00] px-4 py-4 rounded-full">
                <FaCar color="white" size={32} />
              </div>

              <div>
                <h1 className="font-semibold text-xl">SHORT-TERM CAR RENTAL</h1>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex justify-center items-center">
              <div className="pt-2">
                <ul className="space-y-4">
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Daily or Weekly Car Rental.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Includes Fleet Management System (FMS).
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Can request different vehicle brands/ make, upon
                    availability and approval.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    24/7 service, nationwide coverage.
                  </li>
                  <li className="font-lg font-medium flex items-center gap-4">
                    <span className="bg-[#009c00] px-2 py-2 rounded-full">
                      <FaCheck color="white" />
                    </span>
                    Flexible, negotiable rates and terms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between items-center mt-12 text-center">
          <h1><span className="font-bold text-[#009c00]">TERMS AND CONDITION APPLY.</span> Please contact our Account Officers for more details.</h1>
          <Button className="bg-[#009c00] text-white" size="lg" endContent={<FaArrowRight/>}>LEARN MORE</Button>
        </div>
      </div>
    </section>
  );
};
