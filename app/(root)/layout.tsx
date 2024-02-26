import { MobileNav, Sidebar } from "@/components/shared";
import React from "react";

interface Prop {
  children: React.ReactNode;
}

export default function Layout({ children }: Prop) {
  return (
    <main className="root">
      <Sidebar/>
      <MobileNav/>


      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
