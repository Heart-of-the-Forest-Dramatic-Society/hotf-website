import { SignOut } from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (session.user && session.user.email !== "test@test.com") {
    redirect("/");
  }

  return (
    <div className="relative h-screen">
      <div className="absolute bottom-4 right-4 flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-md p-2 shadow-md border border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold">Demo View</h1>
        <div className="flex gap-2 mt-2">
          <Button asChild>
            <Link href="/home">Home</Link>
          </Button>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
