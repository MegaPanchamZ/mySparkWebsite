"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, useState, useEffect } from "react";
import SubscribeNewsletter from "./subscribeform";
import Image from "next/image";

export default function MainPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "dark" : ""}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <span className="ml-2 font-bold text-xl text-primary dark:text-secondary">
            MySpark
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary to-white dark:to-gray-900 dark:from-secondary">
          <div className="container max-w-full grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
                Welcome to MySpark – your next social discovery!
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-100">
                🌟 <strong>Connect, Share, Discover!</strong> Unlock a world
                tailored to your interests! At MySpark, we believe every
                connection ignites a new opportunity to learn, laugh, and grow.
                Begin your journey with us today and be part of a community
                where genuine connections are just a spark away.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <SubscribeNewsletter />
              <p className="text-xs text-gray-700 dark:text-gray-100">
                Sign up for early access.{" "}
                <Link
                  className="underline underline-offset-2 text-secondary dark:text-graye"
                  href="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container max-w-full grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary dark:text-secondary">
                Discover Your Community
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                🔍 <strong>Find Your Tribe</strong> Join a vibrant community of
                individuals who share your passions, hobbies, and curious mind.
                MySpark makes it easy to discover people who resonate with your
                interests, whether it's art, technology, or the great outdoors.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-3xl bg-primary dark:bg-secondary p-1">
                <Image
                  alt="Screenshot of MySpark app"
                  className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1 rounded-3xl bg-primary dark:bg-secondary p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Real Conversations, Real Connections
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-100">
                    💬 Tired of small talk? Dive into deep conversations through
                    private messaging and community discussions. MySpark is
                    where meaningful conversations create lasting bonds.
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-3xl bg-primary dark:bg-secondary p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Be an Early Bird
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-100">
                    🎉 Don't miss out on the chance to be among the first to
                    experience a new social horizon. Sign up today and be a
                    pioneer in forging paths towards meaningful connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary dark:from-gray-900 dark:to-secondary">
          <div className="container max-w-full grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-100">
                Secure Your Spot Now
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-100">
                🙌 Ready to light the spark? Join our early access list and be
                the first to know when we go live. It's more than an app; it's
                where friendships are formed, ideas are shared, and memories are
                made. Join MySpark – where sparks turn into connections.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <SubscribeNewsletter />
              <p className="text-xs text-gray-700 dark:text-gray-100">
                By signing up, you agree to receive updates and exclusive early
                access invitations. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MySpark. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
