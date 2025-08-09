import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Website Coming Soon</h1>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="destructive"
              size="lg"
              className="text-xl font-bold"
            >
              <Link href="/signin">Admin</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full">
        <p>
          2024 - {new Date().getFullYear()} Heart of the Forest Dramatic Society
        </p>
      </footer>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
