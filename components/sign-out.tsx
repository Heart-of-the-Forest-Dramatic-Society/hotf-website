"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center">
      <Button onClick={handleSignOut} variant="destructive">
        Sign Out
      </Button>
    </div>
  );
};

export { SignOut };
