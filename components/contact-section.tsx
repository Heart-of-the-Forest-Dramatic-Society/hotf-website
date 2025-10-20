"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [showEmail, setShowEmail] = useState(false);

  // Email parts stored separately to prevent bot scraping
  const emailUser = "heartoftheforestdramasociety";
  const emailDomain = "gmail";
  const emailTld = "com";
  const email = `${emailUser}@${emailDomain}.${emailTld}`;

  const handleEmailClick = () => {
    setShowEmail(true);
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-2xl">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">Email Us</h3>
            <button
              type="button"
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 break-words block cursor-pointer"
              aria-label="Send email to Heart of the Forest Drama Society"
            >
              {showEmail ? email : "Click to reveal email"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
