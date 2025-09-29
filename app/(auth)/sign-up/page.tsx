import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/action";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const SignUpPage = async ({
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
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 border border-gray-200 rounded-md p-4 shadow-md bg-white dark:bg-gray-900 dark:border-gray-800">
        <h1 className="text-2xl font-bold">Sign Up</h1>

        {error && (
          <div className="w-full p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="relative w-full">
          <div className="relative flex items-center justify-center text-sm">
            <hr
              className="absolute w-full border-t border-gray-200 dark:border-gray-700"
              role="presentation"
            />
            <span className="relative bg-white dark:bg-gray-900 px-3 py-1 z-10 text-gray-600 dark:text-gray-400">
              Or continue with
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <form
              action={async (formData: FormData) => {
                "use server";
                try {
                  await signUp(formData);
                } catch (error) {
                  // Check if this is a redirect error (success case)
                  if (isRedirectError(error)) {
                    throw error; // Re-throw redirect errors
                  }

                  // Handle different types of errors
                  let errorMessage = "An unexpected error occurred";

                  if (error instanceof Error) {
                    if (
                      error.message === "User with this email already exists"
                    ) {
                      errorMessage =
                        "An account with this email already exists";
                    } else if (error.message === "Failed to hash password") {
                      errorMessage =
                        "Failed to process password. Please try again.";
                    } else if (
                      error.message === "Please enter a valid email address"
                    ) {
                      errorMessage = "Please enter a valid email address";
                    } else if (
                      error.message ===
                      "Password must be at least 8 characters long"
                    ) {
                      errorMessage =
                        "Password must be at least 8 characters long";
                    } else {
                      errorMessage = error.message;
                    }
                  }
                  redirect(
                    `/sign-up?error=${encodeURIComponent(errorMessage)}`
                  );
                }
              }}
              className="space-y-4 w-full mt-4"
            >
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
                required
                name="email"
                autoComplete="email"
              />
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full"
                  required
                  name="password"
                  autoComplete="new-password"
                  minLength={8}
                  aria-describedby="password-help"
                />
                <p
                  id="password-help"
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  Minimum 8 characters
                </p>
              </div>
              <Button className="w-full">Sign Up</Button>
            </form>
            <p className="text-sm text-gray-500">
              <Link href="/sign-in">Already have an account? Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
