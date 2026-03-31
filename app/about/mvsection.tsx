import { Divider } from "@heroui/divider";
import { GoGoal } from "react-icons/go";
import { TbEyeHeart } from "react-icons/tb";

export default function MissionVissionPage() {
  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-wrap">MISSION & VISION</h1>
            <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
          </div>

          <p className="text-default-500 text-xl max-w-5xl leading-7">
            What are we doing, and why are we doing it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <GoGoal color="white" size={32} />
              </span>
              <h1 className="text-2xl font-bold text-wrap">OUR MISSION 2030</h1>
            </div>
            <Divider className="my-4" />
            <p className="text-default-500 text-xl max-w-5xl leading-7">
              To empower and give individuals, and organizations different
              flexible, reliable, and sustainable mobility choices.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#009c00] px-2 py-2 rounded-full">
                <TbEyeHeart color="white" size={32} />
              </span>
              <h1 className="text-2xl font-bold text-wrap">OUR VISION 2030</h1>
            </div>

            <Divider className="my-4" />
            <p className="text-default-500 text-xl max-w-5xl leading-7">
              To be the premier mobility solutions provider in the Philippine
              car rental industry by 2030 that redefines convenience,
              sustainability, and the ultimate client experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
