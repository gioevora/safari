import { Image } from "@heroui/image";
import { FaCheck } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-6 md:px-12">
      <div className="flex justify-end">
        <Image
          isZoomed
          alt="1"
          className="object-cover rounded-xl"
          src="https://ik.imagekit.io/9iubdrvln/OUR-SERVICES.png"
          height={500}
          width={600}
        />
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-wrap">
              FULL-SERVICE OPERATING LEASE
            </h1>
            <span className="block w-50 h-1 bg-[#009c00] mt-2"></span>
          </div>

          <p className="text-default-500 text-xl max-w-5xl leading-7">
            With our Full-Service Operating Lease (FSOL) you can be always be
            on-the-go worry-free as we’ll handle all your mobility needs
            including fleet management for a comfortable and seamless travel
            experience. For businesses, organizations or personal needs.
          </p>
        </div>

        <div className="pt-8">
          <ul className="space-y-4">
            <li className="font-lg font-medium flex items-center gap-4">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <FaCheck color="white" />
              </span>
              Includes Fleet Management System.
            </li>
            <li className="font-lg font-medium flex items-center gap-4">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <FaCheck color="white" />
              </span>
              Long and Short-Term Lease available
            </li>
            <li className="font-lg font-medium flex items-center gap-4">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <FaCheck color="white" />
              </span>
              Flexible, negotiable rates and terms
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
              Can request different vehicle brands/make and year. upon
              availability and approval
            </li>
            <li className="font-lg font-medium flex items-center gap-4">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <FaCheck color="white" />
              </span>
              TERMS AND CONDITIONS APPLY. Please contact our Account Officers
              for more details
            </li>
          </ul>{" "}
        </div>
      </div>
    </section>
  );
}
