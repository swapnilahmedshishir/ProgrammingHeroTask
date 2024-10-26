import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:mx-[8rem] p-4 ring-2 ring-white rounded-3xl -translate-y-2/4">
        <div
          className={`min-h-fit py-24 bg-[rgb(255,255,255)] bg-[url('/assets/bg-shadow.png')] bg-cover bg-center flex justify-center items-center rounded-3xl border border-slate-300`}
        >
          <div className="text-center">
            <h1 className="footerHeroBannerHedding mb-5 md:m-1">
              Subscribe to our Newsletter
            </h1>
            <h4 className="footerHeroBannerSmallHedding">
              Get the latest updates and news right in your inbox!
            </h4>

            <form>
              <fieldset className="form-control w-80 mx-auto mt-5">
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn bg-[#e0be7685] join-item bg-[url('/assets/bg-shadow.png')] bg-cover bg-center">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="w-40 mx-auto -mt-24">
        <img src="/assets/logo-footer.png" alt="" />
      </div>
      <div className="footer grid md:flex justify-between text-neutral-content lg:px-24 pb-7 pt-20 container mx-auto">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className="text-white w-[250px]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="form-control w-80">
            <p className="text-white w-[200px] mb-5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#e0be7685] join-item bg-[url('/assets/bg-shadow.png')] bg-cover bg-center">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="w-[90%] mx-auto py-7">
        <p className="text-white text-center">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
