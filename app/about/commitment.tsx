import { Divider } from "@heroui/divider";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTools, FaUsers, FaBolt, FaLightbulb } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

export default function Commitment() {
  const commitments = [
    {
      title: "SAFETY.",
      icon: <MdOutlineSecurity color="white" size={28} />,
      description:
        "Our client’s safety is paramount. We maintain strict safety standards, conduct regular vehicle inspections, and provide essential safety guidance to ensure every journey is secure.",
    },
    {
      title: "RELIABILITY.",
      icon: <FaTools color="white" size={28} />,
      description:
        "We’re proud of our well-maintained fleet of vehicles and the teams behind the scenes that ensure all our vehicles are in reliable and optimal condition.",
    },
    {
      title: "CLIENT-CENTRIC APPROACH.",
      icon: <FaUsers color="white" size={28} />,
      description:
        "We prioritize our client’s needs and preferences. Our dedicated teams are always ready to assist, accommodate, and tailor every lease experience unique to each client.",
    },
    {
      title: "EFFICIENCY.",
      icon: <FaBolt color="white" size={28} />,
      description:
        "We respect and value our client’s time by ensuring a fast and efficient rental process—from booking to vehicle pick-up and return—minimizing any inconvenience.",
    },
    {
      title: "INNOVATION.",
      icon: <FaLightbulb color="white" size={28} />,
      description:
        "We embrace new technologies such as online bookings, digital payments, and eco-friendly vehicles to continuously enhance our services and reduce our carbon footprint.",
    },
    {
      title: "CONTINUOUS IMPROVEMENT.",
      icon: <HiOutlineRefresh color="white" size={28} />,
      description:
        "We are committed to continuous improvement by gathering client feedback and identifying opportunities to enhance our services. Every input helps us grow and serve better.",
    },
  ];

  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">
              OUR COMMITMENT TO QUALITY 2030
            </h1>
            <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
          </div>

          <p className="text-default-500 text-xl max-w-5xl leading-7">
            We are committed to delivering excellence through innovation,
            reliability, and continuous improvement—ensuring we meet the
            evolving needs of our clients while upholding the highest standards
            of quality by 2030.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="space-y-4 bg-neutral-200 py-6 px-6 rounded-2xl shadow-md border-b-6 border-[#009c00]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] p-4 rounded-full">
                  {item.icon}
                </div>
                <h1 className="font-semibold text-xl">{item.title}</h1>
              </div>

              <Divider />

              <p className="font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}