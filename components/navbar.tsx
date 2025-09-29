import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import { SignOut } from "./sign-out";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between items-center p-4 w-full">
      <div>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full w-16 h-16 object-cover"
        />
      </div>

      <div className="flex gap-2">
        {/* <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button> */}
        {!session && (
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
        {session && <SignOut />}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
