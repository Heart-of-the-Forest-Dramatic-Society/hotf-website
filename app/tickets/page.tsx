"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const TicketsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-bold mb-6">Tickets</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>You are going to Ticket Source for our tickets</p>
          <Button asChild className="flex items-center gap-2">
            <Link href="https://ticketsource.com" target="_blank">
              Ticket Source
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
