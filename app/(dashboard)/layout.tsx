import Header from "@/components/ui/Header";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-1 w-full bg-red-200">{children}</div>
    </main>
  );
}
