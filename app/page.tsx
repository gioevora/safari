import { Vehicles } from "./home/vehicles";
import { HeroSection } from "./home/herosection";
import { ServiceSections } from "./home/servicesection";


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection/>

      {/* VEHICLES SECTION */}
      <Vehicles/>

      {/* SERVICES OFFER BY SAFARI RENT A CAR */}
      <ServiceSections/>
    </>
  );
}
