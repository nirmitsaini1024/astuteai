"use client";
import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";

import Logooo from "@/assets/logooo.png";
import { CodeXml, Feather, MenuIcon, Wallet2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ActionButton } from "@/components/Action-button";
import Image from "next/image";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(false); // Close dropdown on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById("waitlist");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <header
        className={
          "pb-4 border-b border-transparent max-md:backdrop-blur md:border-none sticky top-0 z-10"
        }
      >
        <div className={"container max-md:px-4 "}>
          <div
            className={
              "flex items-center justify-between  md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur border-zinc-800"
            }
          >
            <Link href={"/"}>
              <div className="flex items-center">
                <Image
                  src={Logooo}
                  height={40}
                  width={40}
                  className="object-contain"
                  alt="Stute.ai Logo"
                />
                <span className="text-white font-semibold text-lg">
                  stute.ai
                </span>
              </div>
            </Link>

            <section className={"max-md:hidden"}>
              <nav className={"flex gap-8 items-center text-sm"}>
              <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Product">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
          <ProductItem
              title="Blog"
              href="/blog"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Read our latest articles and blogs on various topics."
            />
            {/* <HoveredLink href="/blog">Blog</HoveredLink> */}

          </div>
        </MenuItem>
      </Menu>

                {/* <div className="relative group">
                  <button
                    className={"text-white/90 hover:text-white transition"}
                  >
                    Resources
                  </button>

                  <div className="absolute top-full mt-2 w-28 bg-black border border-zinc-800 text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                    <Link
                      href={"#"}
                      className={"block px-4 py-2 hover:bg-zinc-700"}
                    >
                      Blog
                    </Link>
                  </div>
                </div> */}
              </nav>
            </section>

            <section className={"flex max-md:gap-4 items-center"}>
              <Link href="#waitlist" onClick={handleSmoothScroll}>
                <ActionButton label="Join Waitlist" />
              </Link>{" "}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <MenuIcon
                    className={
                      "size-9 md:hidden text-white hover:text-purple-500 transition"
                    }
                  />
                </SheetTrigger>
                <SheetContent
                  side={"top"}
                  className={"p-8 bg-black text-white"}
                >
                  <div className={"flex items-center justify-between gap-3"}>
                    <div className={"flex items-center"}>
                      <Image
                        src={Logooo}
                        height={40}
                        width={40}
                        className="object-contain"
                        alt="Stute.ai Logo"
                      />
                      <span className="text-white font-semibold text-lg">
                        stute.ai
                      </span>
                    </div>
                  </div>
                  <div className={"mt-8 mb-4"}>
                    <nav className={"grid gap-4 items-center text-lg"}>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white hover:text-white transition"
                        }
                      >
                        <Feather className={"size-6"} />
                        Product
                      </Link>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white hover:text-white transition"
                        }
                      >
                        <CodeXml className={"size-6"} />
                        Features
                      </Link>
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
                        onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when mouse leaves
                      >
                        <button
                          className={
                            "text-white/90 hover:text-white transition"
                          }
                        >
                          
                          Resources
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute top-full mt-2 w-28 bg-black border border-zinc-800 text-white rounded-md shadow-lg">
                            <Link
                              href={"/blog"}
                              className={"block px-4 py-2 hover:bg-zinc-700"}
                            >
                              Blog
                            </Link>
                          </div>
                        )}
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}
