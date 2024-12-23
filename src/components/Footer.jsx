
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#121C22] text-white">
      <section className="py-16">
        <div className="w-11/12 mx-auto text-center">
          {/* Left Section */}
          <div>
            
          <h1 className="text-2xl font-bold text-white">
            MealBridge
          </h1>
            <p className="mt-4 text-white/80">
            Bridge the Gap, Share the Meal.
            </p>
            {/* Social Icons */}
            <div className="flex mt-6 space-x-4 justify-center text-white/80">
              <a
                href="https://www.facebook.com/samad.reza.31" target="blank"
                className="text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_samad_reza_" target="blank"
                className="text-red-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a  href="https://x.com/SamadReza71" target="blank" className="text-blue-500" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/abdus-samad-3989b5317" target="_blank"
                className="text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

          </div>
        </div>
        <aside className="text-center text-sm text-white/70 mt-8">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by MealBridge
        </p>
      </aside>
      </section>
     
    </div>
  );
};

export default Footer;