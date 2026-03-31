import { GrLocation } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { Divider } from "@heroui/divider";

export default function Locations() {
  return (
    <section className="container mx-auto px-6 flex-grow">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">HEAD OFFICE</h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  1839 Eureka St., Brgy. La Paz, Makati City, NCR, Philippines
                  1204
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>(+63) 2-8886-9619 (Trunkline)</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>
                  0923-280-9656, 0917-772-1968, 0927-044-9584, 0906-292-4089
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>
                  mabay@safarirentacarinc.com, mhtaleon@safarirentacarinc.com
                  rlmarquez@safarirentacarinc.com,
                  jsflores@safarirentacarinc.com,
                  avaliente@safarirentacarinc.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7723.112229001375!2d121.008463!3d14.567358000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c99fa5780c73%3A0x92efe9c20c83004c!2s1839%20Eureka%2C%20Makati%20City%2C%201204%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1774929077177!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">
              SAFARI STA. ROSA, LAGUNA
            </h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  Unit 210, 2nd Floor, Arcadia 1 Building, Sta. Rosa – Tagaytay
                  Road, Greenfield City, Brgy. Don Jose, Sta. Rosa City, Laguna,
                  Philippines 4026
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>
                  (+63) 2-899-492-27 (Manila line), (049)-541-1958 (Laguna line)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>0916-652-1572, 0947-899-6535, 0922-861-9078</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>mjardin@safarirentacarinc.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734.217048301893!2d121.05276869357914!3d14.2468911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7d476ff8d929%3A0x8a9834f735e7ae38!2sSafari%20Rent%20A%20Car%20-%20Sta.%20Rosa!5e0!3m2!1sen!2sus!4v1774929457033!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">
              SAFARI CALAMBA, LAGUNA
            </h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  Unit A-6, 1st Floor, Regalena Bldg., 9049 Pan-Philippine
                  Highway, Brgy. Turbina, Calamba City, Laguna, Philippines 4027
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>
                  (+63) 2-8359-4924 (Manila line), (049)-545-2588 (Laguna line)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>0916-652-1594, 0925-741-6947, 0932-227-4443</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>jalmendras@safarirentacarinc.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7736.12154005439!2d121.138592!3d14.191219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63973d12530b%3A0x97348b4ae83338a6!2sSafari%20Rent%20A%20Car%2C%20Inc.%20-%20Calamba!5e0!3m2!1sen!2sus!4v1774929777700!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">
              SAFARI GEN. TRIAS, CAVITE
            </h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  JLASJ Bldg., Blk 2, Lot2, Metropolis Greens, Governor’s Drive,
                  Brgy. Manggahan, General Trias City, Cavite, Philippines 4107
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>
                  (+63) 2-8330-9065 (Manila Line), (046)-472-1492 (Cavite Line)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>
                  0917-184-4657, 0919-003-2171, 0926-850-6004, 0909-278-5254
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>
                  sales@safarirentacarinc.com,
                  cav.acctofficer@safarirentacarinc.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7732.694446803271!2d120.905223!3d14.291247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d55d2aeae59d%3A0x231741d7c77b13dc!2sSafari%20Rent%20A%20Car%20-%20Cavite!5e0!3m2!1sen!2sus!4v1774933645550!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">
              SAFARI CLARK, PAMPANGA
            </h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  Room 115 & 116, Clark Welcome Center Office Suites, SCTEX
                  Road, Clark Freeport Zone, Mabalacat City, Pampanga,
                  Philippines 2023
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>
                  (045)-499-8467 (Manila line), (045)-499-8473 (Clark Line)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>
                  0905-346-4356, 0933-874-0104, 0956-376-9947, 0916-438-4023
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>rkreyes@safarirentacarinc.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7701.6667790542515!2d120.57157899999999!3d15.167491999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f29a29054a7f%3A0x5ab72fd8eb7e9f6c!2sSafari%20Rent%20A%20Car%20-%20Clark!5e0!3m2!1sen!2sus!4v1774933777348!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#009c00]">
              SAFARI CEBU, MACTAN
            </h1>
            <Divider className="my-4" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <GrLocation color="white" size={18} />
                </div>
                <span>
                  Unit 68, 2nd Floor, Mactan Town Center, Basak-Marigondon Road,
                  Brgy. Basak, Lapu-Lapu City, Mactan, Cebu, Philippines 6015
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdOutlinePhoneInTalk color="white" size={18} />
                </div>
                <span>
                 (032)-268-4353 (Cebu line)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaMobileRetro color="white" size={18} />
                </div>
                <span>
                  0917-843-7162, 0917-154-1864, 0916-661-4190
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <MdEmail color="white" size={18} />
                </div>
                <span>mpidor@safarirentacarinc.com, emonton@safarirentacarinc.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#009c00] px-2 py-2 rounded-full">
                  <FaClock color="white" size={18} />
                </div>
                <span>
                  Office: Monday – Friday, 8:00AM- 6:00 PM (except holidays)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7851.133361307146!2d123.96530600000001!3d10.296455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999ff3c55aa71%3A0x7a409306df017405!2sSafari%20Rent%20A%20Car%20-%20Cebu!5e0!3m2!1sen!2sus!4v1774933882960!5m2!1sen!2sus"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
