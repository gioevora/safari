import { title } from "@/components/primitives";
import { Image } from "@heroui/image";

export const OurPartners = () => {
  const partners = [
    {
      name: "FWD Insurance",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20FWD%20INSURANCE.png?updatedAt=1759387320416",
    },

    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/SAFARI%20-%20MITSUBISHI.png?updatedAt=1759387320270",
    },

    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20san%20miguel.png?updatedAt=1759386868653",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20zalora.png?updatedAt=1759386868075",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20fujitsu.png?updatedAt=1759384188542",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20nlex.png?updatedAt=1759384186988",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20manila%20water.png?updatedAt=1759384187197",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20bdo.png?updatedAt=1759384186489",
    },
    {
      name: "Mitsubishi",
      img: "https://ik.imagekit.io/9iubdrvln/safari%20-%20brother.png?updatedAt=1759384187211",
    },
  ];

  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-32">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-wrap">OUR PARTNERS</h1>
              <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
            </div>

            <p className="text-default-500 text-xl max-w-5xl leading-7">
              Explore our trusted partners supporting our services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.map((partner, index) => (
              <Image
                key={index}
                isZoomed
                alt={partner.name}
                className="object-contain"
                src={partner.img}
                width={200}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
