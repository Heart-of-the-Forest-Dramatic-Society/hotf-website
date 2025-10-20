import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

interface Event {
  title: string;
  description: string;
  dates: string[];
  duration: string;
  venue: string;
  price: string;
  posterSrc: string;
  posterAlt: string;
}

const event: Event = {
  title: "Robin Hood",
  description:
    "A classic tale of a man who steals from the rich and gives to the poor.",
  dates: [
    "21st February 2026 @2pm - 4:30pm",
    "21st February 2026 @6pm - 8:30pm",
    "22nd February 2026 @2pm - 4:30pm",
  ],
  duration: "2 hours 30 minutes including interval",
  venue: "Gresley Old Hall",
  price: "£7",
  posterSrc: "/poster.png",
  posterAlt: "Robin Hood",
};

const Tickets = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Upcoming Show
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Book your tickets for our next magical performance
          </p>
        </div>

        {/* Event Card */}
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 lg:gap-8 border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-card w-full">
          {/* Poster */}
          <div className="flex-shrink-0">
            <Image
              src={event.posterSrc}
              alt={event.posterAlt}
              width={256}
              height={384}
              className="rounded-xl w-48 h-64 sm:w-56 sm:h-80 lg:w-64 lg:h-96 object-cover shadow-md"
              priority
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col gap-5 w-full text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {event.title}
            </h3>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Dates */}
              <div className="space-y-2">
                <p className="font-semibold text-base sm:text-lg flex items-center justify-center lg:justify-start gap-2">
                  <span aria-label="Calendar" role="img">
                    📅
                  </span>{" "}
                  Performance Dates
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {event.dates.map((date, index) => (
                    <li key={index} className="leading-relaxed">
                      {date}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                <span className="font-semibold">⏱️ Duration:</span>
                <span className="text-muted-foreground">{event.duration}</span>
              </div>

              {/* Venue */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                <span className="font-semibold">📍 Venue:</span>
                <span className="text-muted-foreground">{event.venue}</span>
              </div>

              {/* Price */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                <span className="font-semibold">💷 Price:</span>
                <span className="text-muted-foreground">
                  {event.price} per person
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full sm:w-auto sm:self-center lg:self-start h-12 text-base font-medium shadow-sm mt-2"
              size="lg"
              asChild
            >
              <Link href="/tickets">Buy Tickets Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
