import BannerImg from "@/assets/banner_cat.png";
import { BookCheck, BookHeart, CalendarMinus2 } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div>
              <img
                src={BannerImg}
                alt="banner cat img"
                className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl cursor-pointer font-bold w-fit mx-auto relative group">
                Exclusive for Members
                <div className="nav-line" />
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <BookCheck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span className="cursor-pointer relative group">
                      Borrow Books
                      <div className="nav-line" />
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookHeart className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <span className="cursor-pointer relative group">
                      Reading List
                      <div className="nav-line" />
                    </span>
                  </div>
                  <div data-aos-delay="500" className="flex items-center gap-3">
                    <CalendarMinus2 className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span className="cursor-pointer relative group">
                      Join Event
                      <div className="nav-line" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
