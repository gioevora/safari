"use client";

import { usePathname } from "next/navigation";
import { PageHeader } from "@/components/pageheader";

const headers: Record<string, any> = {
  location: {
    title: "Our Locations",
    bgImage: "https://ik.imagekit.io/9iubdrvln/footer-bg.jpg?updatedAt=1759463656356",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const key = pathname.split("/")[1];

  const header = headers[key];

  return (
    <>
      {header && <PageHeader {...header} />}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="container mx-auto inline-block justify-center px-4">
          {children}
        </div>
      </section>
    </>
  );
}