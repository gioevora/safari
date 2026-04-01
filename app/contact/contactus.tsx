import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { IoSend } from "react-icons/io5";

export default function ContactUs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center space-y-4 pl-54 px-8">
        <h1 className="font-bold text-5xl text-[#007744] leading-tight">
          Get in touch
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Here at Safari, our services are industry-standard for all our clients
          so that your rides are always safe and reliable. Please feel free to
          reach out for any concerns or inquiries – we appreciate all feedback!
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="bg-[#007744] px-2 py-2 rounded-full">
              <FiPhoneCall color="white" size={24} />
            </span>
            (+63) 2-8886-9619 (trunkline)
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-[#007744] px-2 py-2 rounded-full">
              <MdEmail color="white" size={24} />
            </span>
            info@safari.ph
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xl pt-8">
          <Input label="Full Name" type="text" />
          <Input label="Email Address" type="email" />
          <Input label="Contact Number" type="email" />
          <Textarea label="Message" placeholder="Leave message here..." />
          <Checkbox>
            <p className="text-sm">
              {" "}
              By proceeding with this form, you are freely and voluntarily
              giving your consent to Safari Rent-A-Car, Inc. in collecting and
              processing your provided data and personal information according
              to{" "}
              <span className="font-medium italic text-[#007744]">
                Safari's Data Privacy Policy and the Philippines Data Privacy
                Act of 2012.
              </span>
            </p>
          </Checkbox>
          <Button endContent={<IoSend/>} size="lg" className="bg-[#007744] text-white">
            Submit Message
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE - MAP */}
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994913.2917997006!2d121.1675275975583!3d12.428718715085099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c99fa59cd69b%3A0xfde3cdca8f38e9c0!2sSafari%20Rent-A-Car%2C%20Inc.%20-%20Head%20Office!5e0!3m2!1sen!2sus!4v1774940317826!5m2!1sen!2sus"
          className="w-full h-full min-h-screen"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
