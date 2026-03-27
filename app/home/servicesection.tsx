import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter } from "@heroui/card";

export const ServiceSections = () => {
  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className={title()}>CAR RENTAL SERVICES</h1>

          <p className="text-default-500 text-lg max-w-2xl leading-7">
            Full-Service Operating Lease (FSOL) that is safe, reliable, and an
            industry-standard car rental solution in Manila, providing mobility
            solutions for both corporate and personal needs.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full mt-8">
            <Card className="border-t-4 border-amber-300 w-full">
              <CardBody>
                <h2 className="font-bold text-lg mb-2">LONG-TERM CAR RENTAL</h2>
                <ul className="list-disc list-inside text-sm">
                  {[
                    "1 Year or More Rental",
                    "Include Fleet Management System (FMS)",
                    "Can request different vehicle brands/make, upon availability and approval",
                    "24/7 service, nationwide coverage",
                    "Flexible, negotiable rates and terms",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-sm pl-4 marker:text-amber-400"
                      style={{ textIndent: "-0.75rem" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter />
            </Card>

            <Card className="border-t-4 border-amber-300 w-full">
              <CardBody>
                <h2 className="font-bold text-lg mb-2">SHORT-TERM CAR RENTAL</h2>
                <ul className="list-disc list-inside text-sm">
                  {[
                    "Daily or Weekly Car Rental",
                    "Includes Fleet Management System (FMS)",
                    "Can request different vehicle/make, upon availability and approval",
                    "24/7 service, nationwide coverage",
                    "Flexible, negotiable rates and terms",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-sm pl-4 marker:text-amber-400"
                      style={{ textIndent: "-0.75rem" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};