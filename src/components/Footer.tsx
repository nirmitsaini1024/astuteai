import Image from "next/image";
import Link from "next/link";

import Logooo from "@/assets/logooo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-800 px-8 pt-20 pb-10 relative bg-black z-0">
        <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-10">
          <div>
            <div className="mr-4 md:flex mb-4 z-10">
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <Image alt="Astute Icon" width={40} height={40} src={Logooo} />
                <span className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">
                  Astute ai
                </span>
              </Link>
            </div>
            <div className="relative z-10 text-white text-bold">
              AI SaaS for the future E-Commerce
            </div>
          </div>

          <div className="grid grid-cols-3 gap-24 items-start mt-16 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              {" "}
              <h3 className="text-white font-bold text-sm sm:text-base">
                Products
              </h3>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/product/shopfrontai"
              >
                ShopFrontAI
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/product/bloggerai"
              >
                Blogger AI
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/product/socialspark"
              >
                Social Spark
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/product/insightq"
              >
                InsightQ
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <h3 className="text-white font-bold text-sm sm:text-base">
                Resources
              </h3>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/blog"
              >
                Blog{" "}
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/auth/admin"
              >
                Admin{" "}
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <h3 className="text-white font-bold text-sm sm:text-base">
                Company
              </h3>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="about-us"
              >
                About us
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/careers"
              >
                Careers{" "}
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/contact-us"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black ">
        <div className="size-full mx-auto max-w-6xl pb-8 px-4 md:px-12 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <a
              className="p-1"
              href="https://www.linkedin.com/company/astute-ai/"
              aria-label="Linkedin"
            >
              <FaLinkedin fill="white" />
            </a>

            <a
              className="p-1"
              href="https://www.instagram.com/astuteai/"
              aria-label="Instagram"
            >
              <FaInstagram fill="white" />
            </a>
            <a
              className="p-1"
              href="https://x.com/Astute_AI"
              aria-label="Twitter"
            >
              <FaTwitter fill="white" />
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
