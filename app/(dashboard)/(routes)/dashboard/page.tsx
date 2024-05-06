import Header from "@/components/ui/Header";
import React from "react";
import UserInformation from "./_components/userInformation/UserInformation";

export default function Dashboard() {
  return (
    <div className="w-full grid grid-cols-8 mt-5 sm:px-5 md:gap-x-3">
      <section className=" hidden md:inline md:col-span-2">
        <UserInformation />
      </section>
      <section className="bg-red-200 col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        teset
      </section>
      <section className="hidden bg-green-300 xl:inline xl:col-span-2">
        teset01
      </section>
    </div>
  );
}
