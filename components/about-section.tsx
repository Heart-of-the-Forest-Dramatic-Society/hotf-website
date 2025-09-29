import Image from "next/image";

const trustees = [
  {
    name: "Kevin",
    image: "/logo.jpg",
  },
  {
    name: "Angie",
    image: "/logo.jpg",
  },
  {
    name: "Andrea",
    image: "/logo.jpg",
  },
];

const AboutUsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            About The Heart of the Forest Team
          </h1>
          <p className="text-sm sm:text-base max-w-2xl text-center">
            The Heart of the Forest Dramatic Society is a community-driven
            theater charity group that produces pantomimes. That do 3 yearly
            performances in february half term.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Meet The Team
          </h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              Trustees
            </h2>
            <div className="flex flex-row items-center justify-center gap-4">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <p className="text-center text-lg sm:text-lg font-bold">
                    {trustee.name}
                  </p>
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    width={300}
                    height={300}
                    className="rounded-full w-48 h-48 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
