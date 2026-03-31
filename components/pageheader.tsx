export const PageHeader = ({
  title,
  subtitle,
  bgImage,
}: {
  title: string;
  subtitle?: string;
  bgImage?: string;
}) => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage || "/default-header.jpg"})`,
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};
