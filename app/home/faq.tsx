"use client";

import { usePathname } from "next/navigation";
import { Accordion, AccordionItem } from "@heroui/accordion";

export const FrequentAskQuestion = () => {
  const pathname = usePathname();

  const isServicesPage = pathname === "/services";

  const faqs = [
    {
      id: "1",
      question: "What do I need to rent a car?",
      answer:
        "You need a valid driver’s license, a government-issued ID, and a security deposit depending on the vehicle type.",
    },
    {
      id: "2",
      question: "Is there a minimum rental period?",
      answer:
        "Yes, the minimum rental period is usually 1 day. Long-term rentals may have discounted rates.",
    },
    {
      id: "3",
      question: "Does the rental include insurance?",
      answer:
        "Basic insurance is included. Full coverage options are available upon request.",
    },
    {
      id: "4",
      question: "Can I extend my rental period?",
      answer:
        "Yes, you can extend your rental as long as the vehicle is available.",
    },
    {
      id: "5",
      question: "Do you offer long-term car rentals?",
      answer:
        "Yes, we offer long-term rentals for individuals and businesses with flexible pricing.",
    },
    {
      id: "6",
      question: "Can I choose a specific car model?",
      answer:
        "Yes, you can request a specific model, but availability depends on our fleet.",
    },
    {
      id: "7",
      question: "Is there a mileage limit?",
      answer:
        "Some rentals include unlimited mileage, while others may have daily limits depending on the package.",
    },
    {
      id: "8",
      question: "What happens if the car breaks down?",
      answer:
        "We provide 24/7 roadside assistance and will replace the vehicle if necessary.",
    },
    {
      id: "9",
      question: "Can I cancel my booking?",
      answer:
        "Yes, cancellations are allowed. Refund policies depend on the timing of the cancellation.",
    },
    {
      id: "10",
      question: "Do you offer delivery and pickup?",
      answer:
        "Yes, we offer delivery and pickup services depending on your location.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <section className={`${isServicesPage ? "" : "bg-[#f4f4f2]"}`}>
      <div className="container mx-auto px-6 flex-grow">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-32">
          
          <div className="flex flex-col items-center text-center gap-4 w-full">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-wrap">
                FREQUENT ASK QUESTIONS
              </h1>
              <span className="block w-50 h-1 bg-[#009c00] mt-2 mx-auto"></span>
            </div>

            <p className="text-default-500 text-xl max-w-5xl leading-7">
              Everything you need to know about our car rental services.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
            
            {/* LEFT */}
            <Accordion className="w-full">
              {leftFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  aria-label={item.question}
                  title={item.question}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>

            {/* RIGHT */}
            <Accordion className="w-full">
              {rightFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  aria-label={item.question}
                  title={item.question}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
};