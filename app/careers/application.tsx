import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { GrLocation } from "react-icons/gr";
import { MdWorkOutline, MdOutlinePeopleAlt } from "react-icons/md";

/* TYPES */
type Section =
  | {
      title: string;
      type: "text";
      content: string;
    }
  | {
      title: string;
      type: "list";
      content: string[];
    };

type Job = {
  title: string;
  location: string;
  type: string;
  slots: number;
  sections: Section[];
};

export default function Application() {
  /* JOBS ARRAY (2 JOBS) */
  const jobs: Job[] = [
    {
      title: "Quality Inspector",
      location:
        "Calamba Branch - Unit A-6, 1st Floor, Regalena Bldg., Brgy. Turbina, Calamba City, Laguna",
      type: "Full-Time",
      slots: 1,

      sections: [
        {
          title: "Job Description",
          type: "text",
          content:
            "Quality Inspectors are responsible in documenting the checking of the quality of vehicles, inner and outer appearance. Q.I. is responsible for transfer of vehicles from one area to another inside garages. Q.I. is also responsible for the cleanliness and roadworthiness of vehicle before released to end-user.",
        },
        {
          title: "Duties and Responsibilities",
          type: "list",
          content: [
            "College Graduate. Preferably Male not more than 45 years old.",
            "Ability to communicate both verbally and in writing.",
            "Ability to listen to and understand customer’s needs.",
            "Ability to maintain clear and accurate record.",
            "Familiar with various brand of vehicles and operation.",
            "A car enthusiast.",
            "Knowledgeable in basic automotive. Know how to troubleshoot and perform basic vehicle diagnostics.",
            "Good problem-solving skills.",
            "Valid Driver’s License and knows how to drive is an advantage.",
          ],
        },
      ],
    },

    {
      title: "Purchasing Admin",
      location: "Head Office - 1839 Eureka St., Brgy. La Paz, Makati City, NCR, Philippines 1204",
      type: "Full-Time",
      slots: 1,

      sections: [
        {
          title: "Job Description",
          type: "list",
          content: [
            "Responsible for all related documents needed to process supplier payment / Request for Payment (RFP).",
            "Safe-keep all related documents in Purchasing group.",
          ],
        },
        {
          title: "Duties and Responsibilities",
          type: "list",
          content: [
            "Promote company integrity within Purchasing section.",
            "Process Request for Payment (RFP) of all purchases before processing of payment with the accounting department.",
            "Ensure that all Request for Payment documents have corresponding request orders, purchase orders, and canvass sheets.",
            "Follow-up request for payment forwarded to Accounting department to ensure that payment to the supplier is released on time.",
            "Ensure that all delivery of products from Suppliers have approved purchase orders and completely sign-off.",
            "Responsible for managing and maintaining supplier’s accreditation files/records and ensure they are reviewed and updated every year.",
            "Review all canvass price offers for newly acquired vehicles, parts, services, and other vehicle-related items.",
            "Monitor and follow up on all Requests for Quotation (RFQ) forwarded to vendors.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <div className="w-full max-w-4xl mx-auto space-y-10">

        {/* MAP ALL JOBS */}
        {jobs.map((job) => (
          <Card key={job.title} className="p-6 md:p-8 border-t-8 border-[#007744]">
            <CardBody className="p-0">

              {/* HEADER */}
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#007744]">
                    {job.title}
                  </h1>

                  <p className="text-gray-500 text-sm flex items-start gap-2 mt-1">
                    <GrLocation size={14} className="mt-1" />
                    <span>{job.location}</span>
                  </p>
                </div>

                {/* META */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MdWorkOutline size={18} />
                    {job.type}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MdOutlinePeopleAlt size={18} />
                    {job.slots} slot{job.slots > 1 && "s"}
                  </div>

                  <Button size="sm" className="bg-[#007744] text-white ml-auto">
                    Apply Now
                  </Button>
                </div>
              </div>

              <Divider className="my-6" />

              {/* SECTIONS */}
              <div className="space-y-8">
                {job.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-lg font-semibold mb-3">
                      {section.title}
                    </h2>

                    {section.type === "text" ? (
                      <p className="text-sm leading-6 text-gray-700">
                        {section.content}
                      </p>
                    ) : (
                      <ol className="list-decimal pl-5 space-y-2">
                        {section.content.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-6 text-gray-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}
              </div>

            </CardBody>
          </Card>
        ))}

      </div>
    </section>
  );
}