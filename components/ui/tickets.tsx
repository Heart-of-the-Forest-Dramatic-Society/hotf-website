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
    "21th February 2026 2pm - 4:30pm",
    "21th February 2026 6pm - 8:30pm",
    "22st February 2026 2pm - 4:30pm",
  ],
  duration: "2 hours 30 minutes including interval",
  venue: "Gresley Old Hall",
  price: "£7",
  posterSrc: "/poster.png",
  posterAlt: "Robin Hood",
};

const Tickets = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-10 w-full px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center border p-4 sm:p-6 rounded-lg gap-4 sm:gap-6 shadow-md dark:shadow-gray-800 dark:border-gray-800 hover:shadow-lg transition-shadow duration-600 hover:scale-105 w-full ">
          <Image
            src={event.posterSrc}
            alt={event.posterAlt}
            width={200}
            height={200}
            className="rounded-lg w-32 h-40 sm:w-40 sm:h-60 md:w-56 md:h-84 object-contain"
          />
          <div className="flex flex-col items-center sm:items-start justify-between gap-4 w-full h-full text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {event.title}
            </h2>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2 w-full">
              <p className="text-sm sm:text-base">{event.description}</p>

              <div>
                <strong className="text-sm sm:text-base">Dates:</strong>
                <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                  {event.dates.map((date, index) => (
                    <li key={index} className="break-words">
                      {date}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm sm:text-base">
                <strong>Time:</strong> {event.duration}
              </p>

              <p className="text-sm sm:text-base">
                <strong>Venue:</strong> {event.venue}
              </p>

              <p className="text-sm sm:text-base">
                <strong>Price:</strong> {event.price} per person
              </p>
            </div>
            <Button
              className="w-full sm:w-auto px-6 py-2 text-base sm:text-lg h-10"
              asChild
            >
              <Link href="/tickets">Buy Tickets</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
