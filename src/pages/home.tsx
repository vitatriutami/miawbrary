import { BookCard } from "@/components/sharedui/BookCard";
// import { Header } from "@/components/sharedui/Header";
import { HomeHero } from "@/components/sharedui/HomeHero";
// import DashboardLayout from "@/layout/DashboardLayout";
import { bookServices } from "@/services/bookServices";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "@/assets/loading.png";
import ErrorNull from "@/assets/data_error.png";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Home() {
  // Hooks useQuery untuk bantu cache
  const query = useQuery({
    queryKey: ["books"], // key untuk caching ke browser dengan nama/label apa, untuk invalidate (dihapus - dicache ulang)
    queryFn: () => bookServices.getData(""), //
  });
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="min-h-screen lg:flex lg:items-start">
      <div className="space-y-20 flex flex-col justify-center items-center ">
        <HomeHero />
        {query.data?.length === 0 ? (
          <div className="flex flex-col justify-center items-center space-y-6">
            <img src={ErrorNull} className="h-40" alt="loading" />
            <h1 className="text-4xl">There is no book</h1>
          </div>
        ) : null}
        {query.isLoading ? (
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={Loading}
              className="h-40 drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.4)]"
              alt="loading"
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        ) : null}
        {/* popular */}
        <section className="w-full flex flex-col justify-center mb-14 ">
          <main className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl m-auto ">
            {query.data?.slice(4, 7).map((book) => {
              return <BookCard key={book._id} book={book} />;
            })}
            <div className="absolute -top-10 flex justify-between items-center w-full">
              <h1 className="font-semibold text-xl rounded-full bg-blue-200 px-1.5">
                Popular Books
              </h1>
              <Link to="/books">
                <p className="text-blue-500 hover:text-red-500 font-semibold">
                  View All
                </p>
              </Link>
            </div>
          </main>
        </section>
        {/* recently */}
        <section className="p-4 flex flex-col justify-center ">
          <main className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl m-auto ">
            {query.data?.slice(12, 15).map((book) => {
              return <BookCard key={book._id} book={book} />;
            })}
            <div className="absolute -top-10 flex justify-between items-center w-full">
              <h1 className="font-semibold text-xl rounded-full bg-yellow-200 px-1.5">
                New Books
              </h1>
              <Link to="/books">
                <p className="text-blue-500 hover:text-red-500 font-semibold">
                  View All
                </p>
              </Link>
            </div>
          </main>
        </section>
      </div>
      <div className="w-[400px] hidden md:hidden lg:block">
        <div className="flex flex-col items-center px-6 space-y-6">
          <div className="h-[400px] bg-gradient-to-t from-blue-400 to-blue-200 rounded-xl p-2">
            <h1 className="text-2xl font-semibold text-center">Event</h1>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
