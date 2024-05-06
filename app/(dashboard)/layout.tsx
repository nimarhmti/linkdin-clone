import Header from "@/components/ui/Header";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-mainBgColor">
      <div className="sticky top-0 bg-white shadow-md">
        <Header />
      </div>
      <div className="p-2 max-w-6xl mx-auto">{children}</div>
    </main>
  );
}
