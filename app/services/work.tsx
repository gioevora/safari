import {
  FaCar,
  FaUserFriends,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Submit an Inquiry",
      description: "Fill out the inquiry form on our website or inquiry page.",
      icon: <FaCar size={20} />,
    },
    {
      id: "02",
      title: "Chat With Us",
      description: "Message us via Facebook or live chat support.",
      icon: <FaUserFriends size={20} />,
    },
    {
      id: "03",
      title: "Send an Email",
      description: "Reach us at info@safari.ph for assistance.",
      icon: <FaEnvelope size={20} />,
    },
    {
      id: "04",
      title: "Call Us Directly",
      description: "Contact us through our available phone numbers.",
      icon: <FaPhoneAlt size={20} />,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 group-hover:from-[#009c00]/80 transition" />

            {/* icon */}
            <div className="absolute top-5 left-5 bg-[#ffb000] p-3 rounded-full text-black shadow-md">
              {step.icon}
            </div>

            {/* step number */}
            <div className="absolute top-4 right-4 text-white/20 text-4xl font-bold">
              {step.id}
            </div>

            {/* content */}
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <h3 className="text-lg font-bold text-[#ffb000]">
                {step.title}
              </h3>
              <p className="text-sm text-white/80 leading-snug">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}