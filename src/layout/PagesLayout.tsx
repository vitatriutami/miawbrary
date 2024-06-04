import { Footer } from "@/components/sharedui/Footer";
import { Header } from "@/components/sharedui/Header";
// import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";

export default function PagesLayout() {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="relative">
        <Headroom>
          <Header />
        </Headroom>
        <div className="container px-8 pt-6 pb-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
