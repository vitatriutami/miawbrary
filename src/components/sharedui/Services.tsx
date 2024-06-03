// import { API_URL } from "@/config/ApiUrl";
// import { bookServices } from "@/services/bookServices";
// import { useQuery } from "react-query";
// import img1 from "@/assets/how to stop.png";
import { Link } from "react-router-dom";
import book1 from "@/assets/meow_novel.jpg";
import book2 from "@/assets/how_to_train_your_human.jpg";
import book3 from "@/assets/chicken_soup_cat.jpg";
// import book4 from "@/assets/cat_broken.jpg";
// import book5 from "@/assets/oh_its_you.jpg";

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 sm:gap-20 place-items-center">
            <Link to="/register">
              <section className="rounded-2xl bg-gradient-to-t from-white to-white/10 hover:bg-primary border-2 border-black relative shadow-xl duration-high group w-[240px]">
                {/* h image */}
                <div className="h-[160px]">
                  <img
                    src={book1}
                    alt="book_cover"
                    className="max-w-[140px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                {/* bentuk card */}
                <div className="pt-6 p-2 px-2 flex flex-col justify-end text-center">
                  <h1 className="text-xl font-semibold">Meow: A Novel</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    Sam Austen
                  </p>
                </div>
              </section>
            </Link>
            <Link to="#">
              <section className="rounded-2xl bg-gradient-to-t from-white to-white/10 hover:bg-primary border-2 border-black relative shadow-xl duration-high group w-[240px]">
                {/* h image */}
                <div className="h-[160px]">
                  <img
                    src={book2}
                    alt="book_cover"
                    className="max-w-[140px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                {/* bentuk card */}
                <div className="pt-6 p-2 px-2 flex flex-col justify-end text-center">
                  <h1 className="text-xl font-semibold">
                    How to Train Your Human: A Cat's Guide
                  </h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    Babas
                  </p>
                </div>
              </section>
            </Link>
            <Link to="#">
              <section className="rounded-2xl bg-gradient-to-t from-white to-white/10 hover:bg-primary border-2 border-black relative shadow-xl duration-high group w-[240px]">
                {/* h image */}
                <div className="h-[160px]">
                  <img
                    src={book3}
                    alt="book_cover"
                    className="max-w-[140px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                {/* bentuk card */}
                <div className="pt-6 p-2 px-2 flex flex-col justify-end text-center">
                  <h1 className="text-xl font-semibold">
                    Chicken Soup for the Soul: I Can't Believe My Cat Did That!
                  </h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    Jack Canfield
                  </p>
                </div>
              </section>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
