import Image from 'next/image';
import Link from 'next/link';
import Logooo from "@/assets/logooo.png";


const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-800 px-8 pt-20 pb-32 relative bg-black z-0">
        {/* Background CREEM text */}
        <div className="absolute inset-0 z-[-1] flex items-center justify-center overflow-hidden pointer-events-none bg-transparent">
        <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
            Astute
          </p>
        </div>

        {/* Footer content */}
        <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-10">
          <div>
            <div className="mr-4 md:flex mb-4 z-10">
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <Image
                  alt="Astute Icon"
                  width={30}
                  height={30}
                  src={Logooo}
                />
                <span className="font-bold text-white">Astute ai</span>
              </Link>
            </div>
            <div className="relative z-10">Copyright © 2024 Astute ai</div>
            <div className="mt-2 relative z-10">All rights reserved</div>
          </div>

          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/blog"
              >
                Blog
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="/about"
              >
                About Us
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="https://x.com/creem_io"
              >
                Twitter
              </Link>
              <Link
                className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                href="https://discord.gg/q3GKZs92Av"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;