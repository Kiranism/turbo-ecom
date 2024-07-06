import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";
import { Toaster } from "@turbo-ecom/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">
          <Toaster />
          {children}
        </main>
      </div>
    </>
  );
}
