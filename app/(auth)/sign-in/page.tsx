import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignIn = async ({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) => {
  const session = await auth();
  const { error } = await searchParams;

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-md border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 sm:p-8 shadow-lg bg-card">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Sign In</h1>

        {error && (
          <div className="w-full p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md dark:bg-red-900/20 dark:border-red-800 dark:text-red-400 mb-4">
            {error === "CredentialsSignin"
              ? "Invalid email or password. Please try again."
              : error}
          </div>
        )}

        <form
          action={async (formData: FormData) => {
            "use server";
            try {
              await signIn("credentials", formData);
            } catch (error) {
              // Handle sign-in errors
              let errorMessage = "An unexpected error occurred during sign-in";

              if (error instanceof Error) {
                if (error.message.includes("CredentialsSignin")) {
                  errorMessage = "Invalid email or password";
                } else {
                  errorMessage = error.message;
                }
              }

              redirect(`/sign-in?error=${encodeURIComponent(errorMessage)}`);
            }
          }}
          className="flex flex-col gap-4 w-full"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              className="h-11"
            />
          </div>
          <Button type="submit" className="w-full h-11 mt-2">
            Sign In
          </Button>
        </form>

        <Button asChild variant="outline" className="w-full mt-4">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
