"use client";
import Link from "next/link";
import Logooo from "@/assets/logooo.png";
import { CodeXml, Feather, MenuIcon, Wallet2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ActionButton } from "@/components/Action-button";
import Image from "next/image";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [isMobile, setIsMobile] = useState(false); // State to track mobile viewport

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    // Check if the screen width is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run on initial mount and whenever window is resized
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={
          "py-4 border-b border-transparent max-md:backdrop-blur md:border-none sticky top-0 z-10"
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
                <Link
                  href={"#"}
                  className={"text-white/90 hover:text-white transition"}
                >
                  Product
                </Link>
                <Link
                  href={"#"}
                  className={"text-white/90 hover:text-white transition"}
                >
                  Features
                </Link>

                {/* Resources with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={"text-white/90 hover:text-white transition"}
                    onClick={handleDropdownToggle}
                  >
                    Resources
                  </button>

                  {/* Dropdown menu */}
                  {(isDropdownOpen || isDropdownOpen) && (
                    <div
                      className="absolute top-full mt-2 w-28 bg-black border border-zinc-800 text-white rounded-md shadow-lg"
                      onClick={handleDropdownToggle} // Close on click
                    >
                      <Link
                        href={"#"}
                        className={"block px-4 py-2 hover:bg-zinc-700"}
                      >
                        Blog
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </section>

            <section className={"flex max-md:gap-4 items-center"}>
              <ActionButton label={"Join Waitlist"} />
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
                        onClick={handleDropdownToggle}
                      >
                        <Link
                          href={"#"}
                          className={
                            "flex items-center gap-3 text-white hover:text-white transition"
                          }
                        >
                          <Wallet2 className={"size-6"} />
                          Resources
                        </Link>

                        {/* Mobile Dropdown Menu */}
                        {isMobile && isDropdownOpen && (
                          <div
                            className="absolute top-full mt-2 w-28 bg-black border border-zinc-800 text-white rounded-md shadow-lg"
                            onClick={handleDropdownToggle} // Close on click
                          >
                            <Link
                              href={"#"}
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
