import Navbar from "@/components/navbar-wrapper";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Ticket } from "lucide-react";

const TicketsPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col items-center justify-center w-full max-w-2xl">
            <div className="flex flex-col items-center text-center gap-6 border-2 rounded-2xl p-8 sm:p-12 shadow-lg bg-card">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Ticket className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Get Your Tickets
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-md">
                  Ready to join us for an unforgettable theatrical experience?
                  Purchase your tickets through our trusted partner.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 w-full pt-4">
                <Button
                  asChild
                  size="lg"
                  className="flex items-center gap-2 h-12 text-base w-full sm:w-auto min-w-[200px]"
                >
                  <Link
                    href="https://ticketsource.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ticket Source
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>

                <p className="text-sm text-muted-foreground">
                  You'll be redirected to TicketSource to complete your purchase
                </p>
              </div>

              <div className="pt-6 border-t w-full">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default TicketsPage;
