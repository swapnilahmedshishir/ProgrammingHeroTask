const HelpHand = () => {
  return (
    <section className="min-h-[63rem] md:min-h-[40rem] lg:min-h-[35rem] xl:min-h-[45rem] HelpHand py-16">
      <div className="py-20 w-full px-4 md:px-0 lg:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="place-self-center order-2 md:order-1">
            <h1 className="text-[#011C52] font-extrabold text-4xl leading-[3.4rem] w-fit md:w-5/6">
              Give a Hand to Make The Better world
            </h1>
            <p className="py-6 w-fit">
              In a world where small actions can have a big impact, extending a
              helping hand is a powerful way to make a difference. Whether it’s
              donating warm clothes to those in need, supporting local food
              banks, or volunteering time for community projects, each act of
              kindness contributes to creating a better, more compassionate
              world. By coming together, we can address critical issues like
              poverty and homelessness, especially during challenging times like
              winter. Your support can provide hope, warmth, and comfort to
              countless lives. Let’s unite to spread positivity and build a
              future where no one is left behind.
            </p>
            <button className="btn btn-wide text-DarkBlue font-bold text-xl shadow-[0_8px_26.8px_0_rgba(0,82,127,0.17)] bg-[rgb(244,250,255)] rounded-[50px]">
              Donate Now
            </button>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              className="absolute w-[48%] -top-10 right-10 z-[2] rounded-full  hidden lg:block"
              src="/assets/helphandImage/helphandImage01.png"
              alt="helphandImage"
            />
            <img
              src="/assets/helphandImage/helphandImage02.png"
              alt="helphandImage"
              className="w-full lg:w-5/6 rounded-3xl lg:rounded-full mx-auto"
            />
            <img
              className="absolute -z-[1] w-[48%] -right-5 -bottom-9  hidden lg:block rounded-full"
              src="/assets/helphandImage/helphandImage03.png"
              alt="helphandImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpHand;
