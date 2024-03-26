"use client";

import {
  CircleTextSvg,
  DribbbleSvg,
  GithubSvg,
  LineMdMoonFilledToSunnyFilledLoopTransition,
  LineMdSunnyFilledLoopToMoonAltFilledLoopTransition,
  LinkedInSvg,
  MediumSvg,
  PinterestSvg,
  TwitterSvg,
} from "@/components/static-svg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import developerProfile from "../../public/images/profile/developer.png";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/articles",
    text: "Articles",
  },
];

const socialMediaLinks = [
  {
    href: "https://twitter.com/",
    icon: <TwitterSvg className="h-auto w-6" />,
    ariaLabel: "Twitter",
  },
  {
    href: "https://github.com/",
    icon: <GithubSvg className="h-auto w-6" />,
    ariaLabel: "Github",
  },
  {
    href: "https://www.linkedin.com",
    icon: <LinkedInSvg className="h-auto w-6" />,
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://medium.com/",
    icon: <MediumSvg className="h-auto w-6" />,
    ariaLabel: "Medium",
  },
  {
    href: "https://www.pinterest.com",
    icon: <PinterestSvg className="h-auto w-6" />,
    ariaLabel: "Pinterest",
  },
  {
    href: "https://dribbble.com/",
    icon: <DribbbleSvg className="h-auto w-6" />,
    ariaLabel: "Dribbble",
  },
];

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div>
      <button onClick={() => setOpen((prevState) => !prevState)}>
        <div className="space-y-1">
          <div
            className={cn("bg-dark dark:bg-light h-0.5 w-6 transition-all", {
              "translate-y-1.5 rotate-45": open,
            })}
          ></div>
          <div
            className={cn("bg-dark dark:bg-light h-0.5 w-6 transition-all", {
              "opacity-0": open,
            })}
          ></div>
          <div
            className={cn("bg-dark dark:bg-light h-0.5 w-6 transition-all", {
              "-translate-y-1.5 -rotate-45": open,
            })}
          ></div>
        </div>
      </button>

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transition-all",
          {
            flex: open,
          },
        )}
      >
        <div className="dark:bg-light/40 bg-dark/40 flex flex-col items-center justify-between gap-4 rounded-lg p-16 opacity-100 backdrop-blur-sm">
          <div>
            {links.map((link, mi) => (
              <div
                className="dark:text-dark text-light group items-center transition duration-300"
                key={["link", mi].join("-")}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.href);
                    setOpen(false);
                  }}
                >
                  {link.text}
                  <span
                    className={cn(
                      "dark:bg-dark bg-light block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full",
                    )}
                  ></span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {socialMediaLinks.map((link, li) => (
              <motion.span
                key={["social-media-link", li].join("-")}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </Link>
              </motion.span>
            ))}

            <button
              className="bg-dark dark:bg-light flex h-auto w-6 items-center justify-center rounded-full"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="hamburger button"
            >
              {theme === "light" ? (
                <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition className="dark:text-dark text-light" />
              ) : (
                <LineMdMoonFilledToSunnyFilledLoopTransition className="dark:text-dark text-light" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <div className="px-8 py-8 sm:px-8 md:px-8 lg:px-32">
        <div className="flex items-center justify-between">
          <div className="hidden space-x-8 md:flex">
            {links.map((link, mi) => (
              <div
                className="group items-center transition duration-300"
                key={["link", mi].join("-")}
              >
                <Link href={link.href}>
                  {link.text}
                  <span
                    className={cn(
                      "bg-dark dark:bg-light block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full",
                    )}
                  ></span>
                </Link>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <HamburgerMenu />
          </div>

          <div className="absolute left-[50%] translate-x-[-50%]">
            <div className="hover:bg-dark dark:hover:bg-light absolute left-0 top-0 h-16 w-16 rounded-full hover:animate-ping"></div>
            <div className="w16 hover:bg-dark dark:hover:bg-light absolute left-0 top-0 h-16 rounded-full hover:animate-pulse"></div>
            <Link
              href="/"
              className="border-dark bg-dark dark:border-light flex h-16 w-16 items-center justify-center rounded-full border-2"
            >
              <span className="text-light text-2xl font-semibold">CT</span>
            </Link>
          </div>

          <div className="hidden space-x-6 md:flex">
            {socialMediaLinks.map((link, li) => (
              <motion.span
                key={["social-media-link", li].join("-")}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </Link>
              </motion.span>
            ))}

            <button
              className="bg-dark dark:bg-light flex h-auto w-6 items-center justify-center rounded-full"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition className="dark:text-dark text-light" />
              ) : (
                <LineMdMoonFilledToSunnyFilledLoopTransition className="dark:text-dark text-light" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <HireMe />
          </div>
        </div>
      </div>
    </nav>
  );
}

function AnimatedText({ text }: { text: string }) {
  if (typeof text !== "string") return;

  return text.split(" ").map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: i / 10,
      }}
      key={i}
    >
      <span className="text-4xl font-semibold sm:text-7xl md:text-5xl lg:text-6xl">
        {el}{" "}
      </span>
    </motion.span>
  ));
}

function HireMe() {
  return (
    <div className="relative">
      <div className="h-24 w-24 md:h-32 md:w-32">
        <CircleTextSvg className="animate-spin-slow dark:fill-light h-auto w-full" />
      </div>
      <div className="bg-dark dark:bg-light absolute right-1/4 top-1/4 flex h-12 w-12 items-center justify-center  rounded-full md:h-16 md:w-16">
        <Link href={"mailto:trinhchinchin@gmail.com"}>
          <span className="text-light dark:text-dark text-center text-xs font-semibold md:text-sm">
            Hire Me
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex items-center">
        <div className="flex flex-col items-center justify-between p-8 sm:flex-col sm:p-8 md:flex-row md:p-12 lg:flex-row lg:p-16 xl:p-32">
          <div className="flex w-full sm:hidden sm:w-full md:flex md:w-full lg:flex 2xl:w-1/2">
            <Image
              className="h-auto w-full"
              src={developerProfile}
              alt={"Chnirt"}
              priority={true}
            />
          </div>

          <div className="md:w-ful flex w-full flex-col gap-4 sm:w-full 2xl:w-1/2">
            <div>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." />
            </div>

            <div>
              <span>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                className="bg-dark hover:bg-light hover:border-dark dark:text-dark hover:text-dark hover:ring-dark hover:dark:bg-dark hover:dark:ring-light hover:dark:text-light text-light dark:bg-light flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-lg font-semibold transition-all hover:ring"
                href={"/dummy.pdf"}
                target="_blank"
                download={true}
              >
                Resume
                <ExternalLink className="h-6 w-6" strokeWidth={2} />
              </Link>
              <Link
                className="px-4 py-2"
                href={"mailto:trinhchinchin@gmail.com"}
              >
                Contact
                <span className="bg-dark dark:bg-light block h-0.5 max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>

      <div className="bottom-4 left-4 hidden md:fixed md:flex xl:fixed xl:flex 2xl:fixed 2xl:flex">
        <HireMe />
      </div>
    </>
  );
}
