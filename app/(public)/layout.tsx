import type { ReactNode } from "react";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";
import ContactWidget from "@/components/ContactWidget";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <ChatWidget />
      <ContactWidget />
    </>
  );
}

