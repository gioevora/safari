import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function DataPrivacyPolicy() {
  return (
    <section className="container mx-auto py-16 px-6 justify-center w-full max-w-6xl">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#007744]">
          Data Privacy Policy
        </h1>
        <span className="text-default-500 font-semibold">
          Last Updated: July 30, 2025
        </span>
      </div>

      <div className="space-y-4 py-4">
        <div>
          <p>
            At{" "}
            <span className="text-[#007744] font-bold">
              SAFARI RENT-A-CAR, INC.,
            </span>{" "}
            we value the privacy and security of our clients, employees, and
            third-party suppliers and vendors, and their data, information, and
            documents through our{" "}
            <span className="text-[#007744] font-bold">SAFARI </span> Data
            Privacy Policy 2025. This Policy outlines our commitment to protect
            data, information and documents in accordance with Republic Act No.
            10173, otherwise known as the{" "}
            <Link className="text-blue-500" href={siteConfig.links.policy}>
              “Data Privacy Act of 2012”,
            </Link>{" "}
            its implementing rules and regulations and other pertinent
            Philippine laws.
          </p>
        </div>

        <div>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <p className="mb-2">
                We collect and process the following data, information, and
                documents:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  For Applicants and Employees – Personal information such as
                  full names, address, email address, contact details, CV, etc.
                </li>

                <li>
                  For Individual Customers and Clients – Personal information
                  such as full names, address, email address, contact details,
                  financial information, etc.
                </li>

                <li>
                  For Corporate Customers and Clients – Company information such
                  as address, email address, contact details, company history
                  and profile, financial information, etc.
                </li>

                <li>
                  For Third-Party Suppliers and Vendors – Company information
                  such as address, email address, contact details, company
                  history and profile, financial information, etc.
                </li>
              </ul>
            </li>

            <li>
              <p className="mb-2">
                We process the collected data, information, and documents for
                the following purposes:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Rental Services – To effectively provide rental services such
                  as managing reservations and arranging bookings.
                </li>

                <li>
                  Customer Support – To communicate and respond to and/or
                  process inquiries, requests, comments, feedback, provide 24/7
                  communications, and resolve concerns.
                </li>

                <li>
                  Payment Processing – To ensure timely and accurate payments.
                </li>

                <li>
                  Marketing – For market research and other marketing
                  activities.
                </li>
                <li>
                  For Applicants – To evaluate qualifications and suitability
                  for the position being applied for.
                </li>
                <li>Legal – For any legal purposes it may serve.</li>
                <li>
                  Company per se – To evaluate employees, departmental and
                  overall company performance, and to improve Safari’s services.
                </li>
              </ul>
            </li>

            <li>
              <p className="mb-2">
                Ultimately, the data, information, and documents that were
                collected and processed:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Will be used to improve and enhance Safari’s services and
                  provide better experiences.
                </li>

                <li>
                  Will be shared and communicated exclusively within the company
                  to authorized employees or company representatives.
                </li>

                <li>
                  Will only be shared externally with necessary business
                  partners (such as third-party suppliers, vendors, financial
                  and insurance institutions, manpower agencies, and digital
                  payment platform companies), and when absolutely necessary or
                  when required by law, legal services and/or competent
                  Philippine authorities.
                </li>
              </ul>
            </li>

            <li>
              <p className="mb-2">Retention Period:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  We will store and retain collected data, information, and
                  documents for a period of no more than 5 years or when no
                  longer required, by which it will be deleted or disposed of in
                  a secure manner.
                </li>
              </ul>
            </li>

            <li>
              <p className="mb-2">
                Should you wish to access, correct, object, or erase said data,
                information, and documents, you may send your request to
                info@safari.ph, addressed to “Safari Customer Service
                Representative,” with the email subject “Data Privacy.”
              </p>
            </li>

            <li>
              <p className="mb-2">
                Should you have any questions about this Data Privacy Statement,
                please contact info@safari.ph addressed to “Safari Customer
                Service Representative,” with the email subject “Data Privacy.”
              </p>
            </li>

            <li>
              <p className="mb-2">
                This policy is subject to change without notice.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <p>
            By continuing, you agree and give your consent to{" "}
            <span className="font-bold text-[#007744]">
              SAFARI RENT-A-CAR, INC.
            </span>{" "}
            for the collection, processing, and use of your data, information
            and documents in accordance with this policy.
          </p>
        </div>
      </div>
    </section>
  );
}
