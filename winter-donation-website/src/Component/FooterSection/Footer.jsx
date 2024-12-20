import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-[#011C52] FooterSection py-10 px-5 md:px-20 lg:px-40 font-montserrat">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* First Column */}
        <div className="col-span-2">
          <img src="/assets/Logo.png" alt="footer logo image" />
          <p className="text-white pt-4 text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero cum,
            officiis mollitia ducimus commodi vitae non natus officia
            necessitatibus eum quia maxime aspernatur?
          </p>
          <div className="mt-5">
            <h4 className="text-white text-lg font-semibold">Follow us</h4>
            <ul className="flex gap-5 pt-3">
              <li className="bg-white p-3 rounded-full">
                <a href="/facebook">
                  <FaInstagram className="text-black" />
                </a>
              </li>
              <li className="bg-white p-3 rounded-full">
                <a href="">
                  <FaFacebookF className="text-black" />
                </a>
              </li>
              <li className="bg-white p-3 rounded-full">
                <a href="">
                  <FaXTwitter className="text-black" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="">
          <h4 className="text-white text-lg font-bold">Quick Links</h4>
          <ul className="mt-5 text-white text-sm md:text-base">
            <li className="mb-2">
              <a href="">Make a Donation</a>
            </li>
            <li className="mb-2">
              <a href="">Tojo Teams</a>
            </li>
            <li className="mb-2">
              <a href="">Latest News</a>
            </li>
            <li className="mb-2">
              <a href="">FAQ</a>
            </li>
            <li className="mb-2">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="col-span-2">
          <h4 className="text-white text-lg font-bold">Get in Touch</h4>
          <ul className="mt-5 text-white text-sm md:text-base">
            <li className="mb-2 flex items-center">
              <AiOutlineHome className="text-xl mr-3" />
              Tojo Foundation, House #00 Mirpur 1212, Bangladesh
            </li>
            <li className="mb-2 flex items-center">
              <MdPhoneInTalk className="text-xl mr-3" />
              +88 01717-000111
            </li>
            <li className="mb-2 flex items-center">
              <IoIosMail className="text-xl mr-3" />
              info@tojofoundation.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center">
        <p className="text-sm md:text-base text-white">
          ©2024 Tojo Foundation | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
