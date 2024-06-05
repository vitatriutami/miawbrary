import Services from "@/components/sharedui/Services";
import { Testimonials } from "@/components/sharedui/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroCatBook from "@/assets/cat_and_books (2).png";
import Banner from "@/components/sharedui/Banner";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "@/assets/cat-logo.png";
// import { API_URL } from "@/config/ApiUrl";
// import { bookServices } from "@/services/bookServices";
// import { IBook } from "@/types/entity";
// import { useEffect } from "react";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="min-h-full">
      <section className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-black">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Online Library App{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-orange-500/90">
                  for You and Your Cat
                </span>{" "}
                at The Same Time
              </h1>
              <div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-300 border-2 border-orange-500 hover:scale-105 duration-200 text-black py-2 px-4 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <img
                src={HeroCatBook}
                alt="hero cat img"
                className="w-[500px] sm:w-scale-125 mx-auto"
              />
              <div className="bg-gradient-to-t from-orange-500 to-orange-300 p-3 rounded-xl absolute top-12 left-12">
                <h1 className="text-white">I read</h1>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-300 p-3 rounded-xl absolute bottom-10 right-10">
                <h1 className="text-white">You read</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books */}
      <section className="py-10">
        <div className="container flex flex-col items-center">
          {/* heading */}
          <Link to="/register" className="mb-20 w-fit mx-auto relative group">
            <h1 className="text-4xl font-bold text-gray-800">
              Popular Books
              <div className="nav-line" />
            </h1>
          </Link>
          {/* Card section */}
          {/* ..... */}
          <Services />
          {/* <ImageSlider /> */}
        </div>
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Testimonials />
      </section>
      {/* before footer */}
      <section className="bg-white/20 rounded-2xl min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-4 pt-24">
          {/* company details */}
          <div className="flex flex-col justify-center space-y-2">
            <div>
              <div className="flex gap-2 pb-5">
                <img src={Logo} alt="logo" className="h-10" />
                <h1 className="font-semibold tracking-widest text-3xl sm:text-4xl">
                  miawbrary.
                </h1>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit
                amet consectetur adipisicing elit.
              </div>
            </div>
            <div>
              <div>+62 123-4567-8945</div>
              <div>vitatriutami@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-xl font-semibold">Quick Menu</h2>
            <ul className="space-y-2">
              <Link to="/home">
                <li className="w-fit mx-auto relative group">
                  Home
                  <div className="nav-line" />
                </li>
              </Link>
              <Link to="/about">
                <li className="w-fit mx-auto relative group">
                  About Us
                  <div className="nav-line" />
                </li>
              </Link>
              <Link to="/books">
                <li className="w-fit mx-auto relative group">
                  Books
                  <div className="nav-line" />
                </li>
              </Link>
              <Link to="/events">
                <li className="w-fit mx-auto relative group">
                  Events
                  <div className="nav-line" />
                </li>
              </Link>
              <Link to="/faq">
                <li className="w-fit mx-auto relative group">
                  FaQ
                  <div className="nav-line" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col my-auto space-y-4">
            <h2 className="font-semibold">Subscribe for newsletter</h2>
            <div className="flex gap-2">
              <Input
                placeholder="youremail@mail.com"
                className="text-slate-600"
              />
              <Button className="border-2 border-black rounded-xl hover:scale-105">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-2">
              <button>
                <FaFacebook size={20} />
              </button>
              <button>
                <FaXTwitter size={20} />
              </button>
              <button>
                <RiInstagramFill size={20} />
              </button>
              <button>
                <IoLogoYoutube size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
