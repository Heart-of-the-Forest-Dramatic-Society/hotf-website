const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 w-full px-4 sm:px-6 lg:px-8 py-10">
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-lg">
        2024 - {new Date().getFullYear()} Heart of the Forest Dramatic Society.
      </p>
    </footer>
  );
};

export default Footer;
