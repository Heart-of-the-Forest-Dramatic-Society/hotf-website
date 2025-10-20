import { Heart } from "lucide-react";

const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const endYear = Math.max(currentYear, startYear);

  return (
    <footer className="w-full border-t bg-muted/30 mt-auto">
      <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
          <span className="text-sm">by the Heart of the Forest team</span>
        </div>
        <p className="text-sm text-muted-foreground" suppressHydrationWarning>
          ©{" "}
          {endYear === startYear ? `${startYear}` : `${startYear} - ${endYear}`}{" "}
          Heart of the Forest Dramatic Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
