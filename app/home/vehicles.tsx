import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { FaCircleArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

export const Vehicles = () => {
  const units = [
    {
      brand: "Toyota",
      name: "Toyota Tacoma 4WD",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      price: 100,
      transmission: "Manual",
      km: "25 KM",
      fuel: "Diesel",
      persons: "5 Persons",
    },
    {
      brand: "Honda",
      name: "Honda Civic 2023",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      price: 85,
      transmission: "Automatic",
      km: "20 KM",
      fuel: "Petrol",
      persons: "5 Persons",
    },
    {
      brand: "Ford",
      name: "Ford Everest SUV",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      price: 120,
      transmission: "Automatic",
      km: "30 KM",
      fuel: "Diesel",
      persons: "7 Persons",
    },
    {
      brand: "Hyundai",
      name: "Hyundai Staria Van",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      price: 150,
      transmission: "Automatic",
      km: "28 KM",
      fuel: "Diesel",
      persons: "9 Persons",
    },
    {
      brand: "Nissan",
      name: "Nissan Navara Pickup",
      img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      price: 110,
      transmission: "Manual",
      km: "26 KM",
      fuel: "Diesel",
      persons: "5 Persons",
    },
    {
      brand: "Mitsubishi",
      name: "Mitsubishi Montero Sport",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      price: 130,
      transmission: "Automatic",
      km: "27 KM",
      fuel: "Diesel",
      persons: "7 Persons",
    },
  ];

  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-wrap">EXPLORE SOME OF OUR VEHICLES</h1>
            <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
          </div>

          <p className="text-default-500 text-xl max-w-5xl leading-7">
            Choose from our wide selection of vehicles, from econimical compacts
            to SUV's, all maintained to the highest standards.
          </p>

          <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map((unit, index) => (
              <Card key={index} className="p-0 overflow-hidden rounded-2xl">
                {/* IMAGE */}
                <CardBody className="p-0 relative">
                  <Image
                    isZoomed
                    alt={unit.name}
                    className="object-cover"
                    src={unit.img}
                    width="100%"
                    height={220}
                  />

                  {/* CATEGORY BADGE */}
                  <span className="absolute bottom-0 left-0 bg-[#009c00] text-white px-4 py-2 rounded-tr-xl font-semibold text-sm z-20">
                    {unit.brand}
                  </span>
                </CardBody>

                {/* CONTENT */}
                <CardFooter className="flex flex-col items-start gap-4 p-5">
                  <h2 className="text-xl font-bold">{unit.name}</h2>

                  <Divider />

                  {/* SPECS */}
                  <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500 w-full">
                    <div className="flex items-center gap-2">
                      <TbSteeringWheelFilled /> {unit.transmission}
                    </div>

                    <div className="flex items-center gap-2">
                      <IoIosSpeedometer />
                      {unit.km}
                    </div>

                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      {unit.fuel}
                    </div>

                    <div className="flex items-center gap-2">
                      <IoMdPerson />
                      {unit.persons}
                    </div>
                  </div>

                  {/* PRICE BOX */}
                  {/* <div className="w-full bg-gray-100 rounded-xl py-3 text-center text-lg">
                  Starting From
                  <span className="text-amber-500 font-bold ml-1">
                    ${unit.price}
                  </span>{" "}
                  / Day
                </div> */}

                  {/* BUTTON */}
                  <Button
                    className="w-full bg-[#009c00] text-white font-semibold"
                    radius="lg"
                    endContent={<FaArrowRightLong />}
                  >
                    Show Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="pt-4">
            <Button
              className="w-full bg-[#009c00] text-white font-semibold"
              radius="lg"
              endContent={<FaCircleArrowRight />}
              size="lg"
            >
              See All Vehicles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
