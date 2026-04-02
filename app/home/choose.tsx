import { FaCalendarAlt } from "react-icons/fa";
import { IoBulbSharp } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { RiCoinsLine } from "react-icons/ri";
import { BiSolidCertification } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { Image } from "@heroui/image";
import { Progress } from "@heroui/progress";
import { Button } from "@heroui/button";
import { FaArrowRight, FaPhone } from "react-icons/fa6";

export const WhyChooseUs = () => {
  const items = [
    {
      title: "30+ YEARS TRUSTED",
      desc: `With 30 years’ experience in the Philippine car rental industry, Safari’s expertise has been proven and trusted by many prominent local and multinational organizations.`,
      icon: <FaCalendarAlt color="white" size={28} />,
    },
    {
      title: "YOU CHOOSE!",
      desc: `Request from a variety of different vehicle brands and models! You can also choose from different payment methods such as bank deposit, credit cards, and e-wallets.`,
      icon: <IoBulbSharp color="white" size={28} />,
    },
    {
      title: "SAFETY IS #1",
      desc: `Safari top priority is YOU! With strict standards implemented at every level, you can be assured that your rides are safe.`,
      icon: <AiOutlineSafety color="white" size={28} />,
    },
    {
      title: "COMPETITIVE & RENEWABLE",
      desc: `Affordable and competitive terms that are flexible and renewable compared to the nearest competitor.`,
      icon: <RiCoinsLine color="white" size={28} />,
    },
    {
      title: "ISO CERTIFIED!",
      desc: `Since 2024, our Quality Management System is certified by TÜV SÜD PSB Philippines Inc. according to ISO 9001.`,
      icon: <BiSolidCertification color="white" size={28} />,
    },
    {
      title: "HASSLE-FREE & CONVENIENT",
      desc: `Fleet Management System (FMS): We take care of vehicle maintenance, registration and paperwork, insurance, vehicular breakdowns, etc. Easy!`,
      icon: <FaThumbsUp color="white" size={28} />,
    },
    {
      title: "LESS OPPORTUNITY COST",
      desc: `No need to invest in acquiring new vehicles! Use your capital somewhere else.`,
      icon: <TbPigMoney color="white" size={28} />,
    },
    {
      title: "24/7 SERVICE",
      desc: `We are ready 24/7, nationwide to assist you with any inquiries, emergencies or etc. Just give us a call, text or email!`,
      icon: <IoIosTime color="white" size={28} />,
    },
  ];

  return (
    <section className="bg-[#f4f4f2] py-16 px-6 md:px-12">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-wrap">WHY CHOOSE US?</h1>
          <span className="block w-50 h-1 bg-[#007744] mt-2 mx-auto"></span>
        </div>

        <p className="text-default-500 text-xl max-w-5xl leading-7">
          Full-Service Operating Lease (FSOL) that is safe, reliable, and an
          industry-standard car rental solutions in Manila, providing mobility
          solutions for both corporate and personal needs
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          {/* LIST */}
          <div className="flex flex-col mt-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 py-6 border-b border-gray-300 last:border-none"
              >
                {/* ICON */}
                <div className="text-2xl mt-1 bg-[#007744] flex items-center w-16 h-16 py-4 px-4 rounded-full">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-md text-default-500 mt-1 leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - STACKED IMAGES */}      
        <div className="w-full md:w-1/2">
          <div className="sticky top-20">
            <div className="grid grid-cols-2 gap-2 mt-12 max-w-xl">
              {/* TOP LEFT */}
              <Image
                isZoomed
                alt="1"
                className="object-cover rounded-xl"
                src="https://ik.imagekit.io/9iubdrvln/489051826_1128275195979062_5389322534003374866_n.jpg"
                height={300}
                width={500}
              />

              {/* TOP RIGHT */}
              <Image
                isZoomed
                alt="2"
                className="object-cover rounded-xl"
                src="https://ik.imagekit.io/9iubdrvln/522977603_1215888850551029_5711309979266024361_n.jpg"
                height={300}
                width={500}
              />

              {/* BOTTOM (FULL WIDTH) */}
              <div className="col-span-2">
                <Image
                  isZoomed
                  alt="3"
                  className="object-cover rounded-xl col-span-2 w-full"
                  src="https://ik.imagekit.io/9iubdrvln/2.png?updatedAt=1759476246185"
                  height={250}
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
                  className="bg-[#007744] text-white"
                  endContent={<FaArrowRight />}
                >
                  Learn More
                </Button>

                <div className="flex items-center gap-2">
                  <div className="bg-[#A02C28] px-4 py-4 rounded-2xl">
                    <FaPhone color="white" />
                  </div>
                  <h3>
                    <span className="text-neutral-400 text-sm">
                      Call Anytime
                    </span>
                    <br />
                    (+63) 2-8886-9619
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
