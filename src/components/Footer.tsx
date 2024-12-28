import Image from "next/image";
import Link from "next/link";

import Logooo from "@/assets/logooo.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-800 px-8 pt-20 pb-10 relative bg-black z-0">
        <div className="absolute inset-0 z-[-1] flex items-center justify-center overflow-hidden pointer-events-none bg-transparent">
          {/* <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
            Astute
          </p> */}
        </div>

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
            {/* <div className="mt-2 relative z-10 ">All rights reserved</div> */}
          </div>

          <div className="grid grid-cols-3 gap-24 items-start mt-16 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              {" "}
              <h3 className="text-white font-bold text-sm sm:text-base">
                Products
              </h3>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/pricing"
              >
                ShopFrontAI
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/contact"
              >
                Blogger AI
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/blog"
              >
                Social Spark
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/blog"
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
                href="/privacy"
              >
                Blog{" "}
              </Link>
              
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <h3 className="text-white font-bold text-sm sm:text-base">
                Company
              </h3>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="https://x.com/creem_io"
              >
                About us
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="https://discord.gg/q3GKZs92Av"
              >
                Careers{" "}
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="https://discord.gg/q3GKZs92Av"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black ">
      <div className="size-full mx-auto max-w-6xl pb-8 px-4 md:px-12 flex items-center justify-between relative">
        <p className="text-sm text-white">
          © 2024 Astute. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a className="p-1" href="#" aria-label="Instagram">
            <svg
              className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
              />
            </svg>
          </a>
          <a className="p-1" href="#" aria-label="Twitter">
            <svg
              className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
              />
            </svg>
          </a>
          <a className="p-1" href="#" aria-label="GitHub">
            <svg
              className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="#ffffff"
                  d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853c.891 1.975 1.51 4.608 1.724 6.61c.102.95.127 1.906-.056 2.549c-.197.687-.867 1.173-1.518 1.555l-.322.183l-.334.186q-.26.144-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 1 1-.894-1.79l-.006-.004l1.89-.936l.581-.289l.524-.27q.255-.133.51-.26l.326-.182c.393-.222.602-.372.681-.5c.048-.088.084-.281.072-.79c-.053-.694-.117-1.282-.187-1.897l-.06-.476c-.204-1.646-.648-3.64-1.367-5.105c-.352-.696-.65-1.083-1.065-1.249l-.467-.191c-.551-.215-.862-.213-1.264-.18l-.176.016c-.457.053-.957.147-1.522.307l-.455.135l-.28.094a7.994 7.994 0 0 1-4.796-.128l-.356-.12a4.382 4.382 0 0 0-.89-.206c-.403-.033-.714-.035-1.264.18l-.467.19c-.414.166-.713.553-1.065 1.25c-.719 1.465-1.163 3.458-1.367 5.105l-.06.476c-.07.615-.134 1.203-.187 1.897c-.012.509.025.702.072.79c.079.128.288.278.681.5l.326.182q.255.127.51.26l.524.27l.581.29l1.89.935l-.006.003a1 1 0 1 1-.894 1.79l-.577-.285l-.716-.356l-.523-.27l-.526-.283l-.333-.185l-.322-.183c-.65-.382-1.32-.868-1.518-1.555c-.183-.643-.158-1.6-.056-2.549c.215-2.002.833-4.635 1.724-6.61c.55-1.217 1.258-2.325 2.517-2.853l.527-.216C10.97 4.261 11.755 4 12.497 4zm-.877 12.92l-.004-.024l-.003-.021a3.22 3.22 0 0 1 1.174-3.14c-.89-.178-1.88-.248-3.052-.248a1 1 0 0 1-.012-2c1.238 0 2.362.063 3.354.267c.57-.466 1.276-.743 2.083-.743c1.9 0 2.68 1.55 2.68 2.974c0 1.88-1.047 3.145-2.534 4.16a9.47 9.47 0 0 1-2.658 1.26c.169.399.294.866.294 1.374a1.928 1.928 0 0 1-.557 1.31a1.931 1.931 0 0 1-2.743-.02a1.928 1.928 0 0 1-.556-1.29a1 1 0 1 1 2-.002a.055.055 0 0 0 .015.028l.017-.007a.055.055 0 0 0-.016-.018a1 1 0 0 1-.024.006zm.872.152a.05.05 0 0 1 .01.023l-.001.004c0 .007.002.014.006.018a.055.055 0 0 1-.013.013a1.055 1.055 0 0 1-.013-.014c.004-.004.006-.01.006-.018c0-.007.003-.014.01-.023zm.015-.028a1 1 0 0 0-.04-.042l-.008.006l-.019.032l-.004-.02l-.011.008l.013-.03a.05.05 0 0 1-.01-.019a.055.055 0 0 1 .016-.018zm.06-.006zm-.004-.015zm-.014-.008zm-.002-.004l-.003-.01zm-.034-.614zm-.002-.006z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>{" "}
      {/* <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff" 
        refresh
      /> */}
    </div>
  );
};

export default Footer;
