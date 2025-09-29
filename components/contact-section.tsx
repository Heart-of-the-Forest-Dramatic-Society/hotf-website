const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Contact Us
        </h1>
        <div className="flex flex-row items-center justify-center gap-6 w-full max-w-4xl text-center">
          <p className="text-lg sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg">
            Email: heartoftheforestdramasociety@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
