"use server";

import { executeAction } from "./executeAction";
import { schema } from "./schema";
import db from "./db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { ZodError } from "zod";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");

      let validatedCredentials;
      try {
        validatedCredentials = schema.parse({
          email,
          password,
        });
      } catch (error) {
        if (error instanceof ZodError) {
          // Get the first validation error message
          const firstError = error.issues[0];
          throw new Error(firstError.message);
        }
        throw error;
      }

      // Check if user already exists
      const existingUser = await db.user.findUnique({
        where: { email: validatedCredentials.email.toLowerCase() },
      });

      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      // Hash the password with a secure salt rounds
      const saltRounds = 12;
      let hashedPassword: string;

      try {
        hashedPassword = await bcrypt.hash(
          validatedCredentials.password,
          saltRounds
        );
      } catch {
        throw new Error("Failed to hash password");
      }

      await db.user.create({
        data: {
          email: validatedCredentials.email.toLowerCase(),
          hashedPassword: hashedPassword,
        },
      });

      // Redirect to sign-in page on success
      redirect("/sign-in");
    },
  });
};

export { signUp };
