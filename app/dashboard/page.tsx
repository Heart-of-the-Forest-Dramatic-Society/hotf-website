import Navbar from "@/components/navbar-wrapper";
import Footer from "@/components/footer";
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
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-6 w-full max-w-md border-2 rounded-2xl p-8 shadow-lg bg-card">
            <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground text-center">
              Welcome to your demo dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/">Home</Link>
              </Button>
              <div className="flex-1">
                <SignOut />
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

export default Dashboard;
