import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => {
  return (
    <div className="flex min-h-screen w-full select-none flex-col bg-[#030303] font-inter">
      <Header />
      <main id="main" className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
