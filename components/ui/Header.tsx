import { Routes } from "@/routes/NavRoutes";
import { routesModel } from "@/routes/routesdetails";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto ">
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />
      <div className="flex-1">
        <form className="flex flex-1 items-center bg-gray-100 p-2 rounded-md space-x-1 mx-2 max-w-96 ">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            className="bg-transparent flex-1 outline-none"
            placeholder="search"
          />
        </form>
      </div>
      <div className="flex items-center space-x-4 px-6">
        {Routes.map((Route: routesModel) => (
          <Link href="/" className={Route.style} key={Route.href}>
            <Route.icon className="h-5" />
            <p>{Route.label}</p>
          </Link>
        ))}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
