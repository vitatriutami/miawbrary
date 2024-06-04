import { BookCard } from "@/components/sharedui/BookCard";
import { SearchInput } from "@/components/sharedui/SearchInput";
import { bookServices } from "@/services/bookServices";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Loading from "@/assets/loading.png";
import ErrorNull from "@/assets/data_error.png";
import CatBanner from "@/assets/cat mandi yellow 1.png";

export default function BookCatalog() {
  const [searchParams] = useSearchParams(); // bahasa lain dari query url

  // Hooks useQuery untuk bantu cache
  const query = useQuery({
    queryKey: ["books"], // key untuk caching ke browser dengan nama/label apa, untuk invalidate (dihapus - dicache ulang)
    queryFn: () => bookServices.getData(searchParams.get("search")), //
  });
  console.log(query);

  // rerendering - akan selalu dijalankan ketika search param berubah
  useEffect(() => {
    query.refetch();
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center">
        <div className="mx-auto flex flex-col items-center space-y-20 ">
          {/* hero */}
          <section className="relative lg:w-[1000px] md:w-[500px] w-[300px] py-10 bg-gradient-to-r from-blue-400 to-blue-200 p-3 rounded-xl  flex flex-col justify-center items-center text-center space-y-4">
            <img
              src={CatBanner}
              alt=""
              className="lg:w-52 sm:w-32 w-32 md:w-44 absolute -bottom-14 sm:-left-14 -left-16 lg:-left-16"
            />
            <div>
              <h1 className="text-3xl font-semibold">
                Find book your cat want to read! 🐱🎀
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <SearchInput />
          </section>
          {/* main section */}
          <section className="flex justify-center items-center">
            {query.data?.length === 0 ? (
              <div className="flex flex-col justify-center items-center space-y-6">
                <img src={ErrorNull} className="h-40" alt="loading" />
                <h1 className="text-3xl">There is no book</h1>
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
            {query.isError ? (
              <div className="flex flex-col justify-center items-center space-y-6">
                <img
                  src={ErrorNull}
                  className="h-40 drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.4)]"
                  alt="loading"
                />
                <h1 className="text-3xl">Opss! Data error!</h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl m-auto">
                {query.data?.map((book) => {
                  return <BookCard key={book._id} book={book} />;
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
