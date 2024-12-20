const PARTNERS = () => {
  return (
    <section className="bg-[#FFFFFF] PARTNERS min-h-[11.24rem]  font-montserrat pt-[5.81rem] pb-20 md:pb-[14.79rem]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-center font-bold text-3xl text-DarkBlue">
          OUR PARTNERS
        </h1>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-[6.19rem]">
        {/* animation image style start */}
        <div className="home_patner_img_animation">
          <div className="patner_img_item item1">
            <img
              src="/assets/tojoGlobalIcon.png"
              alt="patner tojo global Image"
              className=" w-24 md:w-[21.75rem] h-16 md:h-[7.13rem] object-contain"
            />
          </div>
          <div className="patner_img_item item2">
            <img
              src="/assets/tojoNewsIcon.png"
              alt="patner of tojo news "
              className="w-24 md:w-[21.75rem] h-16 md:h-[7.13rem] object-contain"
            />
          </div>
          <div className="patner_img_item item3">
            <img
              src="/assets/tojoGlobalIcon.png"
              alt="patner tojo global Image"
              className="w-24 md:w-[21.75rem] h-16 md:h-[7.13rem] object-contain"
            />
          </div>
          <div className="patner_img_item item4">
            <img
              src="/assets/tojoNewsIcon.png"
              alt="patner of tojo news "
              className="w-24 md:w-[21.75rem] h-16 md:h-[7.13rem] object-contain"
            />
          </div>
        </div>
        {/* animation image style end */}
      </div>
    </section>
  );
};

export default PARTNERS;
