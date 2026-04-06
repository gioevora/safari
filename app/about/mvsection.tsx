import { Divider } from "@heroui/divider";
import { GoGoal } from "react-icons/go";
import { TbEyeHeart } from "react-icons/tb";

export default function MissionVissionPage() {
  return (
    <section className="bg-[#f4f4f2] flex w-full justify-center">
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col items-center gap-4 py-8 md:py-20 text-center">
          
          {/* HEADER */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold">MISSION & VISION</h1>
            <span className="block w-40 h-1 bg-[#007744] mt-2 mx-auto"></span>
          </div>

          <p className="text-default-500 text-xl max-w-3xl leading-7">
            What are we doing, and why are we doing it.
          </p>

          {/* CONTENT */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 mx-auto">
            
            {/* MISSION */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#007744] p-4 rounded-full">
                  <GoGoal color="white" size={28} />
                </span>
                <h1 className="text-2xl font-bold">
                  OUR MISSION 2030
                </h1>
              </div>

              <Divider className="my-4 w-full" />

              <p className="text-default-500 text-lg leading-7 max-w-md">
                To empower and give individuals and organizations flexible,
                reliable, and sustainable mobility choices.
              </p>
            </div>

            {/* VISION */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#007744] p-4 rounded-full">
                  <TbEyeHeart color="white" size={28} />
                </span>
                <h1 className="text-2xl font-bold">
                  OUR VISION 2030
                </h1>
              </div>

              <Divider className="my-4 w-full" />

              <p className="text-default-500 text-lg leading-7 max-w-md">
                To be the premier mobility solutions provider in the Philippine
                car rental industry by 2030 that redefines convenience,
                sustainability, and the ultimate client experience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}