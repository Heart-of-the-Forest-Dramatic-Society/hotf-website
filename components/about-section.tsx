import Image from "next/image";
import { Separator } from "./ui/separator";

const trustees = [
  {
    name: "Kevin",
    image: "/logo.jpg",
    role: "Trustee",
  },
  {
    name: "Angie",
    image: "/logo.jpg",
    role: "Trustee",
  },
  {
    name: "Andrea",
    image: "/logo.jpg",
    role: "Trustee",
  },
];

const AboutUsSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6 text-center mb-16">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Heart of the Forest
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-muted-foreground leading-relaxed">
            The Heart of the Forest Dramatic Society is a community-driven
            theatre charity group that produces magical pantomimes. We put on
            three yearly performances during the February half-term, bringing
            joy and laughter to our community.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Team Section */}
        <div className="flex flex-col items-center justify-center gap-12 mt-16">
          <div className="text-center space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              Meet The Team
            </h2>
            <p className="text-muted-foreground">
              Dedicated volunteers making theatre magic happen
            </p>
          </div>

          {/* Trustees Section */}
          <div className="w-full">
            <h3 className="font-semibold text-xl sm:text-2xl text-center mb-8">
              Our Trustees
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <Image
                      src={trustee.image}
                      alt={`${trustee.name} - ${trustee.role}`}
                      width={448}
                      height={448}
                      className="relative rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 ring-4 ring-background"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-bold text-lg sm:text-xl">
                      {trustee.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {trustee.role}
                    </p>
                  </div>
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
