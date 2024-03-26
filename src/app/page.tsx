"use client";

import {
  DribbbleSvg,
  GithubSvg,
  LineMdMoonFilledToSunnyFilledLoopTransition,
  LineMdSunnyFilledLoopToMoonAltFilledLoopTransition,
  LinkedInSvg,
  MediumSvg,
  PinterestSvg,
  TwitterSvg,
} from "@/components/static-svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import developerProfile from "../../public/images/profile/developer.png";
import Image from "next/image";
import { useTheme } from "next-themes";

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
  },
  {
    href: "https://github.com/",
    icon: <GithubSvg className="h-auto w-6" />,
  },
  {
    href: "https://www.linkedin.com",
    icon: <LinkedInSvg className="h-auto w-6" />,
  },
  {
    href: "https://medium.com/",
    icon: <MediumSvg className="h-auto w-6" />,
  },
  {
    href: "https://www.pinterest.com",
    icon: <PinterestSvg className="h-auto w-6" />,
  },
  {
    href: "https://dribbble.com/",
    icon: <DribbbleSvg className="h-auto w-6" />,
  },
];

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent closeButtonClassName="left-4 right-auto focus:ring-0 focus:ring-offset-0">
        <div className="flex h-full flex-col justify-center gap-4">
          {links.map((link, mi) => (
            <Button key={["side", "link", mi].join("-")} variant={"link"}>
              {link.text}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Navbar() {
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
                      "block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white",
                    )}
                  ></span>
                </Link>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <SideBar />
          </div>

          <div className="sm:absolute sm:left-[50%] sm:translate-x-[-50%]">
            <div className="absolute left-0 top-0 h-16 w-16 rounded-full hover:animate-ping hover:bg-black dark:hover:bg-white"></div>
            <div className="w16 absolute left-0 top-0 h-16 rounded-full hover:animate-pulse hover:bg-black dark:hover:bg-white"></div>
            <Link
              href="/"
              className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-black dark:border-white"
            >
              <span className="text-2xl font-semibold text-white">CT</span>
            </Link>
          </div>

          <div className="hidden space-x-6 md:flex">
            {socialMediaLinks.map((link, li) => (
              <motion.span
                key={["social-media-link", li].join("-")}
                whileHover={{ y: -2 }}
              >
                <Link href={link.href} target="_blank">
                  {link.icon}
                </Link>
              </motion.span>
            ))}

            <button
              className="flex h-auto w-6 items-center justify-center rounded-full bg-black dark:bg-white"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition className="text-white dark:text-black" />
              ) : (
                <LineMdMoonFilledToSunnyFilledLoopTransition className="text-white dark:text-black" />
              )}
            </button>
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

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="flex min-h-screen w-full items-center">
        <div className="flex w-full flex-col items-center justify-between p-8 sm:flex-col sm:p-8 md:flex-row md:p-12 lg:flex-row lg:p-16 xl:p-32">
          <div className="flex w-full sm:hidden sm:w-full md:flex md:w-full lg:flex 2xl:w-1/2">
            <Image
              className="h-auto w-full"
              src={developerProfile}
              alt={"Chnirt"}
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
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-lg font-semibold text-white dark:bg-white dark:text-black"
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
                <span className="block h-0.5 max-w-full bg-black dark:bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
