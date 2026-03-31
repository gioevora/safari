import { Vehicles } from "./home/vehicles";
import { HeroSection } from "./home/herosection";
import { ServiceSections } from "./home/servicesection";
import { WhyChooseUs } from "./home/choose";
import { OurPartners } from "./home/partners";
import { FrequentAskQuestion } from "./home/faq";
import { MobilitySolutions } from "./home/mobilty";


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection/>

      {/* VEHICLES SECTION */}
      <Vehicles/>

      {/* WHY CHOOSE US  */}
      <WhyChooseUs/>


      {/* SERVICES OFFER BY SAFARI RENT A CAR */}
      <ServiceSections/>

      
      {/* FREQUENT ASK QUESTIONS */}
      <FrequentAskQuestion/>

      
      {/* SAFARI PARTNERS OR THE MAIN CLIENT LOGO */}
      <OurPartners/>


      {/* MOBILTY SOLUTIONS */}

      <MobilitySolutions/>
    </>
  );
}
