// import { authOptions } from '@/lib/auth'
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { ThemeToggle } from "./ui/ThemeToggle";
import SignOutButton from "./ui/SignOutButton";
import SignInButton from "./ui/SignInButton";
import { authOptions } from "@/lib/auth";
import MenuToggle from "./ui/MenuToggle";
import Image from "next/image";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed max-w-7xl mx-auto w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 z-50 top-0 left-0 right-0 h-16 md:h-20 border mt-4 md:md-8 lg:mt-12 border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between rounded-md">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={`font-extrabold text-lg flex space-x-1 items-center`}
        >
          <img src="/data.png" className="h-12" alt="logo" />
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
          <MenuToggle session={session} />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />

          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <img
                src={session.user.image || ""}
                className="h-10 rounded-full"
                style={{ objectFit: "contain" }}
                alt="dragon"
              />
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
