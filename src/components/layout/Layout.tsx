import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Main must NOT have max-width or padding */}
      <main className="flex-grow w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
