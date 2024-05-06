import Image from "next/image";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-5 bg-blue-400">
      <div className="space-x-3 flex items-center">
        <Image
          className="rounded-lg"
          src="https://links.papareact.com/b3z"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="text-lg font-bold text-slate-50">Linkdin</h1>
      </div>
      {children}
    </div>
  );
}
