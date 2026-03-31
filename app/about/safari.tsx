import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Progress } from "@heroui/progress";
import { FaArrowRight, FaPhone } from "react-icons/fa6";

export default function SafariSection() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-1/2">
        {/* LIST */}
        <div className="flex flex-col mt-6">
          <div className="space-y-6">
            <h3 className="font-semibold text-5xl text-[#009c00]">
              WHO WE ARE?
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-default-500 mt-1 leading-6">
                <span className="text-[#009c00] font-bold">
                  SAFARI RENT-A-CAR, INC.{" "}
                </span>
                is one of the Philippines’ leading and fastest growing,
                business-to-business (B2B) and personal car leasing
                organizations offering Full-Service Operating Lease (FSOL) to
                prominent local and multinational organizations, as well as
                individuals or walk-in clients. This was possible through our
                talented team’s years of hard work and dedication in providing
                quality and reliable service to our clients.
              </p>

              <p className="text-lg text-default-500 mt-1 leading-6">
                <span className="text-[#009c00] font-bold">SAFARI</span> was
                established on March 21, 1993 by{" "}
                <span className="text-[#009c00] font-bold">
                  BELINDA D. NUÑEZ & VIRGILIO L. HIZON,
                </span>{" "}
                the current CEO and President, in a modest two room office in
                Makati City, Metro Manila, with only a handful of employees, one
                vehicle and a dream. Over the years,{" "}
                <span className="text-[#009c00] font-bold">SAFARI</span> slowly
                grew bigger as it acquired more vehicles, more employees, and
                serviced more diverse clients while weathering difficult
                economic conditions such as the 1997 Asian Financial Crisis, the
                2008 Great Recession, and the COVID-19 Recession.
              </p>

              <p className="text-lg text-default-500 mt-1 leading-6">
                As a testament to its leadership, teamwork, and resilience,
                <span className="text-[#009c00] font-bold">SAFARI</span>{" "}
                celebrated its 30th Anniversary on March 21, 2023. Excitingly,
                we’ve also been recently certified by TÜV SÜD PSB Philippines
                Inc. according to ISO 9001. We strive to ensure that all our
                processes are consistent and industry-standard.
              </p>

              <p className="text-lg text-default-500 mt-1 leading-6">
                From our Head Office in Makati to our 5 branches in Sta. Rosa,
                Laguna; Calamba, Laguna; General Trias, Cavite; Clark, Pampanga;
                and Mactan, Cebu (NEW!), SAFARI’s well-trained teams are well
                prepared to serve you. They keep track of bookings with modern
                reservations and dispatch systems. They also regularly monitor
                SAFARI’s fleet for scheduled maintenance services to ensure a
                comfortable and safe journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - STACKED IMAGES */}
      <div className="w-full md:w-1/2">
        <div className="sticky top-20">
          <div className="grid grid-cols-2 gap-2 mt-12 max-w-xl">
            {/* BOTTOM (FULL WIDTH) */}
            <div className="col-span-2">
              <Image
                isZoomed
                alt="3"
                className="object-cover rounded-xl col-span-2 w-full"
                src="https://ik.imagekit.io/9iubdrvln/HOME-PAGE.png?updatedAt=1759478400393"
                height={350}
                width={1000}
              />
            </div>

            <div className="col-span-2 mt-4 space-y-4">
              <Progress
                color="success"
                label="Car Rental Success"
                maxValue={1000}
                showValueLabel={true}
                size="md"
                value={950}
              />

              <Progress
                color="success"
                label="Car Brakedown"
                maxValue={1000}
                showValueLabel={true}
                size="md"
                value={50}
              />
            </div>

            <div className="col-span-2 mt-4 flex gap-4">
              <Button
                size="lg"
                className="bg-[#009c00] text-white"
                endContent={<FaArrowRight />}
              >
                Learn More
              </Button>

              <div className="flex items-center gap-2">
                <div className="bg-[#A02C28] px-4 py-4 rounded-2xl">
                  <FaPhone color="white" />
                </div>
                <h3>
                  <span className="text-neutral-400 text-sm">Call Anytime</span>
                  <br />
                  (+63) 2-8886-9619
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
