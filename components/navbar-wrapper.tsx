import { auth } from "@/lib/auth";
import NavbarClient from "./navbar";

const Navbar = async () => {
  const session = await auth();
  return <NavbarClient session={session} />;
};

export default Navbar;
