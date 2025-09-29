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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center w-[400px] h-[500px] border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>

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
          className="flex flex-col gap-3"
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border-gray-200 dark:border-gray-800"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border-gray-200 dark:border-gray-800"
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <Button asChild className="w-1/2 mt-4 mx-auto">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
